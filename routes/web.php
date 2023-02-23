<?php

use App\Http\Controllers\SPAController;
use Illuminate\Support\Facades\Route;


/*<<<<<<< HEAD
Route::get('/', function () {
    return view('page.person');
});

Route::get('/spa/{page}', [App\Http\Controllers\SPAController::class, '__invoke']);

/*Route::get('/home', function () {
    return view('home');
});*/

Route::get('/{page}', [SPAController::class, '__invoke'])->where('page','.*');






