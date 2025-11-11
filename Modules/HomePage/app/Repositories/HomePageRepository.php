<?php

namespace Modules\HomePage\Repositories;

use Modules\HomePage\Models\Message;

class HomePageRepository
{
  public function createMessage($req)
  {
    return Message::create($req);
  }
}
