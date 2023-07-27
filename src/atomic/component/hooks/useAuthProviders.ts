"use client";
import { Providers } from "@/types/component.types";
import { getProviders } from "next-auth/react";
import { useState, useCallback, useEffect } from "react";


const useAuthProviders = () => {

  const [providers, setProviders] = useState<Providers | null>(null);

  useEffect(()=>{
    fecthProviders();
  },[])

  const fecthProviders = useCallback(async()=>{
      const rs = await getProviders();
      setProviders(rs);
  },[])
  return { providers, setProviders }
}
export { useAuthProviders }