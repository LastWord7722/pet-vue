<?php

namespace App\Http\Controllers;

class SPAController extends Controller
{
    public function __invoke()
    {
        return view('spa.index');
    }
}
