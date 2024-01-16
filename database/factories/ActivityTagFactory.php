<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

use App\Models\Activity;
use App\Models\Tag;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ActivityTagFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $tag_id = Tag::inRandomOrder()->value('id');
        $activity_id = Activity::inRandomOrder()->value('id');
        return [
            'tag_id' => $tag_id,
            'activity_id' => $activity_id
        ];
    }
}
