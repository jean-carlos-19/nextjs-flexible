import { getServerSession } from 'next-auth/next'
import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { JWT } from 'next-auth/jwt'
import jsonwebtoken from 'jsonwebtoken'

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    /* jwt:{
        encode:({secret,token})=>{},
        decode:async ({secret,token})=>{}
    } */
    theme: {
        colorScheme: "light",
        logo: "/logo.png"
    },
    callbacks: {
        async signIn({ user }) {
          try {
            
          } catch (error) {
            console.log(error);
          }
          return true;
        },
        async session({ session }) {
            return session
        },
    }
}