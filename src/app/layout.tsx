import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Providers from "@/providers/Providers";
import { Toaster } from "@/components/ui/sonner";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sudoken",
  description: "Master Your Sodoku Skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <title>Sudoken</title>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
        <Toaster richColors />
      </body>
    </html>
  );
}
