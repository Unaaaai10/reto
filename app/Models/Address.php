<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;

class Address extends Model
{
    use HasFactory;

    protected $fillable = [
        'country', 'province', 'municipality', 'zip_code', 'street', 'number'
    ];

    //Relacion 1:1
    public function user(){
        return $this->belongsTo(User::class);
    }
}
