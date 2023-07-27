import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import {NavLinks} from '@/constant/data'
import {AuthProvides} from '@/atomic/component'

const NavBar = () => {
  const session = null;
  return (
    <nav
      className='flexBetween navbar'
    >
        <div className="flex-1 flexStart space-x-7">
          <Link
            href={"/"}
          >
            <Image 
              src={"/logo.svg"}
              width={115}
              height={43}
              alt='Flexibble'
            />
          </Link>
          <ul className="xl:flex hidden text-smal gap-7">
            {
              NavLinks.map((link)=>(
                <Link
                  href={link.href}
                  key={link.key}
                >
                  {link.text}
                </Link>
              ))
            }
          </ul>
        </div>
        <div className="flexCenter gap-4">
          {
            session ? (
              <>
                UserPhoto
                <Link
                  href={"/create-project"}
                >
                </Link>
              </>
            ):(
              <AuthProvides />
            )
          }
        </div>
    </nav>
  )
}

export {NavBar}