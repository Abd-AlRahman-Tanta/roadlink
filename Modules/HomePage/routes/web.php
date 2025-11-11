<?php

use Illuminate\Support\Facades\Route;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use Modules\HomePage\Http\Controllers\HomePageController;

Route::group(
  [
    "prefix" => "/" . LaravelLocalization::setLocale(),
    "middleware" => ['localeSessionRedirect', 'localizationRedirect']
  ],
  function () {
    Route::get("/", [HomePageController::class, "showHomePage"]);
    Route::post("/send-form", [HomePageController::class, "recieveFormMessages"]);
  }
);
