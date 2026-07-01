import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./assets/bootstrap.min.css";
import "./index.css";
import "./index.js";

import EnglishApp from "./components/English/App/App";
import TamilApp from "./components/Tamil/App/Apps.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        {/* Default Route */}
        <Route path="/" element={<Navigate to="/ta" replace />} />

        {/* Tamil Routes */}
        <Route path="/ta/*" element={<TamilApp />} />

        {/* English Routes */}
        <Route path="/en/*" element={<EnglishApp />} />

        {/* Any unknown URL redirects to Tamil */}
        <Route path="*" element={<Navigate to="/ta" replace />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
);