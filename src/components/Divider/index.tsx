import styles from "./Divider.module.scss";

type DividerProps = {
  text?: string;
};

export const Divider: React.FC<DividerProps> = ({ text }) => {
  return <div className={styles.container}>{text && <span>{text}</span>}</div>;
};
