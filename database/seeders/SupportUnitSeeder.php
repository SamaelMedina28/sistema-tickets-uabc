<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SupportUnit;
class SupportUnitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $supportUnit = SupportUnit::firstOrCreate([
            'name' => 'Soporte Técnico',
            'location' => 'FCQI',
        ]);
    }
}
