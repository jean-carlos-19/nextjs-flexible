"use client";
import { ProfilePage } from '@/atomic/component'
import { getUserProjects } from '@/lib/actions'
import { UserProfile } from '@/types/common.types'
import React, { useCallback, useEffect, useState } from 'react'

type Props = {
  params:{
    id:string
  }
}

function UserProfile(props:Props) {

  const {params} = props;
  const [user,setUser] = useState<UserProfile>();

  useEffect(()=>{

  },[])
  const fetchUserProject = useCallback(async ()=>{
    const rs = await getUserProjects(params.id) as {user:UserProfile}
    setUser(rs.user)
    
  },[])
  if(!user) return <p className="no-result-text"> Failed to fetch user info </p>

  return <ProfilePage user ={user} />
}

export default UserProfile
