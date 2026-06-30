import { useState, useEffect } from "react";

const STORAGE_KEY = "selectedLanguage";

export function useLanguage() {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem(STORAGE_KEY);

    if (savedLanguage) {
      return savedLanguage;
    }

    const browserLanguage = navigator.language.toLowerCase();

    return browserLanguage.startsWith("ru") ? "RU" : "EN";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  return [language, setLanguage];
}
