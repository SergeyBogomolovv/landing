import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/widgets/header";
import clsx from "clsx";
import Footer from "@/widgets/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yandex landing",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "main-layout container")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
