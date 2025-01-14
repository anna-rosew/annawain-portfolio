import type { Metadata } from "next";
import "../styles/globals.css";

import ThemeProvider from "@/components/layout/ThemesProvider";
import MainNav from "@/components/layout/MainNav";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Anna Wain's Portfolio",
  description: "Generated by create next app",
};

//add favicons

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <nav className="w-full">
            <MainNav />
          </nav>
          <main className="flex flex-col">
            <div>{children}</div>
          </main>
          <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <Footer />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
