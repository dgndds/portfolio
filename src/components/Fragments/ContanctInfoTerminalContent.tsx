import GitHubIcon from "@mui/icons-material/GitHub";
import { Book, LinkedIn } from "@mui/icons-material";

type ContactInfoTerminalContentProps = {
  headlessMode?: boolean;
};

const ContactInfoTerminalContent = ({
  headlessMode = false,
}: ContactInfoTerminalContentProps) => {
  return (
    <>
      {!headlessMode && <h2 className="mb-4 md:mb-0">{">"} list contacts</h2>}{" "}
      <div
        className={`flex flex-col gap-4 justify-center ${
          !headlessMode ? "items-center md:h-[175px]" : ""
        }`}
      >
        <div className="flex flex-col gap-4">
          <span className="flex flex-col md:flex-row gap-4 items-center">
            <GitHubIcon />
            <a
              href="https://github.com/dgndds"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              github.com/dgndds
            </a>
          </span>
          <span className="flex flex-col md:flex-row gap-4 items-center">
            <LinkedIn />
            <a
              href="https://www.linkedin.com/in/muhammed-do%C4%9Fancan-y%C4%B1lmazo%C4%9Flu/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              muhammed-dogancan-yilmazoglu
            </a>
          </span>
          <span className="flex flex-col md:flex-row gap-4 items-center">
            <Book />
            <a
              href="https://medium.com/@dogancan1998231"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              medium.com/@dogancan1998231
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default ContactInfoTerminalContent;
