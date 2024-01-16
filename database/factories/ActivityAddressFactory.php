<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Activity;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ActivityAddress>
 */
class ActivityAddressFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $activity_id = Activity::inRandomOrder()->value('id');
        return [
            'country' => $this->faker->country(),
            'province' => $this->faker->state(),
            'municipality' => $this->faker->city(),
            'activity_id' => $activity_id,
        ];
    }
}
