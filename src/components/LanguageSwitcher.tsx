"use client";

import {useLocale} from "next-intl";
import {createNavigation} from "next-intl/navigation";
import {clsx} from "clsx";

const {usePathname, useRouter} = createNavigation({
  locales: ["fr", "en"],
});

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const isEnglish = locale === "en";

  const toggleLocale = () => {
    const nextLocale = isEnglish ? "fr" : "en";
    const normalizedPath = pathname.replace(/^\/(fr|en)(?=\/|$)/, "") || "/";
    router.replace(normalizedPath, {locale: nextLocale});
  };

  return (
    <div className="flex items-center gap-2">
      <span className={clsx("text-xs font-semibold uppercase", !isEnglish ? "text-text" : "text-muted")}>FR</span>
      <button
        type="button"
        role="switch"
        aria-checked={isEnglish}
        aria-label={isEnglish ? "Switch language to French" : "Switch language to English"}
        onClick={toggleLocale}
        className={clsx(
          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 transition-colors duration-200 ease-in-out",
          isEnglish ? "bg-accent-a border-transparent" : "bg-surface border-line"
        )}
      >
        <span
          aria-hidden="true"
          className={clsx(
            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
            isEnglish ? "translate-x-5" : "translate-x-0"
          )}
        />
      </button>
      <span className={clsx("text-xs font-semibold uppercase", isEnglish ? "text-text" : "text-muted")}>EN</span>
    </div>
  );
}
