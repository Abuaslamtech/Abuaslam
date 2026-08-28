import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdullahi Ismail (Abuaslam) — Mobile & Fintech Systems Engineer",
  description:
    "Founder at AtlabX Technologies. Mobile & Full-Stack Systems Engineer specializing in React Native, NestJS, Kotlin, PostgreSQL, and Cloud Infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body bg-bg text-ink min-h-screen">
        {children}
      </body>
    </html>
  );
}


