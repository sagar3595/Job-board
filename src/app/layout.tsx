import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "./components/Header";
import '@radix-ui/themes/styles.css';


const inter = Roboto({ weight: '400',subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job Board App",
  description: "Find your dream Job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <footer className="container py-8 text-gray-500">
          Job Board &copy; 2024 - All rights reserved
        </footer>
      </body>
    </html>
  );
}
