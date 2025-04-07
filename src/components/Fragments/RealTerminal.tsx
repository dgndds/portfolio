import { twMerge } from "tailwind-merge";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import CloseIcon from "@mui/icons-material/Close";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import { useState } from "react";
import TerminalDialog from "../dialogs/TerminalDialog";
import React from "react";
import RealTerminalBody from "./RealTerminalBody";

export interface Command {
  command: string;
  commandValues?: {
    value: string;
    content: string | React.ReactNode; // Updated to accept React.ReactNode
  }[];
  content?: string | React.ReactNode; // Updated to accept React.ReactNode
  examples: {
    usage: string;
    description: string;
  }[];
}
interface RealTerminalProps {
  className?: string;
  title: string;
  children?: React.ReactNode;
  closed?: boolean;
  onClose?: () => void;
  commands?: Command[];
  resizable?: boolean; // Added resizable prop
}

//shadow-[0px_0px_5px_2.5px_rgba(16,137,99,0.75)]

const RealTerminal = ({
  className,
  title,
  closed = false,
  onClose,
  commands = [],
  resizable = false, // Default value for resizable
}: RealTerminalProps) => {
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
            `bg-[#151515] border-2 border-primary-border h-full ${
              resizable ? "resize" : ""
            } overflow-hidden`, // Conditionally include resize class
            className
          )}
        >
          <div
            data-draggable="true"
            className="h-9 px-2 bg-primary-border-dark flex items-center justify-between font-tech-mono font-bold text-[#efefef] text-[12px]"
          >
            <div className="flex-1">{title}</div>

            <div className="flex gap-2">
              <button onClick={onCloseClicked} className="hover:cursor-pointer">
                <HorizontalRuleIcon sx={{ fontSize: 15 }} />
              </button>

              <CropSquareIcon
                onClick={handleOpen}
                sx={{ fontSize: 15 }}
                className="hover:cursor-pointer"
              />

              <button onClick={onCloseClicked} className="hover:cursor-pointer">
                <CloseIcon sx={{ fontSize: 15 }} />
              </button>
            </div>
          </div>

          <RealTerminalBody commands={commands} />
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
        content={<RealTerminalBody commands={commands} />}
        real
        commands={commands}
      />
    </>
  );
};

export default RealTerminal;
