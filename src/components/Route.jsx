import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import RoseDay from "./RoseDay";
import ProposeDay from "./PreposeDay";
// import ProposeDay from "@/components/ProposeDay";
// import ChocolateDay from "@/components/ChocolateDay";
// import TeddyDay from "@/components/TeddyDay";
// import PromiseDay from "@/components/PromiseDay";
// import HugDay from "@/components/HugDay";
// import KissDay from "@/components/KissDay";
// import ValentineDay from "@/components/ValentineDay";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/rose-day" replace />} />

        <Route path="/rose-day" element={<RoseDay />} />
        <Route path="/propose-day" element={<ProposeDay />} />
        {/* <Route path="/chocolate-day" element={<ChocolateDay />} />
        <Route path="/teddy-day" element={<TeddyDay />} />
        <Route path="/promise-day" element={<PromiseDay />} />
        <Route path="/hug-day" element={<HugDay />} />
        <Route path="/kiss-day" element={<KissDay />} />
        <Route path="/valentines-day" element={<ValentineDay />} /> */}

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}