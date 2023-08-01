"use client";
import { fecthAllProjects } from "@/lib/actions"
import { ProjectInterface } from "@/types/common.types"
import { useCallback, useEffect, useState } from "react"

type ProjtectSearch ={
    projectSearch :{
        edges:{
            node: ProjectInterface
        }[],
        pageInfo: {
            hasPreviousPage:boolean,
            hasNextPage:boolean,
            startCursor:string,
            endCursos:string
        }
    }
}

const useProject =(category?:string, endcursor?:string)=>{

    const [data,setData]= useState<ProjtectSearch>();
    useEffect(()=>{
        getAllProjects(category,endcursor)
    },[])

    const getAllProjects = useCallback( async (category?:string, endcursor?:string )=>{
        const response = await fecthAllProjects(category,endcursor) as ProjtectSearch;
        setData(response);
    },[])
    return {data};
}
export {useProject}