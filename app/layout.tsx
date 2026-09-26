import type { Metadata } from "next";
import { Big_Shoulders, Inter } from "next/font/google";
import "./globals.css";

const display = Big_Shoulders({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "800", "900"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "CAROTIC — Built Around the Culture",
  description:
    "Houston custom car builds, body & paint, and late-night workshop culture. CAROTIC — 1609 Miller St.",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">): React.JSX.Element {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
