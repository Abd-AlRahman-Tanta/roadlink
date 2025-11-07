<?php

namespace Modules\HomePage\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Utils\BringCorrectData;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomePageController extends Controller
{
  public function showHomePage()
  {
    return Inertia::render("HomePage", [
      "data" => BringCorrectData::bring("HomePage")
    ]);
  }
}
