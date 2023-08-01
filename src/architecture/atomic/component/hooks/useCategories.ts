"use client";
import { usePathname, useRouter } from "next/navigation";

const useCategories =()=>{
    
    const router = useRouter();
    const pathName = usePathname();

    const handleTags =(value:string)=>{
        router.push(`${pathName}?category=${value}`)
    }
    return {handleTags}
}
export {useCategories}