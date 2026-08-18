<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'enrollment_number' => ['required', 'string', 'max:20', 'unique:users,enrollment_number'],
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email', 'ends_with:@uabc.edu.mx'],
            'password' => ['required', 'string', 'min:8'],
            'rol' => ['required', 'in:lider,miembro'],
            'support_unit_id' => ['required', 'exists:support_units,id'],
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
            'password.required' => 'La contraseña es requerida',
            'password.min' => 'La contraseña debe tener al menos 8 caracteres',
            'rol.required' => 'El rol es requerido',
            'rol.in' => 'El rol debe ser lider o miembro',
            'support_unit_id.required' => 'La unidad de soporte es requerida',
            'support_unit_id.exists' => 'La unidad de soporte no existe',
        ];
    }
}
