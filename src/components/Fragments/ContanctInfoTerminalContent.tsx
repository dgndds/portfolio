import GitHubIcon from "@mui/icons-material/GitHub";
import { LinkedIn, Twitter } from "@mui/icons-material";

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
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              github.com/yourusername
            </a>
          </span>
          <span className="flex flex-col md:flex-row gap-4 items-center">
            <LinkedIn />
            <a
              href="https://linkedin.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              linkedin.com/yourusername
            </a>
          </span>
          <span className="flex flex-col md:flex-row gap-4 items-center">
            <Twitter />
            <a
              href="https://x.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              x.com/yourusername
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default ContactInfoTerminalContent;
