<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <?php
  //set headers to NOT cache a page
  header("Accept-Ranges: bytes");
?>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title inertia>{{ config('app.name', 'Teryaq') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <meta name="theme-color" content="#ffffff"/>
    {{-- @if (request()->is('dashboard*') || request()->is('admin*')) --}}
      <meta name="csrf-token" content="{{ csrf_token() }}">
    {{-- @endif --}}
    <!-- Scripts -->
    {{-- @routes --}}
    @viteReactRefresh
    @vite(['resources/js/app.tsx'])
    @inertiaHead
  </head>
  <body>
    @inertia
</body>
</html>
