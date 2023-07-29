"use client"
import { Modal, ProjectForm,Loading } from '@/atomic/component'
import { SessionInterface } from '@/types/common.types'
import { useSession } from 'next-auth/react'
import {redirect} from 'next/navigation'


const CreateProject = () => {
    const { data: session, status } = useSession();

    if(status === "loading") return <Loading menssage='Estamos obteniendo tus datos' />
    if(status === "unauthenticated") redirect("/")
    if(!session?.user)  redirect("/")
    
    return (
        <Modal>
            <h3 className="modal-head-text">Create a new project</h3>
            <ProjectForm type='create' session={session as SessionInterface} />
        </Modal>
    )
}
export default CreateProject;