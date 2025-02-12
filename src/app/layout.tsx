import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MarsEcho Social Media App",
  description: "Chat with your friends from Mars with MarsEcho!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} overflow-x-hidden`}>
          <div className="px-4 bg-slate-950 text-white md:px-8 lg:px-16 xl:px-32 2xl:px-48">
            <Navbar />
          </div>
          <div className=" bg-gray-900 text-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}