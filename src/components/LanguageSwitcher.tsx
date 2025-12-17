"use client";

import {useLocale} from "next-intl";
import {createNavigation} from "next-intl/navigation";

const {usePathname, useRouter} = createNavigation({
  locales: ["fr", "en"],
});

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const next = locale === "fr" ? "en" : "fr";
    const normalizedPath = pathname.replace(/^\/(fr|en)(?=\/|$)/, "") || "/";
    router.replace(normalizedPath, {locale: next});
  };

  return (
    <button
      onClick={toggleLocale}
      className="text-xs font-semibold uppercase tracking-[0.18em] text-muted transition hover:text-text"
      aria-label="Changer de langue"
    >
      <span className={locale === "fr" ? "text-text" : "text-muted"}>FR</span>
      <span className="mx-1 text-muted">|</span>
      <span className={locale === "en" ? "text-text" : "text-muted"}>EN</span>
    </button>
  );
}
