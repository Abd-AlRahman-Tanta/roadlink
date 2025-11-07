<?php

use App\Http\Controllers\AuthenticationController;
use Illuminate\Support\Facades\Route;


Route::middleware('guest')->group(function () {
  // Display registration view
  Route::get("/register", [AuthenticationController::class, 'displayRegistrationView']);

  // Create user
  Route::post("/register", [AuthenticationController::class, 'registerNewUser'])->name("register");

  // Display the login view
  Route::get('/login', [AuthenticationController::class, 'displayLoginView'])->name('login');

  // Log the user in
  Route::post('/login', [AuthenticationController::class, 'logUserIn']);
});


Route::middleware('auth')->group(function () {
  Route::get('logout', [AuthenticationController::class, 'logUserOut']);
});
