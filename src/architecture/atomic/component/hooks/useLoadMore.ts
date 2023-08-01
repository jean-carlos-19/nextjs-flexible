import { useRouter } from "next/navigation"

const useLoadMore =(hasNextPage:boolean,endCursor:string,hasPreviousPage:boolean,startCursor:string)=>{
    
    const router = useRouter();
    
    const handleNavigation =(direction:string)=>{
        const currentParams = new URLSearchParams(window.location.search)

        if(direction === "next" && hasNextPage){
            currentParams.delete("startcursor")
            currentParams.set("endcursor",endCursor)
        }else if(direction === "first" && hasPreviousPage ){
            currentParams.delete("endcursor")
            currentParams.set("startcursor",startCursor)
        }

        const newSearchParams = currentParams.toString();
        const newPathName = `${window.location.pathname} ? ${newSearchParams}`
        router.push(newPathName);
    }
    return {handleNavigation}
}
export {useLoadMore}