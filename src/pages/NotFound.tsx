import { useLocation } from "react-router-dom";
import Terminal from "../components/Fragments/Terminal";

const NotFound = () => {
  return (
    <div className="w-full h-[calc(100vh-88px)] flex items-center justify-center">
      <div className="w-[650px] h-[250px]">
      <Terminal title="404 Not Found">
        <p className="mb-2">
            {">"} access {useLocation().pathname}
        </p>
        <p>
          Command not found. The page you are looking for does not exist.
          <br />
          Try typing <code>help</code> or go back to <a href="/" className="underline underline-offset-4">home</a>.
        </p>
      </Terminal>;
      </div>
    </div>
  );
};

export default NotFound;
