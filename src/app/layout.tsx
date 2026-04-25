import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CristoCoin $CRISTO",
  description: "The meme has risen on Polygon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}