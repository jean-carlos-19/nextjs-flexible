"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { RelatedProjectsProps } from '@/types/component.types'
import {useRealatedProjetcs} from './hooks'
import { ProjectInterface } from '@/types/common.types';
const RelatedProjects = (props:RelatedProjectsProps) => {
  
  const {userId,projectId} = props;
  const {project, lastProjects} = useRealatedProjetcs(userId,projectId)
  if(lastProjects?.length ===0 ) return null;

  return (
    <section className='flex flex-col mt-32 w-full'>

        <div className="flexBetween">
            <p className="text-base font-bold">
                More by {project?.user?.id}
            </p>
            <Link
                href={`/profile/${project?.user?.id}`}
                className={"text-primary-purple text-base"}
            >
                Vieww All
            </Link>
        </div>

        <div className="related_projects-grid">
            {
                lastProjects?.map(({node}:{node:ProjectInterface})=>(
                    <div className="flexCenter">
                        <Link
                            href={`/project/${node.id}`}
                            className='flexCenter group relative w-full h-full'
                        >
                        <Image 
                            src={node?.image}
                            width={414}
                            height={314}
                            className='w-full  h-full object-cover rounded-2xl'
                            alt='project image'
                        /> 
                        </Link>
                        <div className="hidden group-hover:flex related_project-card_title">
                            <p className="w-full">
                                {node?.title}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
      
    </section>
  )
}

export {RelatedProjects}