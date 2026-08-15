<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

#[Fillable(['folio', 'subject', 'description', 'requested_by', 'status', 'priority', 'support_unit_id', 'category_id'])]
class Ticket extends Model
{
    use HasFactory;


    public function requestedBy(){
        return $this->belongsTo(User::class, 'requested_by');
    }

    public function supportUnit(){
        return $this->belongsTo(SupportUnit::class);
    }

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function assignedTo(){
        return $this->belongsToMany(User::class, 'ticket_assignments', 'ticket_id', 'assigned_to');
    }
}
