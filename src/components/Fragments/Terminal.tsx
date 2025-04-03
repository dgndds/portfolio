import { twMerge } from "tailwind-merge";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import CloseIcon from "@mui/icons-material/Close";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import { useState } from "react";
import TerminalDialog from "../dialogs/TerminalDialog";

interface TerminalProps {
  className?: string;
  title: string;
  children?: React.ReactNode;
  closed?: boolean;
  onClose?: () => void; // Added onClose prop
}

//shadow-[0px_0px_5px_2.5px_rgba(16,137,99,0.75)]

const Terminal = ({
  className,
  title,
  children,
  closed = false,
  onClose, // Destructure onClose
}: TerminalProps) => {
  const [terminalClosed, setTerminalClosed] = useState(closed);

  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleOpen = () => setDialogOpen(true);
  const handleClose = () => setDialogOpen(false);

  const closeTerminal = () => {
    setTerminalClosed(true);
  };

  const openTerminal = () => {
    setTerminalClosed(false);
  };

  const onCloseClicked = () => {
    if (onClose) {
      onClose();
    } else {
      closeTerminal();
    }
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
              <button onClick={onCloseClicked} className="hover:cursor-pointer">
                <HorizontalRuleIcon sx={{ fontSize: 15 }} />
              </button>

              <CropSquareIcon onClick={handleOpen} sx={{ fontSize: 15 }} />

              <button onClick={onCloseClicked} className="hover:cursor-pointer">
                <CloseIcon sx={{ fontSize: 15 }} />
              </button>
            </div>
          </div>

          <div className="text-[#ffffffc2] p-2 font-tech-mono overflow-y-auto h-[calc(100%-36px)] scrollbar scrollbar-thumb-[#727272] scrollbar-track-[#181818]">
            {children ? (
              children
            ) : (
              <>
                {"> npm run dev"}
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
            <span className="font-tech-mono">Show </span>
          </div>
        </div>
      )}

      <TerminalDialog
        open={isDialogOpen}
        onClose={handleClose}
        title={title}
        content={
          children ? (
            children
          ) : (
            <>
              {"> npm run dev"}
              <span className="animate-blink">_</span>
            </>
          )
        }
      />
    </>
  );
};

export default Terminal;
