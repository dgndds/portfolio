import ConsoleDemo from "../components/Fragments/ConsoleDemo";
import ComingSoon from "../components/Fragments/cards/ComingSoon";
import Clock from "../components/Fragments/cards/Clock";

const Main = () => {
  return (
    <div className="flex flex-col gap-2 mt-16 h-full p-4 overflow-hidden">
      <div className="flex gap-2">
        <ConsoleDemo />

        <div className="w-48 flex items-center justify-center bg-background-dark border border-primary-border-dark text-primary font-tech-mono text-3xl">
          #21
        </div>
      </div>

      <div className="flex gap-2">
        <ComingSoon />
        <div className="flex-1 bg-background-dark border border-primary-border-dark">
          <Clock />
        </div>
      </div>
    </div>
  );
};

export default Main;
