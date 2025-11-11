<?php

namespace Modules\HomePage\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Utils\BringCorrectData;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Modules\HomePage\Services\HomePageService;
use Modules\HomePage\Http\Requests\MessageRequest;

class HomePageController extends Controller
{
  public $homePageService;
  public function __construct(HomePageService $homePageService)
  {
    $this->homePageService = $homePageService;
  }
  public function showHomePage()
  {
    return Inertia::render("HomePage", [
      "data" => BringCorrectData::bring("HomePage")
    ]);
  }
  public function recieveFormMessages(MessageRequest $req)
  {
    try {
      $this->homePageService->handleCreateMessageRequest($req);
      return redirect()->back()->with("success", "message Delivered Successfully!");
    } catch (\Exception $e) {
      return redirect()->back()->with("error", $e->getMessage());
    }
  }
}
