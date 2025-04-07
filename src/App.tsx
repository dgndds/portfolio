import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import MainLayout from "./layouts/MainLayout";
import Main from "./pages/Main";
import { Routes, Route, HashRouter } from "react-router";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import News from "./pages/News";
import OpSys from "./pages/OpSys";

function App() {
  return (
    <HashRouter>
      <MainLayout>
        <Routes>
          <Route path="*" element={<NotFound />} />

          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/desktop" element={<OpSys />} />
        </Routes>
      </MainLayout>
    </HashRouter>
  );
}

export default App;
