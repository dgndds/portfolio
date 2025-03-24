import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import MainLayout from "./layouts/MainLayout";
import Main from "./pages/Main";
import { Routes, Route, BrowserRouter } from "react-router";
import About from "./pages/About";

function App() {
  return (
    <MainLayout>
      <BrowserRouter basename={process.env.REACT_APP_FOR_PATH }>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </MainLayout>
  );
}

export default App;
