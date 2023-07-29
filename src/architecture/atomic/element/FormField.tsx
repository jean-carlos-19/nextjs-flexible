import React from 'react'
import { FormFieldProps } from '@/types/component.types'

const FormField = (props: FormFieldProps) => {

    const { title, value, type, placeholder, isTextArea, handleChange, handleBlur } = props;

    return (
        <div className='flexStart flex-col w-full gap-4'>
            <label htmlFor="" className='w-full text-gray-100'>
                {title}
            </label>
            {
                isTextArea ? (
                    <textarea
                        className='form_field-input'
                        value={value}
                        placeholder={placeholder}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                    />
                ) : (
                    <input
                        className='form_field-input'
                        type={type || "text"}
                        value={value}
                        placeholder={placeholder}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                    />
                )
            }

        </div>
    )
}

export { FormField }
