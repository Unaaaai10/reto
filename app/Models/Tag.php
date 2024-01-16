<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

//Relacion N:M
use App\Models\Activity;

class Tag extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    //Relacion N:M
    public function activities(){
        return $this->belongsToMany(Activity::class);
    }
}
