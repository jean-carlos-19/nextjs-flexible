import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "@/constant/data";
import { AuthProvides } from "./AuthProvides";
import { useNavBar } from "./hooks";
import { getCurrentUser } from "@/lib/session";

const NavBar = async () => {
  const session = await getCurrentUser();

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
            <Image
              src={session.user.image!}
              width={40}
              height={40}
              className="rounded-full"
              alt={session.user.name!}
            />
            <Link href={"/create-project"}>Share Work</Link>
          </>
        ) : (
          <AuthProvides />
        )}
      </div>
    </nav>
  );
};

export { NavBar };
