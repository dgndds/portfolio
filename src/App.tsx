import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Header from "./components/navigation/header/Header";
import ConsoleDemo from "./components/console/ConsoleDemo";

function App() {
  return (
    <>
      <Header />

      <div className="mt-16 h-full p-4 overflow-hidden bg-[#1f1f1f]">
        <ConsoleDemo />
      </div>
    </>
  );
}

export default App;
