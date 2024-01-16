<?php

namespace Database\Seeders;

//use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Activity;
use App\Models\User;
use App\Models\Address;
use App\Models\Comment;
use App\Models\Tag;
use App\Models\ActivityAddress;
use App\Models\ActivityTag;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        
        
        //$this->call(UsersTableSeeder::class);
        //$this->call(TagsTableSeeder::class);
        //User::factory(20)->create();
        //Activity::factory(10)->create();
        /*Address::factory(5)->create();
        Comment::factory(5)->create();
        ActivityAddress::factory(5)->create();*/

        
        //ActivityTag::factory(15)->create();
        

        
    }
}
