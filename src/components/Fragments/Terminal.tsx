import { twMerge } from "tailwind-merge";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import CloseIcon from "@mui/icons-material/Close";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import { useState } from "react";

interface TerminalProps {
  className?: string;
  title: string;
  children?: React.ReactNode;
  closed?: boolean;
}

//shadow-[0px_0px_5px_2.5px_rgba(16,137,99,0.75)]

const Terminal = ({
  className,
  title,
  children,
  closed = false,
}: TerminalProps) => {
  const [terminalClosed, setTerminalClosed] = useState(closed);

  const closeTerminal = () => {
    setTerminalClosed(true);
  };

  const openTerminal = () => {
    setTerminalClosed(false);
  };

  return (
    <>
      {!terminalClosed ? (
        <div
          className={twMerge(
            `bg-[#151515] border-2 border-primary-border h-full`,
            className
          )}
        >
          <div className="h-9 bg-primary-border-dark flex items-center justify-between px-2 font-tech-mono font-bold text-[#efefef] text-[12px]">
            <div className="flex-1">{title}</div>

            <div className="flex gap-2">
              <button onClick={closeTerminal} className="hover:cursor-pointer">
                <HorizontalRuleIcon sx={{ fontSize: 15 }} />
              </button>

              <CropSquareIcon sx={{ fontSize: 15 }} />

              <button onClick={closeTerminal} className="hover:cursor-pointer">
                <CloseIcon sx={{ fontSize: 15 }} />
              </button>
            </div>
          </div>

          <div className="text-[#ffffffc2] p-2 font-tech-mono ">
            {children ? (
              children
            ) : (
              <>
                {"> npm run install"}
                <span className="animate-blink">_</span>
              </>
            )}
          </div>
        </div>
      ) : (
        <div
          className={twMerge(
            `bg-[#151515] border-2 border-primary-border h-full flex items-center justify-center`,
            className
          )}
          onClick={openTerminal}
        >
          <div className="h-[70px] w-[70px] border border-primary text-primary flex items-center justify-center flex-col gap-1 hover:cursor-pointer">
            <AddToQueueIcon />
            <span className="font-tech-mono">Show</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Terminal;
