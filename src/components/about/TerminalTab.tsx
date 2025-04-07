import { commands } from "../../db/commands";
import RealTerminal from "../Fragments/RealTerminal";

const TerminalTab = () => {
  return (
    <div className="h-full">
      <RealTerminal
        title={"Real.exe"}
        commands={commands}
      ></RealTerminal>
    </div>
  );
};

export default TerminalTab;
