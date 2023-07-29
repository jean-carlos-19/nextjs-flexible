import { getServerSession } from "next-auth/next";
import { NextAuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { JWT } from "next-auth/jwt";
import jsonwebtoken from "jsonwebtoken";
import { SessionInterface, UserProfile } from "@/types/common.types";
import { createUser, getUser } from '@/lib/actions'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  jwt: {
    encode: ({ secret, token }) => { 
      const endcodedToken = jsonwebtoken.sign({
        ...token,
        iss:"grafbase",
        exp:Math.floor((Date.now() / 1000) + 60 * 60)
      },secret);
      return endcodedToken;
    },
    decode: async ({ secret, token }) => {
      const decodeToken = jsonwebtoken.verify(token!,secret)
      return decodeToken as JWT;
    }
  },
  theme: {
    colorScheme: "light",
    logo: "/logo.svg",
  },
  callbacks: {

    async session({ session }) {
      try {
        const data = await getUser(session.user?.email as string) as { user?: UserProfile }
        const newSession = {
          ...session,
          user: {
            ...session.user,
            ...data?.user
          }
        }
        return newSession;
      } catch (error:any) {
        console.error("Error retrieving user data: ", error.message);
        return session;
      }
    },

    async signIn({ user }:{user: User}) {
      try {
        const userExists = await getUser(
          user?.email as string
        ) as { user?: UserProfile };

        if (!userExists.user) {
          await createUser(user.name as string, user.email as string, user.image as string);
        }

      } catch (error:any) {
       console.log("Error checking if user exists: ", error.message);
        return false;
      }
      return true;
    },

   
  },
};

export async function getCurrentUser():Promise<SessionInterface> {
  const session = await getServerSession(authOptions);
  return session as SessionInterface;
}
