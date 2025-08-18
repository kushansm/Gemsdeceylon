import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gems De Ceylon",
  description: "Gemstone from the source",
  icons: { icon: "/assets/logo2.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
