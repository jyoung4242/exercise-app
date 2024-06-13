import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mookies Exercise App",
  description: "Quick Utility to log exercise",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["Exercise", "tracking", "workout"],
  authors: [
    { name: "Justin Young" },
    {
      name: "Justin Young",
      url: "https://github.com/jyoung4242",
    },
  ],
  themeColor: "#ffffff",
  colorScheme: "light",
  viewport: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: {
    apple: `/public/apple-icon-180.png`,
  },
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
