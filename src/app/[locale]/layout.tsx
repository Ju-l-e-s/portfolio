import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages =
    (await import(`../../../messages/${locale}.json`).catch(() => null))?.default ??
    (await import("../../../messages/fr.json")).default;

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${jetBrainsMono.variable} ${spaceGrotesk.variable} scroll-smooth snap-y snap-mandatory`}
    >
      <body className="font-sans bg-base text-text overflow-x-hidden">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ReducedMotionWrapper>
            <Background />
            <Header />
            <CustomCursor />
            <ConsoleEgg />
            {children}
            <ScrollToTop />
          </ReducedMotionWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
