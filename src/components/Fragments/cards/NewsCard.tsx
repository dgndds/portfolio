import Terminal from "../Terminal";
import { News } from "../../../db/news";

type NewsCardProps = News;

const NewsCard = ({
  title,
  description,
  id,
  type,
  subtype,
  date,
}: NewsCardProps) => {
  return (
    <Terminal title={title + ` #${id}`}>
      <div className="flex flex-col gap-6 p-2">
        <span className="block font-mono ">
          {"> cat"} <span className="text-property">{type}</span>
        </span>

        <div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-primary">{date}</span>
            <span className="px-2 py-1 text-xs bg-token-dark rounded">
              {subtype.toUpperCase()}
            </span>
          </div>

          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </div>
    </Terminal>
  );
};

export default NewsCard;
