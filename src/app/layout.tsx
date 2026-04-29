import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "CristoCoin $CRISTO | Arcade Shrine on Polygon",
  description:
    "Enter the CristoCoin arcade shrine: a meme-powered Web3 experience on Polygon with wallet status, visitor mode and community roadmap.",
    
  icons: {
  icon: [
    { url: "/icon.png?v=10", type: "image/png", sizes: "64x64" },
  ],
  shortcut: "/icon.png?v=10",
  apple: "/icon.png?v=10",
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


