import styles from "./Divider.module.scss";

type DividerProps = {
  text?: string;
  id: string;
};

export const Divider: React.FC<DividerProps> = ({ text, id }) => {
  return (
    <div id={id} className={styles.container}>
      {text && <span>{text}</span>}
    </div>
  );
};
