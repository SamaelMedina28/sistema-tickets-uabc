<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->string('folio');
            $table->string('subject');
            $table->text('description');
            // Quien lo solicita
            $table->foreignId('requested_by')->constrained('users')->cascadeOnDelete();
            $table->enum('status', ['pendiente', 'asignado', 'en progreso', 'resuelto', 'cerrado']);
            $table->enum('priority', ['baja', 'media', 'alta', 'urgente']);
            // A que soporte pertenece
            $table->foreignId('support_unit_id')->constrained('support_units')->cascadeOnDelete();
            // A que categoria pertenece
            $table->foreignId('category_id')->constrained('categories')->cascadeOnDelete();
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
