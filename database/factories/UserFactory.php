<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $userTypes = ['teacher', 'student', 'admin'];
        return [
            'name' => $this->faker->word(),
            'surname' => $this->faker->word(),
            'email' => $this->faker->email(),
            'userType' => $this->faker->randomElement($userTypes),
            'phone' => $this->faker->numerify('#########'),
            'age' => $this->faker->numberBetween(0,120),
            'image' => $this->faker->imageUrl(640, 480, 'animals', true),
            'qualifications' => $this->faker->word(),
            'biography' => $this->faker->paragraph(),
            'email_verified_at' => now(),
            //'password' => static::$password ??= Hash::make('password'),
            'password' => $this->faker->numerify('########'),
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
