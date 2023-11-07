import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/nav";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kickz",
  description: "For sneaker heads.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-r from-blue-500 to-cyan-300`}
      >
        <Navbar />
        <main className="m-auto min-h-screen min-w-[300px] max-w-7xl p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
