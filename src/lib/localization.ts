export type SupportedLanguage = "es" | "en" | "zh";

export const normalizeLanguage = (
  language?: string | null,
): SupportedLanguage => {
  if (!language) return "es";

  if (language.startsWith("en")) return "en";
  if (language.startsWith("zh")) return "zh";

  return "es";
};

export const getDayjsLocale = (language?: string | null) => {
  const normalizedLanguage = normalizeLanguage(language);

  if (normalizedLanguage === "zh") {
    return "zh-cn";
  }

  return normalizedLanguage;
};

export const getIntlLocale = (language?: string | null) => {
  const normalizedLanguage = normalizeLanguage(language);

  if (normalizedLanguage === "en") return "en-US";
  if (normalizedLanguage === "zh") return "zh-CN";

  return "es-ES";
};
