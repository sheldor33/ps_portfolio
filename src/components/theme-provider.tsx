"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeFavicon } from "@/components/theme-favicon";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem>
      <ThemeFavicon />
      {children}
    </NextThemesProvider>
  );
}
