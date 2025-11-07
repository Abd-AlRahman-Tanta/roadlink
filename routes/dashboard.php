<?php

use App\Http\Controllers\Dashboard\DashboardContentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;

Route::post('/dashboard/update-content', [DashboardContentController::class, 'update']);
Route::post('/dashboard/delete-content', [DashboardContentController::class, 'delete']);



Route::post('/upload-file', function (Request $request) {
  $file = $request->file('file') ?? $request->file('upload');
  if (!$file) {
    return response()->json(['error' => 'No file provided'], 400);
  }
  $path = $file->store('uploads', 'public');
  return response()->json(['url' => '/storage/' . $path]);
});
