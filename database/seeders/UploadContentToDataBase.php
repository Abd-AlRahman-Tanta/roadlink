<?php

namespace Database\Seeders;

use App\Models\Content;
use App\Utils\BringJson;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UploadContentToDataBase extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    $arHomePage = BringJson::read("ArHomePage");
    Content::create([
      "page_name" => "HomePage",
      "lang" => "ar",
      "data" => $arHomePage
    ]);
    $enHomePage = BringJson::read("EnHomePage");
    Content::create([
      "page_name" => "HomePage",
      "lang" => "en",
      "data" => $enHomePage
    ]);
  }
}
