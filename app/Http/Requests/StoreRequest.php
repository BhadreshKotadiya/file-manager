<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'file' => 'required',
            'folderID' => 'required|exists:folders,id',
        ];
    }

    public function messages(): array
    {
        return [
            'file.required' => 'The file field is required.',
            'folderID.required' => 'The folder ID field is required.',
            'folderID.exists' => 'Please select folder before uploading the file.',
        ];
    }
}
