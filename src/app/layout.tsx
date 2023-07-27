import "./globals.css";
import type { Metadata } from "next";
import { Footer, NavBar } from "@/atomic/component";
import { NextAuthProvider } from "./providers";

export const metadata: Metadata = {
  title: "Flexibble",
  description: "Discover the best cars in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
