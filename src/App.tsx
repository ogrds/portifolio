import styles from "./App.module.scss";

import db from "./db.json";
import { Knowledges } from "./components/Knowledges";
import { Topic } from "./components/Topic";
import { Divider } from "./components/Divider";
import { getAge } from "./utils";

import {
  RiGithubFill,
  RiLinkedinFill,
  RiMailFill,
  RiPhoneFill,
} from "react-icons/ri";
import { Project } from "./components/Project";

const age = getAge({ year: 1998, month: 3, day: 6 });

document.title = "Portifólio Gabriel Ribeiro";

function App() {
  const conhecimentos = db.knowledges.sort((a, b) => {
    if (a.rating > b.rating) {
      return -1;
    }
    if (a.rating < b.rating) {
      return 1;
    }
    return 0;
  });

  return (
    <div>
      <header className={styles.header}>
        <span>💻 GR</span>
        <div>
          <a href="#skils">Skils</a>
          <a href="#projects">Projetos Principais</a>
          <a href="#contact">Contato</a>
          <a
            href="/docs/cv_Gabriel_Ribeiro.pdf"
            target="_blank"
            className={styles.bordered}
          >
            Currículo
          </a>
        </div>
      </header>
      <main className={styles.main}>
        <h1>Olá, Eu sou Gabriel Ribeiro.</h1>
        <section className={styles.about_me}>
          <div>
            <p>
              Tenho {age} anos, atualmente trabalho como Analista de Sistemas.
              Sou apaixonado por desenvolvimento web e sempre busco me superar a
              cada projeto.
            </p>
            <p>
              Na maior parte dos meus projetos atuais, utilizo React para o
              frontend e node para o backend, mas também já desenvolvi projetos
              utilizando PHP.
            </p>
            <p>
              Tenho familiaridade com bancos de dados Oracle, MySql e Postgres.
              Desenvolvo também fluxos de automação utilizando Jenkins a maior
              parte desses projetos desenvolvidos para minha empresa atual.
            </p>
            <p>
              Tenho grande adaptabilidade e não teria problemas caso seja
              necessário aprender uma nova tecnologia para me adequar a
              projetos. Acredito que isso só me engrandece como profissinal e me
              torna mais preparado para criar novas soluções.
            </p>
          </div>
          <div>
            <img src="https://github.com/ogrds.png" alt="Gabriel Ribeiro" />
          </div>
        </section>

        <Divider id="skils" text="Skils" />

        <Topic title="Usando agora">
          <section className={styles.evaluation}>
            {conhecimentos.map((knowledge) => (
              <Knowledges
                key={knowledge.name}
                img={knowledge.photo}
                name={knowledge.name}
                rating={knowledge.rating}
                status={knowledge.status}
              />
            ))}
          </section>
        </Topic>

        <Topic title="Estudando">
          <span>Tecnologias novas que estou aprendendo.</span>
          <section className={styles.evaluation}>
            {db.learning.map((learning) => (
              <Knowledges
                key={learning.name}
                img={learning.photo}
                name={learning.name}
                rating={learning.rating}
              />
            ))}
          </section>
        </Topic>

        <Topic title="Idiomas">
          <section className={styles.evaluation}>
            {db.languages.map((language) => (
              <Knowledges
                key={language.name}
                img={language.photo}
                status={language.status}
                name={language.name}
                rating={language.rating}
              />
            ))}
          </section>
        </Topic>

        <Divider id="projects" text="Projetos Principais" />

        <Topic>
          <section className={styles.projects}>
            {db.projects.map((project) => (
              <Project
                title={project.title}
                especification={project.especification}
                definition={project.definition}
                link={!!project.link ? project.link : undefined}
              />
            ))}
          </section>
        </Topic>
      </main>
      <footer className={styles.footer} id="contact">
        <section className={styles.contentFooter}>
          <div className={styles.info}>
            <span>Desenvolvido com React</span>
            <span>
              O design foi baseado no modelo{" "}
              <a
                href="https://www.figma.com/community/file/824810955262478067"
                target="_blank
              "
              >
                ryan.warner.codes
              </a>{" "}
              do figma
            </span>
          </div>
          <div className={styles.social}>
            <div>
              <span className={styles.contact}>
                <RiMailFill /> <span>gabrielrsilva98@gmail.com</span>
              </span>
              <span className={styles.contact}>
                <RiPhoneFill /> <span>+55 (61) 98501-7742</span>
              </span>
            </div>
            <a
              href="https://www.linkedin.com/in/grds/"
              target="_blank"
              rel="noreferrer"
            >
              <RiLinkedinFill fontSize="1.2rem" />
            </a>
            <a href="https://github.com/ogrds" target="_blank" rel="noreferrer">
              <RiGithubFill fontSize="1.2rem" />
            </a>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
