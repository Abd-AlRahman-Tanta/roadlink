<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Utils\JsonHelper;

class DashboardContentController extends Controller
{
  public function update(Request $request)
  {
    $payload = $request->all();

    $data = $payload['data'] ?? [];
    $dataId = $payload['dataId'] ?? null;
    $dataArrKey = $payload['dataArr'] ?? null;

    foreach ($data as $name => $item) {
      $fileName = $item['file'] ?? null;
      $value = $item['value'] ?? null;

      if (!$fileName) {
        continue;
      }

      $json = JsonHelper::read($fileName);

      if ($dataId && $dataArrKey && isset($json[$dataArrKey]) && is_array($json[$dataArrKey])) {
        $found = false;

        foreach ($json[$dataArrKey] as &$obj) {
          if (isset($obj['id']) && (string)$obj['id'] === (string)$dataId) {
            $obj[$name] = $value;
            $found = true;
            break;
          }
        }
        unset($obj);

        if (!$found) {
          $json[$dataArrKey][] = array_merge(['id' => $dataId], [$name => $value]);
        }
      } else {
        $json[$name] = $value;
      }

      JsonHelper::write($fileName, $json);
    }

    return response()->json(['status' => 'success']);
  }

  public function delete(Request $request)
  {
    $dataId = $request->input('dataId');
    $dataArrKey = $request->input('dataArr');
    $dataFile = $request->input('dataFile');

    if (!$dataId || !$dataArrKey || !$dataFile) {
      return response()->json(['error' => 'Missing parameters'], 400);
    }

    $json = JsonHelper::read($dataFile);

    if (!isset($json[$dataArrKey]) || !is_array($json[$dataArrKey])) {
      return response()->json(['error' => 'Array key not found in file'], 404);
    }

    $json[$dataArrKey] = array_values(
      array_filter($json[$dataArrKey], function ($item) use ($dataId) {
        return !(isset($item['id']) && (string)$item['id'] === (string)$dataId);
      })
    );

    JsonHelper::write($dataFile, $json);

    return response()->json(['status' => 'success']);
  }
}
