"use client";
import { useCallback, useEffect, useState } from "react";
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";
import {getProjectDetails} from '@/lib/actions'
import { ProjectInterface } from "@/types/common.types";

const useEditProject = (id:string)=>{
    const session = useSession();
    const [project,setProject] = useState< ProjectInterface | undefined>();
    
    useEffect(()=>{
        if(!session.data?.user){
            redirect("/");
            return;
        }
        fetchProjectDetail(id);
    },[session,id])

    const fetchProjectDetail = useCallback(async (id:string)=>{
        const rs = await getProjectDetails(id) as { project?:ProjectInterface};
        const {project} = rs;
        setProject(project)
    },[])
    return {project, session:session}
}
export {useEditProject}