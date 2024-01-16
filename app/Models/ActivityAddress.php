<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Activity;

class ActivityAddress extends Model
{
    use HasFactory;

    protected $fillable = [
        'country', 'province', 'municipality'
    ];

        //Relacion 1:1
        public function activity(){
            return $this->belongsTo(Activity::class);
        }
}
