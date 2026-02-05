import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FavoritesProvider } from "@/components/FavoritesContext";
import { FloatingFavorites } from "@/components/FloatingFavorites";

export const metadata: Metadata = {
  title: "Prisguiden.dk - Sammenlign priser og find de bedste tilbud",
  description: "Danmarks nye prissammenligningsside. Find de laveste priser på elektronik, tøj, bolig og meget mere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body
        className={`antialiased min-h-screen flex flex-col font-sans`}
      >
        <FavoritesProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingFavorites />
        </FavoritesProvider>
      </body>
    </html>
  );
}
