"use client";
import React from 'react'
import Image from 'next/image'
import {Menu} from '@headlessui/react'
import { CustomMenuProps } from '@/types/component.types'

const CustomMenu = (props:CustomMenuProps) => {
  const {title,value,filters,handleClick,handleBlur} = props;
  return (
   <div className="flexStart flex-col w-full gap-7 relative">
    <label htmlFor={title} className='w-full text-gray-100'>
        {title}
    </label>
    <Menu as="div" className={"self-start relative"}>
        <div>
            <Menu.Button className={"flexCenter custom_menu-btn"}>
                {value || "Select a category"}
                <Image 
                    src={"/arrow-down.svg"}
                    alt={"Arrow down"}
                    width={10}
                    height={5}
                />
            </Menu.Button>
        </div>
        <Menu.Items className={"flexStart custom_menu-items"}>
            {filters.map((tag)=>(
                <Menu.Item key={tag}>
                    <button
                        type='button'
                        value={tag}
                        className={"custom_menu-item"}
                        onClick={handleClick}
                    >
                        {tag}
                    </button>
                </Menu.Item>
            ))}
        </Menu.Items>
    </Menu>
   </div>
  )
}

export {CustomMenu}
