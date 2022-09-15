import { Rating } from "../Rating";

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
    <div className="text-white px-6 py-2 text-2xl flex items-center border border-shadow_primary rounded-[6px]">
      <img className="w-12 mr-5" src={img} width={50} alt={name} />
      <div>
        <span>{name}</span>
        {status && (
          <span className="block text-base -mt-[5px] text-[#8080804a]">
            {status}
          </span>
        )}
        {rating && <Rating quantity={rating} />}
      </div>
    </div>
  );
};
