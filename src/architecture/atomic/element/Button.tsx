import React from 'react'
import Image from 'next/image'
import { ButtonProps } from '@/types/component.types'

const Button = (props:ButtonProps) => {
  const {title,disabled,leftIcon,rightIcon,textColor,bgColor,handleClick} = props;
  return (
    <button
        type={'button'}
        disabled={disabled}
        className={`flexCenter gap-3 px-4 py-3 
        ${textColor ? textColor : 'text-white'} 
        ${disabled ? 'bg-black/50' : bgColor ? bgColor : 'bg-primary-purple'} rounded-xl text-sm font-medium max-md:w-full`}
        onClick={handleClick}
    >
        {leftIcon && <Image src={leftIcon} width={14} height={14} alt="left icon" />}
        {title}
        {rightIcon && <Image src={rightIcon} width={14} height={14} alt="right icon" />}
    </button>
  )
}

export {Button}