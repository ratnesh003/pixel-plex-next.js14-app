import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from 'sonner'
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixel Plex",
  description: "The Streaming platform for gamers and stream enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{baseTheme: dark}}>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider 
            attribute="class"
            forcedTheme="dark"
            storageKey="pixelplex-theme"
          >
            <Toaster theme="light" position="bottom-center" />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
