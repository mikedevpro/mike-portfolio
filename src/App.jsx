import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import BudgetAppCaseStudy from "./pages/BudgetApp.jsx";

export default function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : false;
  });
  const [speed, setSpeed] = useState(() => {
    const saved = localStorage.getItem("speedMode");
    return saved ? saved === "on" : false;
  });

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);
  useEffect(() => {
    localStorage.setItem("speedMode", speed ? "on" : "off");
  }, [speed]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home dark={dark} setDark={setDark} speed={speed} setSpeed={setSpeed} />} />
        <Route path="/budget-app" element={<BudgetAppCaseStudy dark={dark} setDark={setDark} speed={speed} setSpeed={setSpeed} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
