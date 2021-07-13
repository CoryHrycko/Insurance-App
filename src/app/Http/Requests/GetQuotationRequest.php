<?php

namespace App\Http\Requests;

use Currency\Currency;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class GetQuotationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     * Handled by JWT
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'age' => ['required',
                function ($attribute, $value, $fail) {
                    $valueArray = collect(explode(',', $value))->sort()->values();
                    $valueArray->each(function ($item) use ($fail) {
                        if ($item <= 17) {
                            $fail('All ages need to be 18 or older.');
                        }
                    });
                }
            ],
            'currency_id' => ['required',
                function ($attribute, $value, $fail) {
                    if (! is_string(Currency::create($value)->getCode())) {
                        $fail('The '.$attribute.' needs to be ISO 4217 complient.');
                    }
                }
            ],
            'start_date' => 'required',
            'end_date' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'age.required' => 'A age is required',
            'currency_id.required' => 'A currency_id is required',
            'start_date.required' => 'A start_date is required',
            'end_date.required' => 'A end_date is required',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json($validator->errors(), 422));
    }
}
