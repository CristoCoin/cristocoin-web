import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "CristoCoin $CRISTO | Arcade Shrine on Polygon",
  description:
    "Enter the CristoCoin arcade shrine: a meme-powered Web3 experience on Polygon with wallet status, visitor mode and community roadmap.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "CristoCoin $CRISTO | Arcade Shrine on Polygon",
    description:
      "Enter the CristoCoin arcade shrine: a meme-powered Web3 experience built on Polygon.",
    url: "https://cristocoin-web.vercel.app",
    siteName: "CristoCoin",
    images: [
      {
        url: "/cristocoin-og.png",
        width: 1200,
        height: 630,
        alt: "CristoCoin $CRISTO Arcade Shrine on Polygon",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CristoCoin $CRISTO | Arcade Shrine on Polygon",
    description:
      "Enter the CristoCoin arcade shrine: a meme-powered Web3 experience built on Polygon.",
    images: ["/cristocoin-og.png"],
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}