import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";


const outfit = Outfit({
  
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LaunchPad - Saas Showcase Platform",
  description: "LaunchPad — A platform to launch, showcase, and upvote SaaS products.LaunchPad helps founders launch, showcase, and promote their SaaS products with community-driven upvotes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
