"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ProjectCardProps } from '@/types/component.types'
import { useProjectCard } from './hooks';

const ProjectCard = (props:ProjectCardProps) => {
  
    const {avatarUrl,id,image,name,title, userId} = props;
    const {randomLikes,randomViews} = useProjectCard();

  return (
    <div className='flexCenter flex-col rounded 2xl drop-shadow-car'>
    <Link
        href={`/project/${id}`}
        className='flexCenter group relative w-full h-full'
    >
        <Image 
            src={image}
            width={414}
            height={314}
            className='w-full h-full object-cover rounded 2xl'
            alt='Project Image'
        />
    </Link>
    <div className="hidden group-hover:flex-profile_card-title">
        <p className="w-full">{title}</p>
    </div>
    <div className="flexBetween w-full px-2 mt-3 font-semibold text-sm">
        <Link
            href={`profile/${userId}`}
        >
            <div className="flexCenter gap-2">
                <Image 
                    src={avatarUrl}
                    width={24}
                    height={24}
                    className='rounded-full'
                    alt='profile image'
                />
                <p>{name}</p>
            </div>
        </Link>

        <div className="flexCenter gap-3">
            <div className="flexCenter gap-2">
                <Image 
                    src={"/heart.svg"}
                    width={13}
                    height={12}
                    alt='heart'
                />
                <p className="text-sm">{randomLikes}</p>
            </div>
            <div className="flexCenter gap-2">
                <Image 
                    src={"/eye.svg"}
                    width={13}
                    height={12}
                    alt='eye'
                />
                <p className="text-sm">{randomViews}</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export {ProjectCard}