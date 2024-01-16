<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'surname',
        'phone',
        'age',
        'userType',
        'email',
        'image',
        'qualifications',
        'biography',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];


    //Relationships:
    //Relacion 1:1
    public function address(){
        return $this->hasOne(Address::class);
    }
    
    //Relacion 1:N
    public function activities(){
        return $this->hasMany(Activity::class);
    }

    //Relacion M:N
    public function activitiesManyToMany(){
        return $this->belongsToMany(Activity::class);
    }
    
    //Relacion 1:N
    public function comments(){
        return $this->hasMany(Comment::class);
    }
}
