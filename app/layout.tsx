import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";
import CustomCursor from "./components/CustomCursor";
import SmoothScroll from "./components/SmoothScroll";
import FluidBackground from "./components/FluidBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "TAC Group - Professional Services",
  description: "Leading indigenous Professional and Business Consulting firm in Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, "font-sans bg-tac-dark text-white min-h-screen selection:bg-tac-brand selection:text-white overflow-x-hidden")}>
        <SmoothScroll>
          <CustomCursor />
          <FluidBackground />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
