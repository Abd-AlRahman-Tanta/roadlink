<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use Exception;

class ContactController extends Controller
{
  public function sendContactEmail(Request $request)
  {
    try {
      $validated = $request->validate([
        'name' => 'required|string|max:255',
        'phone_number' => 'required|string|max:20',
        'email' => 'required|email|max:255',
        'message' => 'required|string',
      ]);

      Mail::raw(
        "You have a new submission from " . env('APP_NAME') . "\n" .
          "Name: {$validated['name']}\n" .
          "Email: {$validated['email']}\n" .
          "Phone Number: {$validated['phone_number']}\n" .
          "Message: {$validated['message']}",
        function ($message) {
          $message->to(env('APP_EMAIL'))
            ->subject('New Contact Form Submission');
        }
      );

      return response()->json(["success" => true, "status" => 200]);
    } catch (Exception $e) {
      Log::error('Contact form email failed: ' . $e->getMessage());

      return response()->json([
        "success" => false,
        "status" => 500,
        "error" => "Something went wrong while sending your message. Please try again later."
      ], 500);
    }
  }
}
