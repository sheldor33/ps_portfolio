import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ScrollProgress } from "@/components/scroll-progress";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sheldor33.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pranshu Sharma — Software Engineer",
    template: "%s | Pranshu Sharma",
  },
  description:
    "Software Engineer building AI-enabled automation, full-stack applications, and LLM-powered workflows. Python · TypeScript · Node.js · React · LangChain.",
  keywords: [
    "Software Engineer",
    "Python",
    "TypeScript",
    "LangChain",
    "Next.js",
    "AI automation",
    "Pranshu Sharma",
  ],
  authors: [{ name: "Pranshu Sharma" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Pranshu Sharma",
    title: "Pranshu Sharma — Software Engineer",
    description:
      "AI-enabled automation · Full-stack · End-to-end ownership. Open to Backend, AI, and Full-Stack roles.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranshu Sharma — Software Engineer",
    description:
      "AI-enabled automation · Full-stack · End-to-end ownership.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <ScrollProgress />
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
