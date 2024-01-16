<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

use App\Models\Activity;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Tag;


class ActivityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user_id = Auth::id();
        $user = User::find($user_id);
        $activities = Activity::orderBy('created_at', 'desc')->get();
        //dd(Auth::id());
        return Inertia::render('Activities/AllActivities', ['activities' => $activities, 'user' => $user]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $activities = Activity::all();
        $tags = Tag::all();
        //dd($tags);
        if(Gate::allows('access-teacher-admin')){
            return Inertia::render('Activities/CreateActivity', ['tags' => $tags]);
        }else{
            //return "hola";
            //return Inertia::render('Activities/AllActivities', ['activities' => $activities]);
            return to_route('access_denied');
            //return Inertia::render('AccessDenied');

        }
    }

    public function storeActivity(Request $request){

        $tags = $request->input('tags[]');
        //dd($tags);
        $user_id = Auth::id();
        //Validation
        $request->validate([
            'title' => 'required|max:50|min:10',
            'description' => 'required|max:255|min:10',
            'price' => 'required|numeric|min:5|max:100',
            'location' => 'required|max:50',
            'start' => 'required',
            'duration' => 'required|numeric|min:30',
            'capacity' => 'required|numeric|max:50'
        ]);

        $activity = Activity::create([
            'title' => $request['title'],
            'description' => $request['description'],
            'price' => $request['price'],
            'location' => $request['location'],
            'start' => $request['start'],
            'duration' => $request['duration'],
            'image' => $request['image'],
            'capacity' => $request['capacity'],
            'user_id' => $user_id
        ]);

        //$activity->tags()->sync($tags);
        //return redirect('/');
        //return redirect()->route('/');
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return "Hola";

        /*$request->validate([
            'title' => 'required|max:50',
            'description' => 'required|max:200',
            'price' => 'required',
            'location' => 'required|max:200',
            'start' => 'required',
            'duration' => 'required'
        ]);

        $activity = new Activity($request->input());
        $activity->save();
        return redirect()->route('dashboard');*/
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $activity = Activity::find($id);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $activity = Activity::findOrFail($id);
        //dd($activity);
        $user_id = Auth::id();
        $user = User::find($user_id);
        $tags = Tag::all();
        return Inertia::render('Activities/EditActivity', [
            'tags' => $tags,
            'activity' => $activity
        ]);
  
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Activity $activity)
    {
        return('hola');
    }

    public function updateActivity(Request $request, $id)
    {
        $validatedData = $request->validate([
            'title' => 'required|max:50|min:10',
            'description' => 'required|max:255|min:10',
            'price' => 'required|numeric|min:5|max:100',
            'location' => 'required|max:50',
            'start' => 'required',
            'duration' => 'required|numeric|min:30',
            'capacity' => 'required|numeric|max:50'
        ]);
    
        $activity = Activity::find($id);
        $activity->update($validatedData);
    
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //$activities = Activity::orderBy('created_at', 'desc')->get();
        
        $activity = Activity::findOrFail($id);
        $activity->delete();
        //dd($activity);
        //return Inertia::render('Activities/MyActivities', ['activities' => $activities]);
        return to_route('access_denied');
        
    }

    public function myActivities()
    {
        $user_id = Auth::id();
        $activities = Activity::where('user_id', $user_id)->get();
        //dd(Auth::id());
        return Inertia::render('Activities/MyActivities', ['activities' => $activities]);
    }

    public function access_denied(){
        
        return  Inertia::render('AccessDenied');
    }


}
