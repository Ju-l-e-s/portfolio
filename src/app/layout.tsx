import type { Metadata } from "next";
import "@/styles/globals.css";
import { Background } from "@/components/Background";
import { Header } from "@/components/Header";
import { ReducedMotionWrapper } from "@/components/ReducedMotionWrapper";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ConsoleEgg } from "@/components/ConsoleEgg";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jules Laconfourque – Développeur",
  description: "Portfolio de Jules Laconfourque, développeur junior orienté DevOps.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${jetBrainsMono.variable} ${spaceGrotesk.variable} scroll-smooth snap-y snap-mandatory`}
    >
      <body className="font-sans bg-base text-text overflow-x-hidden">
        <ReducedMotionWrapper>
          <Background />
          <Header />
          <CustomCursor />
          <ConsoleEgg />
          {children}
          <ScrollToTop />
        </ReducedMotionWrapper>
      </body>
    </html>
  );
}
