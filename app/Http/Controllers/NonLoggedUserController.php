<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Activity;
use Inertia\Inertia;

class NonLoggedUserController extends Controller
{
    public function index()
    {
        $activities = Activity::orderBy('created_at', 'desc')->get();
        //dd(Auth::id());
        return Inertia::render('Activities/AllActivities', ['activities' => $activities]);
    }
}
