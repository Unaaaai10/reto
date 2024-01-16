<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

//Relacion 1:N
use App\Models\User;
use App\Models\Activity;

class Comment extends Model
{
    use HasFactory;


    //Relacion 1:N
    public function user(){
        return $this->belongsTo(User::class);
    }


    //Relacion 1:N
    public function activity(){
        return $this->belongsTo(Activity::class);
    }
}
