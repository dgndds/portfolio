import { useState, useRef } from "react";
import DraggableDiv from "../components/DraggableDiv";
import RealTerminal from "../components/Fragments/RealTerminal";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { commands } from "../db/commands";
import AsciiArt from "../components/Fragments/cards/AsciiArt";

const OpSys = () => {
  const [terminals, setTerminals] = useState([{ id: 1, title: "Terminal 1" }]);
  const terminalCounter = useRef(2);

  const addTerminal = () => {
    const newId = terminalCounter.current++;
    setTerminals([...terminals, { id: newId, title: `Terminal ${newId}` }]);
  };

  const closeTerminal = (id: number) => {
    setTerminals(terminals.filter((terminal) => terminal.id !== id));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-140px)] text-white">
      <div className="w-full h-full relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
          <AsciiArt />
        </div>
        {terminals.map((terminal) => (
          <DraggableDiv key={terminal.id}>
            <RealTerminal
              title={terminal.title}
              className="w-[450px] h-[350px]"
              onClose={() => closeTerminal(terminal.id)}
              commands={commands}
              resizable
            ></RealTerminal>
          </DraggableDiv>
        ))}
      </div>

      <div className="bg-primary-light fixed bottom-0 w-full h-12 flex items-center gap-4 px-4 shadow-md">
        <button
          className="bg-primary-border h-10 w-10 flex items-center justify-center rounded-full hover:bg-primary-hover transition"
          onClick={addTerminal}
          title="Add Terminal"
        >
          <AddCircleOutlineIcon fontSize="large" />
        </button>

        <div
          className="flex gap-2 overflow-x-auto no-scrollbar"
          onWheel={(e) => {
            const container = e.currentTarget;
            container.scrollLeft += e.deltaY;
          }}
        >
          {terminals.map((terminal) => (
            <div
              key={terminal.id}
              className="p-2 flex items-center gap-2 justify-between bg-primary-border rounded-lg text-sm font-medium text-white whitespace-nowrap hover:bg-primary-hover transition cursor-pointer"
              title={terminal.title}
            >
              <span>{terminal.title}</span>
              <button
                className="ml-2 text-red-500 hover:text-red-700 transition"
                onClick={() => closeTerminal(terminal.id)}
                title="Close Terminal"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpSys;
