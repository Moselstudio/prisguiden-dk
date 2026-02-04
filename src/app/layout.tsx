import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prisguiden.dk - Sammenlign priser og find de bedste tilbud",
  description: "Danmarks førende prissammenligningstjeneste. Sammenlign priser fra hundredvis af butikker og find de bedste tilbud på elektronik, hvidevarer, mode og meget mere.",
  keywords: "prissammenligning, tilbud, prisfald, bedste pris, online shopping, Danmark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
