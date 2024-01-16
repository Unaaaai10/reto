<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;
use App\Models\Activity;

class MyActivitiesController extends Controller
{
    public function my_activities()
    {
        $user_id = Auth::id();
        $activities = Activity::where('user_id', $user_id)->get();
        //dd(Auth::id());
        return Inertia::render('Activities/MyActivities', ['activities' => $activities]);
    }
}
