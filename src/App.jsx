import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Landing from "./pages/Landing.jsx";
import TicTacLove from "./pages/TicTacLove.jsx";
import MessagePlotTwist from "./pages/MessagePlotTwist.jsx";
import GiftsMenu from "./pages/GiftsMenu.jsx";
import Gift1 from "./pages/Gift1.jsx";
import Gift2 from "./pages/Gift2.jsx";
import Gift3 from "./pages/Gift3.jsx";
import Final from "./pages/Final.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/game" element={<TicTacLove />} />
      <Route path="/message" element={<MessagePlotTwist />} />
      <Route path="/gifts" element={<GiftsMenu />} />

      <Route path="/gift/1" element={<Gift1 />} />
      <Route path="/gift/2" element={<Gift2 />} />
      <Route path="/gift/3" element={<Gift3 />} />

      <Route path="/final" element={<Final />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}