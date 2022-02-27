// import { Container } from './styles';
import styles from "./Topic.module.scss";

type TopicProps = {
  title?: string;
  children: React.ReactNode;
};

export const Topic: React.FC<TopicProps> = ({ children, title }) => {
  return (
    <div className={styles.container}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
};
