import { twMerge } from "tailwind-merge";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import CloseIcon from "@mui/icons-material/Close";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import { useState } from "react";
import TerminalDialog from "../dialogs/TerminalDialog";
import React from "react";

interface Command {
  command: string;
  commandValues?: {
    value: string;
    content: string;
  }[];
  content?: string | React.ReactNode;
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
}

//shadow-[0px_0px_5px_2.5px_rgba(16,137,99,0.75)]

const RealTerminal = ({
  className,
  title,
  children,
  closed = false,
  onClose,
  commands = [],
}: RealTerminalProps) => {
  const [terminalClosed, setTerminalClosed] = useState(closed);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);

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

  function getCommandResult(givenCommand: string): React.ReactNode {
    const matchedCommand = commands.find((cmd) => cmd.command === givenCommand);

    if (matchedCommand) {
      if (matchedCommand.content) {
        return matchedCommand.content;
      } else {
        return (
          <div>
            {matchedCommand.examples.length > 0 && (
              <ul>
                {matchedCommand.examples.map((example, index) => (
                  <li key={index} className="mt-2">
                    <strong>Usage:</strong> {example.usage}
                    <br />
                    <strong>Description:</strong> {example.description}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      }
    } else {
      if (givenCommand && givenCommand.includes(" ")) {
        const [baseCommand, ...args] = givenCommand.split(" ");
        const matchedCommandWithValues = commands.find(
          (cmd) => cmd.command === baseCommand
        );

        if (matchedCommandWithValues) {
          if (args.includes("--help")) {
            return (
              <div>
                {matchedCommandWithValues.examples.length > 0 && (
                  <ul>
                    {matchedCommandWithValues.examples.map((example, index) => (
                      <li key={index} className="mt-2">
                        <strong>Usage:</strong> {example.usage}
                        <br />
                        <strong>Description:</strong> {example.description}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          }

          if (matchedCommandWithValues.commandValues) {
            const matchedValue = matchedCommandWithValues.commandValues.find(
              (val) => val.value === args.join(" ")
            );

            if (matchedValue) {
              return (
                <span className="text-green-500">{matchedValue.content}</span>
              );
            } else {
              return (
                <span className="text-yellow-500">
                  No matching value found for "{args.join(" ")}" in command "
                  {baseCommand}"
                </span>
              );
            }
          }
        }
      }

      return <span className="text-red-500">Command not found</span>;
    }
  }

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

          <div className="text-[#ffffffc2] p-2 font-tech-mono overflow-y-auto h-[calc(100%-36px)] scrollbar scrollbar-thumb-[#727272] scrollbar-track-[#181818]">
            <div className="flex flex-col justify-end h-full gap-4">
              <div className="overflow-y-auto max-h-[100%] scrollbar scrollbar-thumb-[#727272] scrollbar-track-[#181818]">
                <ul className="text-[#ffffffc2] font-tech-mono">
                  {commandHistory.map((cmd, index) => (
                    <li key={index} className="before:content-['>_'] mt-2">
                      <span className="text-token-neon">{cmd}</span>

                      <div>{getCommandResult(cmd)}</div>
                    </li>
                  ))}
                </ul>
              </div>

              <input
                type="text"
                className="w-full bg-[#1e1e1e] text-[#ffffffc2] p-2 font-tech-mono border border-[#333] rounded focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Type a command..."
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const command = e.currentTarget.value;
                    setCommandHistory((prev) => [...prev, command]);

                    if (command === "clear") {
                      setCommandHistory([]);
                    }

                    e.currentTarget.value = "";
                  } else if (e.key === "ArrowUp") {
                    if (commandHistory.length > 0) {
                      e.currentTarget.value =
                        commandHistory[commandHistory.length - 1] || "";
                      e.preventDefault();
                      e.stopPropagation();
                    }
                  }
                }}
              />
            </div>
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

export default RealTerminal;
