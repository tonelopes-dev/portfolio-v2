import "./App.css";
// import "./i18n/index.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

// import { useTranslation } from "react-i18next";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
