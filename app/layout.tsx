import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "./Component/navbar";
import AboutSection from "./Component/AboutSection";

export const metadata: Metadata = {
  title: "Project Next.js",
  description: "Landing page menggunakan Next.js dan Bootstrap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}