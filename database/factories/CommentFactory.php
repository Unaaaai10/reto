<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

use App\Models\User;
use App\Models\Activity;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Comment>
 */
class CommentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $user_id = User::inRandomOrder()->value('id');
        $activity_id = Activity::inRandomOrder()->value('id');
        return [
            'content' => $this->faker->sentence(),
            'user_id' => $user_id,
            'activity_id' => $activity_id,
        ];
    }
}
