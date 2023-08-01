"use client";
import {getUserProjects} from '@/lib/actions'
import { ProjectInterface, UserProfile } from '@/types/common.types';
import { useCallback, useEffect, useState } from "react"


const useRealatedProjetcs =(userId:string,projectId:string)=>{
    const [project,setProject] = useState<{
        user?: UserProfile | undefined;
    }>();

    const [lastProjects,setLastProjects] = useState<{
        node: ProjectInterface;
    }[] | undefined>();
    
    useEffect(()=>{
        getLastProject(userId);
    },[userId]);

    const getLastProject = useCallback(async (userId:string)=>{
        const rs = await getUserProjects(userId) as {user?: UserProfile};
        const filteredProjects = rs?.user?.projects?.edges?.filter(({node}:{node:ProjectInterface})=> node?.id !== projectId)
        setLastProjects(filteredProjects)
    },[userId]);

    return {project, lastProjects};
}
export {useRealatedProjetcs}