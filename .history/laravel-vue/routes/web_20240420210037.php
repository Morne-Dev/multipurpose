<?php

use App\Http\Controllers\ApplicationControll;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('{view}', ApplicationControll::class) ->where('view', '(.*)');