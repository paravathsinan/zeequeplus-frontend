import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zikr - Your Online Quran Learning Journey",
  description: "A trusted online platform designed to make recitation, Tajweed, and understanding the Quran easier for everyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.setAttribute('data-theme', theme);
              } catch (e) {
                document.documentElement.setAttribute('data-theme', 'dark');
              }
            })();
          `
        }} />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
