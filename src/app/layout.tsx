import type { Metadata } from "next";
import { Playfair_Display, Instrument_Sans, Fira_Code } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--loaded-font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const instrumentSans = Instrument_Sans({
  variable: "--loaded-font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const firaCode = Fira_Code({
  variable: "--loaded-font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Abdullahi Ismail — Full Stack Developer",
  description:
    "Abdullahi Ismail is a passionate Full Stack Developer specialized in MERN stack — building responsive, scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${instrumentSans.variable} ${firaCode.variable}`}
        style={{
          fontFamily: "var(--font-body)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
