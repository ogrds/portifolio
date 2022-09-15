import { RiLinkM } from "react-icons/ri";

type ProjectProps = {
  title: string;
  specification: string;
  definition: string;
  link?: string | undefined;
};

export const Project: React.FC<ProjectProps> = ({
  title,
  specification,
  definition,
  link,
}) => {
  return (
    <div>
      <h2 className="text-primary m-auto text-2xl font-bold mb-2">{title}</h2>
      <span>
        <p className="mb-2">{definition}</p>
        <p className="mb-2">{specification}</p>
        {!!link && (
          <a
            className="underline flex items-center gap-2"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            <RiLinkM /> Link
          </a>
        )}
      </span>
    </div>
  );
};
