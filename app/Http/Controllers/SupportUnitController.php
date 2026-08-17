<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSupportUnitRequest;
use App\Http\Requests\UpdateSupportUnitRequest;
use App\Models\SupportUnit;
use Inertia\Inertia;

class SupportUnitController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $soportes = SupportUnit::with('tickets')->get();
        return Inertia::render('support/index', [
            'soportes' => $soportes
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSupportUnitRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(SupportUnit $supportUnit)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SupportUnit $supportUnit)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSupportUnitRequest $request, SupportUnit $supportUnit)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SupportUnit $supportUnit)
    {
        //
    }
}
