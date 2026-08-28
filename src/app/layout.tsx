import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Angkasa Project",
  description:
    "A creative digital space for projects, experiments, products, and ideas.",
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
