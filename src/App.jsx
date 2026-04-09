import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CryptoPulseCaseStudy from "./pages/CryptoPulseCaseStudy.jsx";
import BudgetAppCaseStudy from "./pages/BudgetAppCaseStudy.jsx";
import MomentumCaseStudy from "./pages/MomentumCaseStudy.jsx";
import BudgetAppV2CaseStudy from "./pages/BudgetAppV2CaseStudy.jsx";
import LoadTrackerCaseStudy from "./pages/LoadTrackerCaseStudy.jsx";
import FlowSparkCaseStudy from "./pages/FlowSparkCaseStudy.jsx";

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
        <Route
          path="/projects/cryptopulse-case-study"
          element={<CryptoPulseCaseStudy dark={dark} setDark={setDark} speed={speed} setSpeed={setSpeed} />}
        />
        <Route
          path="/projects/budget-app-case-study"
          element={<BudgetAppCaseStudy dark={dark} setDark={setDark} speed={speed} setSpeed={setSpeed} />}
        />
        <Route
          path="/projects/budget-app-v2-case-study"
          element={<BudgetAppV2CaseStudy dark={dark} setDark={setDark} speed={speed} setSpeed={setSpeed} />}
        />
        <Route
          path="/projects/momentum-case-study"
          element={<MomentumCaseStudy dark={dark} setDark={setDark} speed={speed} setSpeed={setSpeed} />}
        />
        <Route
          path="/projects/load-tracker-case-study"
          element={<LoadTrackerCaseStudy dark={dark} setDark={setDark} speed={speed} setSpeed={setSpeed} />}
        />
        <Route
          path="/projects/flowspark-case-study"
          element={<FlowSparkCaseStudy dark={dark} setDark={setDark} speed={speed} setSpeed={setSpeed} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
