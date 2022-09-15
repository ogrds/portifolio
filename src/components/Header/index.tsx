import { useContext } from "react";
import { LocationContext } from "../../contexts/LocationContext";
import { useWindowSize } from "../../hooks/useWindowSize";
import { ButtonLocation } from "../ButtonLocation";

export const Header: React.FC = () => {
  const { width } = useWindowSize();
  const { db, locale, setLocale } = useContext(LocationContext);

  return (
    <>
      <header className="px-6 py-4 flex items-center justify-between max-w-6xl my-0 mx-auto">
        <span className="text-white font-bold text-xl">💻 GR</span>
        <div className="p-4">
          {!!width && width > 700 && (
            <>
              {db.header.items.map((item) => (
                <a
                  key={item.link}
                  className="font-medium text-white m-4 p-2 hover:text-primary"
                  href={item.link}
                >
                  {item.title}
                </a>
              ))}
            </>
          )}
          <a
            href={db.header.portfolio.link}
            target="_blank"
            rel="noreferrer"
            className="rounded-[6px] border-2 border-primary hover:bg-primary hover:text-black transition-colors hover:no-underline m-4 p-2"
          >
            {db.header.portfolio.title}
          </a>
        </div>
        <div className="flex gap-2">
          <ButtonLocation
            imageUrl="https://hatscripts.github.io/circle-flags/flags/br.svg"
            isSelected={locale === "pt-BR"}
            onClick={() => setLocale("pt-BR")}
          />
          <ButtonLocation
            imageUrl="https://hatscripts.github.io/circle-flags/flags/us.svg"
            isSelected={locale === "en-US"}
            onClick={() => setLocale("en-US")}
          />
        </div>
      </header>
    </>
  );
};
