import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gems De Ceylon",
  description: "Gemstone from the source",
  icons: { icon: "/assets/logo2.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Gidole&family=Mozilla+Headline:wght@200..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
