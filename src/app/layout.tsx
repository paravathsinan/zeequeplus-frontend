import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZeeQue Plus – Online Qur’an Course for Classes 1–10 with Tajweed",
  description: "A trusted online platform designed to make recitation, Tajweed, and understanding the Quran easier for everyone.",
  icons: {
    icon: "/images/logo/zeequeplus-logo.png",
    shortcut: "/images/logo/zeequeplus-logo.png",
    apple: "/images/logo/zeequeplus-logo.png",
  },
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
