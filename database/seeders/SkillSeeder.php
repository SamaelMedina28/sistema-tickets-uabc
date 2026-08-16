<?php

namespace Database\Seeders;

use App\Models\Skill;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $skills = [
            ['name' => 'Hardware'],
            ['name' => 'Software'],
            ['name' => 'Redes'],
            ['name' => 'Sistemas Operativos'],
            ['name' => 'Servidores'],
            ['name' => 'Cloud'],
            ['name' => 'Bases de Datos'],
            ['name' => 'Seguridad'],
            ['name' => 'Mantenimiento'],
            ['name' => 'Soporte Técnico'],
            ['name' => 'Aplicaciones'],
            ['name' => 'Instalaciones'],
            ['name' => 'Configuraciones'],
        ];

        foreach ($skills as $skill) {
            Skill::create($skill);
        }
    }
}
