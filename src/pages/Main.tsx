import ConsoleDemo from "../components/Fragments/console/ConsoleDemo";
import ComingSoon from "../components/Fragments/cards/ComingSoon";
import Clock from "../components/Fragments/cards/Clock";

const Main = () => {
  return (
    <div className="flex flex-col gap-2 mt-16 h-full p-4 overflow-hidden">
      <ConsoleDemo />

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
