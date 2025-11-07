<?php

namespace App\Utils;

use App\Models\Content;
use Exception;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

class BringCorrectData
{
  public static function bring($pageName)
  {
    $lang = LaravelLocalization::getCurrentLocale();
    $page = Content::where("page_name", $pageName)->where("lang", $lang)->first();
    $data = $page["data"];
    return $data;
  }
}
