import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Providers from "@/providers/Providers";
import { Toaster } from "@/components/ui/sonner";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sudoken",
  description: "A modern Sudoku app to challenge your puzzle-solving skills.",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["sudoku", "sudoken", "shivam chaudhary", "sudoku solver", "sudoku game",
  "game"
  ],
  authors: [
    { name: "Shivam Chaudhary" },
    {
      name: "Shivam Chaudhary",
      url: "https://www.blog.shivamchaudhary.com",
    },
  ],
    icons: [
      { rel: "apple-touch-icon", url: "icons/apple-touch-icon.png" },
      { rel: "icon", url: "icons/apple-touch-icon.png" },
    ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <title>Sudoken</title>
      <link rel="manifest" href="/manifest.json" />
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
