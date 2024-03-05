import type { Metadata } from "next";
import { Providers } from "./providers";
import { Roboto_Condensed } from "next/font/google";

import "./globals.css";

const roboto = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marvel Characters",
  description: "Marvel Characters for Zara Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
