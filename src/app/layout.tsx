import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import { cn } from "./_libs/utils";
import { AuthProvider } from "./_providers/auth";

const roboto = Roboto_Slab({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-background text-white", roboto.className)}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
