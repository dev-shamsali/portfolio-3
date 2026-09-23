import type { Metadata, Viewport } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Shams Ali -- Full-Stack Developer & DevOps Engineer",
  description:
    "Shams Ali is a full-stack developer and DevOps engineer building production MERN applications and the cloud infrastructure that keeps them fast, secure, and online.",
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={kanit.variable}>
      <body className="bg-[#0C0C0C] overflow-x-clip">{children}</body>
    </html>
  );
}
