import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/nav";
import Footer from "./footer";
import SessionProvider from "./SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apex Athletics",
  description: "Shoes for the best athletes in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-r from-blue-400 to-cyan-200`}
      >
        <SessionProvider>
          <Navbar />
          <main className="m-auto min-h-screen min-w-[300px] max-w-7xl p-4">
            {children}
          </main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
