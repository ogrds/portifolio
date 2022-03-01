import { useWindowSize } from "../../hooks/useWindowSize";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  const { width } = useWindowSize();

  return (
    <>
      <header className={styles.container}>
        <span>💻 GR</span>
        <div>
          {!!width && width > 700 && (
            <>
              <a href="#skils">Skils</a>
              <a href="#projects">Projetos Principais</a>
              <a href="#contact">Contato</a>
            </>
          )}
          <a
            href="/docs/cv_Gabriel_Ribeiro.pdf"
            target="_blank"
            className={styles.bordered}
          >
            Currículo
          </a>
        </div>
      </header>
    </>
  );
};
