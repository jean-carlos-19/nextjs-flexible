"use client";
import { getProjectDetails } from "@/lib/actions";
import { ProjectInterface, SessionInterface } from "@/types/common.types";
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";

const useProject =(id:string)=>{
    const {data}  = useSession();
    const [projectDetail,setProjectDetail] = useState<{projec:ProjectInterface}>();

    useEffect(()=>{
        getProjectDetail(id);
    },[id]);

    const getProjectDetail = useCallback(async (id:string)=>{
        const session = data as SessionInterface;
        const rs = await getProjectDetails(id) as {project:ProjectInterface}
        setProjectDetail({projec:rs.project})
    },[id]);

    const renderLink = () => `/profile/${projectDetail?.projec?.createdBy?.id}`

    return {session:data,projectDetail,renderLink}
}
export {useProject}