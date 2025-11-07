<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Spatie\Image\Image;

class ImageUploadController extends Controller
{
  public function upload(Request $request)
  {
    $request->validate([
      'images.*.file' => 'required|image',
      'images.*.name' => 'nullable|string',
    ]);

    $dir = storage_path('app/public/Images');
    if (!file_exists($dir)) {
      mkdir($dir, 0755, true);
    }

    foreach ($request->images as $imgData) {
      $file = $imgData['file'];
      $name = $imgData['name'] ?? pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
      $path = $dir . "/{$name}.webp";

      Image::load($file)
        ->format('webp')   // encode to WebP
        ->quality(90)
        ->save($path);
    }

    return response()->json(['success' => true]);
  }
}
