<?php

use App\Http\Controllers\SPAController;
use Illuminate\Support\Facades\Route;


Route::get('/{page}', [SPAController::class, '__invoke'])->where('page','.*');





