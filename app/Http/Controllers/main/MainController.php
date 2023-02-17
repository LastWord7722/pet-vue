<?php

namespace App\Http\Controllers\main;

use App\Http\Controllers\Controller;
use App\Http\Requests\Person\StorePersonRequest;
use App\Models\Person;

class MainController extends Controller
{
    public function index()
    {
        $persons = Person::all();

        return $persons;
    }

    public function store(StorePersonRequest $personRequest){
        $data = $personRequest->validated();
        $person = Person::create($data);
        return $person;
    }
}
