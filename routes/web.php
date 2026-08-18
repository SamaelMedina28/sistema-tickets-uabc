<?php

use App\Http\Controllers\SupportUnitController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

    // Soportes
    Route::resource('soportes', SupportUnitController::class)->names('soportes');

    // Usuarios
    Route::resource('usuarios', UserController::class)->names('usuarios')->except(['create']);
});

require __DIR__.'/settings.php';
