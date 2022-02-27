import { RiLinkM } from "react-icons/ri";

import styles from "./Project.module.scss";

type ProjectProps = {
  title: string;
  especification: string;
  definition: string;
  link?: string | undefined;
};

export const Project: React.FC<ProjectProps> = ({
  title,
  especification,
  definition,
  link,
}) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <span>
        <p>{definition}</p>
        <p>{especification}</p>
        {!!link && (
          <a href={link} target="_blank" rel="noreferrer">
            <RiLinkM /> Link
          </a>
        )}
      </span>
    </div>
  );
};
