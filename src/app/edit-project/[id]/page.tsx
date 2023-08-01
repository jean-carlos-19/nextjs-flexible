"use client";
import React from 'react'
import { useEditProject } from '../../hooks'
import {Modal, ProjectForm} from '@/atomic/component'
import { SessionInterface } from '@/types/common.types';

const EditProject = ({params:{id}}:{params:{id:string}}) => {
    const { session,project } = useEditProject(id);
    if(session)
    return (
        <Modal>
            <h3 className="modal-head-text">
                Edit Project
            </h3>
            <ProjectForm 
                type='edit' 
                session={session.data as  SessionInterface} 
                project={project}
            />
        </Modal>
    )
}

export default EditProject
