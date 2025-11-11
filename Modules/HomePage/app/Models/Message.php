<?php

namespace Modules\HomePage\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Modules\HomePage\Database\Factories\MessageFactory;

class Message extends Model
{
  use HasFactory;

  /**
   * The attributes that are mass assignable.
   */
  protected $table = "messages";
  protected $fillable = ["name", "email", "company_field", "message"];

  // protected static function newFactory(): MessageFactory
  // {
  //     // return MessageFactory::new();
  // }
}
