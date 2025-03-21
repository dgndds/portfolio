import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Header from "./components/navigation/header/Header";
import ConsoleDemo from "./components/Fragments/console/ConsoleDemo";
import ComingSoon from "./components/Fragments/cards/ComingSoon";
import Clock from "./components/Fragments/cards/Clock";

function App() {
  return (
    <>
      <Header />

      <div className="flex flex-col gap-2 mt-16 h-full p-4 overflow-hidden">
        <ConsoleDemo />

        <div className="flex gap-2">
          <ComingSoon />
          <div className="flex-1 bg-background-dark border border-primary-border-dark">
            <Clock />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
