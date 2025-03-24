import { Link, useLocation } from "react-router-dom";

interface ListLinkProps {
  path: string;
  title: string;
}

const ListLink = ({ path, title }: ListLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Link
      to={path} 
      className="font-tech-mono !decoration-property-dark underline-offset-8 text-primary"
      style={{
        textDecoration: isActive ? "underline" : "none",
      }}
    >
      {title}
    </Link>
  );
};

export default ListLink;
