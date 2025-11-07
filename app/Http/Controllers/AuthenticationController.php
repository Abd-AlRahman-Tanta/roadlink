<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;

class AuthenticationController extends Controller
{
  // Registration Methods
  // This function will display the registration view
  public function displayRegistrationView(): Response
  {
    return Inertia::render('Auth/Register');
  }


  // This function will register a new user
  public function registerNewUser(Request $request): RedirectResponse
  {
    $request->validate([
      'name' => "required|string|max:255",
      'email' => 'required|string|email|unique:users',
      'password' => ['nullable', 'confirmed', Rules\Password::defaults()]
    ]);


    $user = User::create([
      'name' => $request->name,
      'email' => $request->email,
      'password' => Hash::make($request->password) ?? "",
    ]);

    Auth::login($user);

    return redirect()->intended("/dashboard");
  }

  // Login Methods
  // This function will display the login view
  public function displayLoginView(): Response
  {
    return Inertia::render("Auth/Login");
  }

  // This function will log the user in
  public function LogUserIn(Request $request)
  {
    $request->validate([
      "email" => "required|email",
      "password" => "required|string",
    ]);

    if (!Auth::attempt($request->only("email", "password"))) {
      throw ValidationException::withMessages([
        'email' => trans('auth.failed'),
      ]);
    }

    $request->session()->regenerate();

    return redirect()->intended("/");
  }
  // This function will log the user out
  public function logUserOut(Request $request): RedirectResponse
  {
    Auth::guard("web")->logout();
    $request->session()->invalidate();
    $request->session()->regenerateToken();
    return redirect('/');
  }
}
