"use client";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { NavLinks } from "@/constant/data";
import { SessionInterface } from "@/types/common.types";
import { AuthProvides } from "./AuthProvides";
import { ProfileMenu } from "./ProfileMenu";
import { Loading } from "./Loading";

const NavBar = () => {
  const {data:session,status} = useSession();
  if(status === "loading") return <Loading menssage="Estamos obteniendo tus datos" />

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart space-x-7">
        <Link href={"/"}>
          <Image src={"/logo.svg"} width={115} height={43} alt="Flexibble" />
        </Link>
        <ul className="xl:flex hidden text-smal gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session?.user ? (
          <>
            <Link href={"/create-project"}>Share Work</Link>
            <ProfileMenu session={session as SessionInterface} />
          </>
        ) : (
          <AuthProvides />
        )}
      </div>
    </nav>
  );
};

export { NavBar };
