<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SupportUnitController;
use App\Http\Controllers\UserController;
use Laravel\Fortify\Http\Controllers\RegisteredUserController;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

    // Soportes
    Route::resource('soportes', SupportUnitController::class)->names('soportes');

    // Usuarios
    Route::resource('usuarios', UserController::class)->names('usuarios');
});

require __DIR__.'/settings.php';
