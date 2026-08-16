<?php

namespace Database\Seeders;

use App\Models\Skill;
use App\Models\SupportUnit;
use App\Models\User;
use Illuminate\Database\Seeder;

class SkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 1. Obtener la primera unidad de soporte
        $unit = SupportUnit::first();

        // Si no hay ninguna unidad creada previamente, detenemos la ejecución
        if (!$unit) {
            return;
        }

        $user = User::first();

        $skills = [
            'Hardware',
            'Software',
            'Redes',
            'Sistemas Operativos',
            'Servidores',
            'Cloud',
            'Bases de Datos',
            'Seguridad',
            'Mantenimiento',
            'Soporte Técnico',
            'Aplicaciones',
            'Instalaciones',
            'Configuraciones',
        ];

        foreach ($skills as $skillName) {
            // 2. Pasamos obligatoriamente el support_unit_id
            $skill = Skill::create([
                'name' => $skillName,
                'support_unit_id' => $unit->id,
            ]);

            // 3. Asociar en la tabla pivote si existe un usuario
            if ($user) {
                $skill->users()->sync([$user->id]);
            }
        }
    }
}
