import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import enLang from "./locales/en/en.json";
import ruLang from "./locales/ru/ru.json";

const resources = {
  en: {
    translation: enLang
  },
  ru: {
    translation: ruLang
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ru",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
