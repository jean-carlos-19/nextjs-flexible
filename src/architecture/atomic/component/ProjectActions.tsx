"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ProjectActionsProps } from '@/types/component.types'
import { useProjectActions } from './hooks'

const ProjectActions = (props:ProjectActionsProps) => {
  const {projectId} = props;
  const {isDeleting,handleDeleteProject} = useProjectActions();
  return (
    <>
        <Link
            href={`/edit-project/${projectId}`}
            className="flexCenter edit-action_btn"
        >
            <Image 
                src={"/pencile.svg"}
                width={15}
                height={15}
                alt='edit'
            />
        </Link>
        <button
            onClick={()=>handleDeleteProject(projectId)}
            type='button'
            className={`flexCenter delete-action_btn ${isDeleting ? ' bg-gray':'bg-primary-purple' }`}
        >
            <Image 
                src={"/trash.svg"}
                width={15}
                height={15}
                alt='delete'
            />
        </button>
    </>
  )
}

export {ProjectActions}
