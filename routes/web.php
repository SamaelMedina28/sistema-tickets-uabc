<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SupportUnitController;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

    // Soportes
    Route::resource('soportes', SupportUnitController::class)->names('soportes');
});

require __DIR__.'/settings.php';
