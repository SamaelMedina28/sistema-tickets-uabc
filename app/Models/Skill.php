<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['name', 'support_unit_id'])]
class Skill extends Model
{
    public function users()
    {
        return $this->belongsToMany(User::class, 'skill_user', 'skill_id', 'user_id');
    }

    public function supportUnit()
    {
        return $this->belongsTo(SupportUnit::class, 'support_unit_id');
    }
}
