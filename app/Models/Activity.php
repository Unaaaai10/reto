<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

//Relacion 1:1
use App\Models\ActivityAddress;


//Relacion 1:N
use App\Models\User;
use App\Models\Comment;

//Relacion N:M
use App\Models\Tag;

class Activity extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'description', 'price', 'location', 'start', 'duration', 'image', 'capacity', 'user_id'
    ];

    //Relacion 1:N
    public function user(){
        return $this->belongsTo(User::class);
    }

    //Relacion M:N
    public function users(){
        return $this->belongsToMany(User::class);
    }


    //Relacion M:N
    public function tags(){
        return $this->belongsToMany(Tag::class);
    }

    //Relacion 1:N
    public function comments(){
        return $this->hasMany(Comment::class);
    }

    //Relacion 1:1
    public function activity_address(){
        return $this->hasOne(ActivityAddress::class);
    }
}
