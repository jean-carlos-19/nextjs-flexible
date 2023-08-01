"use client";
import { deleteProject, fetchToken } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react"

const useProjectActions =()=>{
    const router = useRouter();
    const [isDeleting,setDeleting] = useState<boolean>(false);

    const handleDeleteProject =useCallback(async (projectId:string)=>{
        setDeleting(true);
        try {
            const {token} = await fetchToken();
            const rs = await deleteProject(projectId,token);
            router.push("/");
        } catch (error) {
            console.log(error)
        }
        setDeleting(false);
    },[])
    return {isDeleting,handleDeleteProject}
}
export {useProjectActions}