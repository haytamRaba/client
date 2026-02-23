import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Members from "./pages/members/Members.jsx";
import ChiffreAffaire from "./pages/chiffreAffaire/ChiffreAffaire.jsx";
import Payments from "./pages/payments/Payments.jsx";
import Ex from "./pages/example/Example.jsx";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/chiffreaffaire" element={<ChiffreAffaire />} />
        <Route path="/ex" element={<Ex />} />
        <Route path="/payments" element={<Payments />} />
      </Routes>
      
    </div>
  );
};
export default App;