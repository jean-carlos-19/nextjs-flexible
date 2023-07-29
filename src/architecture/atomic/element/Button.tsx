import { ButtonProps } from '@/types/component.types'
import React from 'react'

const Button = (props:ButtonProps) => {
  const {title,disabled,handleClick} = props;
  return (
    <button
        className={`flexCenter gap-3 px-4 py-3 rounded-xl text-sm font-medium max-md:w-full  text-white ${disabled ? "bg-light-white-100 text-black/50":"bg-primary-purple text-white"}`}
        type='button'
        disabled={disabled}
    >   
        {title}
    </button>
  )
}

export {Button}
