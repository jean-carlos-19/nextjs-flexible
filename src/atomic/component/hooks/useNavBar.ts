"use client";
import { useCallback, useEffect, useState } from "react";
import { SessionInterface } from "@/types/common.types";
import { getCurrentUser } from "@/lib/session";

const useNavBar = () => {
  const [session, setSession] = useState<any>(null);
  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = useCallback(async () => {
    const user = await getCurrentUser();
    setSession(user);
  }, []);
  return { session };
};
export { useNavBar };
