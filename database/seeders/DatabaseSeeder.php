<?php

namespace Database\Seeders;


use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $this->call([
            SupportUnitSeeder::class,
        ]);

        $this->call([
            CategorySeeder::class,
            SkillSeeder::class
        ]);           
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);
        User::factory()->create([
            'name' => 'Test User 1',
            'email' => 'test1@example.com',
            'rol' => 'miembro',
        ]);
        User::factory()->create([
            'name' => 'Test User 2',
            'email' => 'test2@example.com',
            'rol' => 'miembro',
        ]);
        User::factory()->create([
            'name' => 'Test User 3',
            'email' => 'test3@example.com',
            'rol' => 'lider',
        ]);
        User::factory(10)->create();
        

    }
}
