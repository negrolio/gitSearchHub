<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RoutesController extends Controller
{
    public function home () {
        dd(['tuculei',5,6]);
        return view('welcome');
    }

    public function searchRepo () {
        return view('search',[
            'string' => 'holanda'
        ]);
    }
}
