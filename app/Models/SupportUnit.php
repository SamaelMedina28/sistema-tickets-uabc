<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $name
 * @property string $location
 */
#[Fillable(['name', 'location'])]
class SupportUnit extends Model
{
    //
    public function heads()
    {
        return $this->hasMany(User::class, 'support_unit_id')->where('rol', 'lider');
    }

    public function members()
    {
        return $this->hasMany(User::class, 'support_unit_id')->where('rol', 'miembro');
    }

    public function users()
    {
        return $this->hasMany(User::class, 'support_unit_id');
    }
}
