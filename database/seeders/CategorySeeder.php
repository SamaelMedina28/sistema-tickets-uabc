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
        Category::create(['name' => 'Mantenimiento']);
        Category::create(['name' => 'Instalacion de Software']);
        Category::create(['name' => 'Instalacion de Hardware']);
        Category::create(['name' => 'Redes']);
        Category::create(['name' => 'Instalacion de Impresoras']);
        Category::create(['name' => 'Instalacion de Telefonos']);
    }
}
