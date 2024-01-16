<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class TagController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $tags = Tag::all();
        //dd($tags);
        if(Gate::allows('access-admin')){
            return Inertia::render('Tags/CreateTag');
        }else{
            //return "hola";
            //return Inertia::render('Activities/AllActivities', ['activities' => $activities]);
            return to_route('access_denied_tag');
            //return Inertia::render('AccessDenied');

        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:20',
        ]);
        
        $tag = Tag::create([
            'name' => $request['name']
        ]);
    }

    public function storeTag(Request $request){
        //dd($request->all());
        $tag = Tag::create([
            'name' => $request['name']
        ]);
        
        //return response()->json(['message' => 'Tag creado exitosamente']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Tag $tag)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tag $tag)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Tag $tag)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tag $tag)
    {
        //
    }

    public function access_denied_tag(){

        return  Inertia::render('AccessDeniedTag');
    }
}
