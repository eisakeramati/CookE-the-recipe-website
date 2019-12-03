<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function index(){
        $title = 'wecome to the page';
        return view('pages.index', compact('title'));
    }

    public function about(){
        return view('pages.about');
    }

    public function services(){
        $data = array(
            'app1' => 'item1',
            'app2' => ['web design', 'programming']
        );
        return view('pages.services') -> with($data);
    }

    public function summary(){
        return view('pages.Summary');
    }
    public function tutorial(){
        return view('pages.tutorial');
    }
    public function install(){
        return view('pages.install');
    }

}
