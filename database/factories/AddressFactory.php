<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

use App\Models\User;
use App\Models\Address;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Address>
 */
class AddressFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        do {
            $user_id = User::inRandomOrder()->pluck('id')->first();
        } while (Address::where('user_id', $user_id)->exists());
        return [
            'country' => $this->faker->country(),
            'province' => $this->faker->state(),
            'municipality' => $this->faker->city(),
            'zip_code' => $this->faker->postcode(),
            'street' => $this->faker->streetName(),
            'number' => $this->faker->buildingNumber(),
            'user_id' => $user_id
        ];
    }
}
