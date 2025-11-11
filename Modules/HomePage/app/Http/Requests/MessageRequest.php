<?php

namespace Modules\HomePage\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MessageRequest extends FormRequest
{
  /**
   * Get the validation rules that apply to the request.
   */
  public function rules(): array
  {
    return [
      "name" => "required|string",
      "email" => "required|string",
      "company_field" => "nullable|string",
      "message" => "nullable|string"
    ];
  }

  /**
   * Determine if the user is authorized to make this request.
   */
  public function authorize(): bool
  {
    return true;
  }
  public function messages()
  {
    return [
      "name.required"  => "Your Name Is Required!!!",
      "email.required" => "Your Email is Required!!",
    ];
  }
}
