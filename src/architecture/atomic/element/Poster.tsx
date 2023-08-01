import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { PosterProps } from '@/types/component.types'

const Poster = (props: PosterProps) => {
    const { id, value, type, handleBlur, handleChange,urlImage, setUrlImageLocal } = props;
    useEffect(()=>{
        if(!value ) return ;
        const reader = new FileReader();
        reader.readAsDataURL(value);
        reader.onload = () => {
            const result = reader.result as string;
            setUrlImageLocal(result)
        };
    },[value])
    return (
        <div className="flexStart form_image-container">
            <label htmlFor="poster" className='flexCenter form_image-label'>
                {!value && "Choose a poster fror you project"}
            </label>
            <input
                id={id}
                type='file'
                accept='image/*'
                required={type === "create" ? true : false}
                className='form_image-input'
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {
                value && (
                    <Image 
                        className="sm:p-10 object-contain z-20" 
                        src={urlImage}
                        alt='Project poster'
                        fill
                    />
                )
            }
        </div>
    )
}

export { Poster }