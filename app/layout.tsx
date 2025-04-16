import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anthony Wandera Portfolio",
  description: "Anthony Wandera's portfolio website",
  keywords: [
    "anthony",
    "wandera",
    "portfolio",
    "kenya",
    "web development",
    "website",
    "freelancer",
    "hire",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div id="modal"></div>
        {children}
      </body>
    </html>
  );
}
