<?php

use App\Http\Controllers\main\MainController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix'=>'person', 'namespace'=>'App\Http\Controllers\Person'], function(){
    Route::get('/index',[MainController::class, 'index'])->name('main.index');
    Route::post('/store',[MainController::class, 'store'])->name('main.store');
});