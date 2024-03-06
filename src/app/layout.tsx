import type { Metadata } from "next";
import { Providers } from "./providers";
import { Roboto_Condensed } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

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
        <NextTopLoader color="#EC1D24" showSpinner={false} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
