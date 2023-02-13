<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MainController extends Controller
{
    public function __invoke()
    {
        $persons = [
            [
                'id' => 1,
                'name'=> 'Mark',
                'age'=> 22,
            ],
            [
                'id' => 2,
                'name'=> 'vlada',
                'age'=> 19,
            ],
            [
                'id' => 3,
                'name'=> 'Koly',
                'age'=> 18,
            ],
        ];

        return 124;
    }
}
