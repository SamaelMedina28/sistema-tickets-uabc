<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateUserRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $userId = $this->route('usuario');
        return [
            'enrollment_number' => [
                'required',
                'string',
                'max:20',
                Rule::unique('users', 'enrollment_number')->ignore($userId),
            ],
            'name' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique('users', 'email')->ignore($userId),
                'ends_with:@uabc.edu.mx',
            ],
            'rol' => ['required', 'in:lider,miembro'],
            'support_unit_id' => ['nullable', 'exists:support_units,id'],
        ];
    }

    public function messages(): array
    {
        return [
            'enrollment_number.required' => 'La matrícula es requerida',
            'enrollment_number.unique' => 'La matrícula ya está registrada',
            'name.required' => 'El nombre es requerido',
            'email.required' => 'El correo electrónico es requerido',
            'email.email' => 'El correo electrónico debe ser válido',
            'email.unique' => 'El correo electrónico ya está registrado',
            'email.ends_with' => 'El correo electrónico debe terminar en @uabc.edu.mx',
            'rol.required' => 'El rol es requerido',
            'rol.in' => 'El rol debe ser lider o miembro',
            'support_unit_id.exists' => 'La unidad de soporte no existe',
        ];
    }
}
