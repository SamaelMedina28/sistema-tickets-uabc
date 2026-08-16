<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create(['name' => 'Mantenimiento', "support_unit_id" => 1]);
        Category::create(['name' => 'Reparacion de computadoras y laptops', "support_unit_id" => 1]);
        Category::create(['name' => 'Cableado de redes', "support_unit_id" => 1]);
        Category::create(['name' => 'Instalacion y configuracion de software', "support_unit_id" => 1]);
    }
}
