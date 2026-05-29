import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { QueryProvider } from "@/components/providers/query-provider";
import { StoreProvider } from "@/components/providers/store-provider";
import { ThemeSyncProvider } from "@/components/providers/theme-sync-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LionCode | AI & Software Solutions",
  description: "Enterprise-grade software systems and state-of-the-art agentic AI solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <StoreProvider>
          <ThemeSyncProvider>
            <QueryProvider>{children}</QueryProvider>
          </ThemeSyncProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
