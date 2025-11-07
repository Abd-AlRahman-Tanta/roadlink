<?php

use Illuminate\Support\Facades\Route;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use Modules\HomePage\Http\Controllers\HomePageController;

Route::group(
  [
    "prefix" => "/" . LaravelLocalization::setLocale(),
    "middleware" => ["localizationRedirect", "localeSessionRedirect"]
  ],
  function () {
    Route::get("/", [HomePageController::class, "showHomePage"]);
  }
);
