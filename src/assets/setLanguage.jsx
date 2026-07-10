import { useState, useEffect } from "react";

const STORAGE_KEY = "selectedLanguage";

const RUSSIAN_LANGUAGES = new Set(["ru"]);

const RUSSIAN_UNDERSTANDING_REGIONS = new Set(["KG", "KZ", "BY"]);

function getDefaultLanguage() {
  const savedLanguage = localStorage.getItem(STORAGE_KEY);

  if (savedLanguage) {
    return savedLanguage;
  }

  const locale = navigator.language;

  const [lang, region] = locale.split("-");

  if (
    RUSSIAN_LANGUAGES.has(lang.toLowerCase()) ||
    (region && RUSSIAN_UNDERSTANDING_REGIONS.has(region.toUpperCase()))
  ) {
    return "RU";
  }

  return "EN";
}

export function useLanguage() {
  const [language, setLanguage] = useState(getDefaultLanguage);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  return [language, setLanguage];
}
