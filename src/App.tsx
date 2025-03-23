import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import MainLayout from "./layouts/MainLayout";
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route } from "react-router";
import About from "./pages/About";

function App() {
  return (
    <MainLayout>
      <BrowserRouter basename="/portfolio">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </MainLayout>
  );
}

export default App;
