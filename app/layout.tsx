import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mookies Exercise App",
  description: "Quick Utility to log exercise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>Hello Justin</header>
        <main>{children}</main>
      </body>
    </html>
  );
}
