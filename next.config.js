/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_GRAFBASE_API_URL:process.env.NEXT_PUBLIC_GRAFBASE_API_URL,
        NEXT_PUBLIC_GRABASE_API_KEY:process.env.NEXT_PUBLIC_GRABASE_API_KEY,
        GOOGLE_CLIENT_ID:process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET:process.env.GOOGLE_CLIENT_SECRET,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        NEXTAUTH_URL:process.env.NEXTAUTH_URL
    },
    images:{
        domains:["lh3.googleusercontent.com"]
    }
}

module.exports = nextConfig