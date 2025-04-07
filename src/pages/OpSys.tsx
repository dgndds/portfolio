// import Terminal from "../components/Fragments/Terminal";
import DraggableDiv from "../components/DraggableDiv";
import RealTerminal from "../components/Fragments/RealTerminal";

const OpSys = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-140px)] text-white">
      <div className="w-full h-full relative">
        <DraggableDiv>
          <RealTerminal
            title={"tews"}
            className="w-[450px] h-[350px]"
          ></RealTerminal>
        </DraggableDiv>
      </div>

      <div className="bg-primary fixed bottom-0 w-full h-12"></div>
    </div>
  );
};

export default OpSys;
