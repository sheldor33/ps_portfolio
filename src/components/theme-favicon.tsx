"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

const LIGHT = "/favicon-light.svg";
const DARK = "/favicon-dark.svg";

export function ThemeFavicon() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const href = resolvedTheme === "dark" ? DARK : LIGHT;
    let link = document.querySelector<HTMLLinkElement>(
      "link[rel='icon'][data-theme-favicon]",
    );

    if (!link) {
      // Drop Next/static icons so the themed one wins in the tab.
      document
        .querySelectorAll("link[rel='icon']:not([data-theme-favicon])")
        .forEach((el) => el.remove());

      link = document.createElement("link");
      link.rel = "icon";
      link.type = "image/svg+xml";
      link.setAttribute("data-theme-favicon", "true");
      document.head.appendChild(link);
    }

    link.href = `${href}?v=2`;
  }, [resolvedTheme]);

  return null;
}
