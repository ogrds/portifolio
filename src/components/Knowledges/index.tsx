import { Rating } from "../Rating";

import styles from "./Knowledges.module.scss";

type KnowledgesProps = {
  img: string;
  name: string;
  status?: string;
  rating?: number;
};

export const Knowledges: React.FC<KnowledgesProps> = ({
  img,
  name,
  rating = 0,
  status,
}) => {
  return (
    <div className={styles.container}>
      <img src={img} width={50} alt={name} />
      <div>
        <span>{name}</span>
        {status && <span className={styles.status}>{status}</span>}
        {rating && <Rating quantity={rating} />}
      </div>
    </div>
  );
};
