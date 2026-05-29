import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import { QueryProvider } from "@/components/providers/query-provider";
import { StoreProvider } from "@/components/providers/store-provider";
import { ThemeSyncProvider } from "@/components/providers/theme-sync-provider";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LionCode | IT Services & Consulting",
  description: "Enterprise-grade software engineering, IT systems consulting, and state-of-the-art AI solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${geistMono.variable} h-full antialiased`}
    >
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
