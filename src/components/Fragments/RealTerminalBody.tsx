import { useEffect, useRef, useState } from "react";
import { Command } from "./RealTerminal";

type RealTerminalBodyProps = {
  commands: Command[];
};

const RealTerminalBody = ({ commands }: RealTerminalBodyProps) => {
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [commandHistory]);

  function getCommandResult(givenCommand: string): React.ReactNode {
    const matchedCommand = commands.find((cmd) => cmd.command === givenCommand);

    if (matchedCommand) {
      if (matchedCommand.content) {
        return typeof matchedCommand.content === "string" ? (
          <span>{matchedCommand.content}</span>
        ) : (
          matchedCommand.content
        );
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
              return typeof matchedValue.content === "string" ? (
                <span>{matchedValue.content}</span>
              ) : (
                matchedValue.content
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
    <div className="text-[#ffffffc2] p-2 font-tech-mono overflow-y-auto h-[calc(100%-36px)] scrollbar scrollbar-thumb-[#727272] scrollbar-track-[#181818]">
      <div className="flex flex-col justify-end h-full gap-4">
        <div className="overflow-y-auto max-h-[100%] scrollbar scrollbar-thumb-[#727272] scrollbar-track-[#181818] pr-4">
          <ul className="text-[#ffffffc2] font-tech-mono">
            {commandHistory.map((cmd, index) => (
              <li key={index} className="before:content-['>_'] mt-10">
                <span className="text-token-neon">{cmd}</span>

                <div className="mt-2">{getCommandResult(cmd)}</div>
              </li>
            ))}
            <div ref={terminalEndRef} />
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
              scrollToBottom();
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
  );
};

export default RealTerminalBody;
