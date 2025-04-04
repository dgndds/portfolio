import ConsoleDemo from "../components/Fragments/ConsoleDemo";
import ComingSoon from "../components/Fragments/cards/ComingSoon";
import Clock from "../components/Fragments/cards/Clock";
import News from "../components/Fragments/News";
import AsciiArt from "../components/Fragments/cards/AsciiArt";

const Main = () => {
  return (
    <div className="flex flex-col gap-2 h-full px-4 overflow-hidden">
      <div className="flex gap-2 align-stretch">
        <div className="w-[250px]">
          <AsciiArt />
        </div>
        <div className="w-[350px]">
          <ComingSoon />
        </div>
        <div className="flex-1 bg-background-dark border border-primary-border-dark">
          <Clock />
        </div>
      </div>

      <div>
        <News />
      </div>

      <div className="flex gap-2">
        <ConsoleDemo />

        <div className="w-48 flex items-center justify-center bg-background-dark border border-primary-border-dark text-primary font-tech-mono text-3xl">
          #44
        </div>
      </div>
    </div>
  );
};

export default Main;
