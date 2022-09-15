import { createContext, useEffect, useState } from "react";
import { DataBaseLocaleObject } from "../interfaces/db";

type Locale = "en-US" | "pt-BR";

interface LocaleContext {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  db: DataBaseLocaleObject;
}

export const LocationContext = createContext({} as LocaleContext);

export const LocationProvider: React.FC = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(
    sessionStorage.getItem("locale") !== "pt-BR" ? "en-US" : "pt-BR"
  );
  const [db, setDb] = useState<DataBaseLocaleObject>(
    require(`../locales/${
      sessionStorage.getItem("locale") !== "pt-BR" ? "en-US" : "pt-BR"
    }/db.json`)
  );

  useEffect(() => {
    if (locale) {
      const file: DataBaseLocaleObject = require(`../locales/${locale}/db.json`);

      setDb(file);
    }
  }, [locale]);

  function setLocale(locale: Locale) {
    sessionStorage.setItem("locale", locale);
    setLocaleState(locale);
  }

  return (
    <LocationContext.Provider
      value={{
        locale,
        setLocale,
        db,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
