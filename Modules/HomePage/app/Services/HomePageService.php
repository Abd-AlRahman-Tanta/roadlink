<?php

namespace Modules\HomePage\Services;

use Modules\HomePage\Repositories\HomePageRepository;

class HomePageService
{
  protected $homePageRepository;

  public function __construct(HomePageRepository $homePageRepository)
  {
    $this->homePageRepository = $homePageRepository;
  }
  public function handleCreateMessageRequest($req)
  {
    return $this->homePageRepository->createMessage($req->validated());
  }
}
