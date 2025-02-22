import type { Metadata } from "next";
import "./globals.css"; // Ensure your global styles are imported

export const metadata: Metadata = {
  title: "CuraSync",
  description:
    "A modern healthcare platform improving patient-provider interactions.",
  icons: {
    icon: "icons/logo.ico", // Default favicon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
