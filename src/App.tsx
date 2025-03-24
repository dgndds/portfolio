import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import MainLayout from "./layouts/MainLayout";
import Main from "./pages/Main";
import { Routes, Route, HashRouter } from "react-router";
import About from "./pages/About";

function App() {
  return (
    <MainLayout>
      <HashRouter basename="/portfolio">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </HashRouter>
    </MainLayout>
  );
}

export default App;
