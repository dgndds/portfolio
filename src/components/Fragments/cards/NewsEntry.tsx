type NewsEntryProps = {
  date: string;
  type: string;
  subtype: string;
  title: string;
  description: string;
  count: number;
};

const NewsEntry = ({
  date,
  type,
  subtype,
  title,
  description,
  count,
}: NewsEntryProps) => {
  return (
    <div className="flex gap-2">
      <span className="text-primary font-thin">{date}</span>
      <span className="text-property">{`[${type}]`}</span>
      <span className="text-primary">{`(${subtype})`}</span>
      <span className="text-token-dark">{title}</span>
      <span className="text-primary">{description}</span>
      <span className="text-class-light">{`(x${count})`}</span>
    </div>
  );
};

export default NewsEntry;
