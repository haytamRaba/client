import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Members from "./pages/members/Members.jsx";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
      </Routes>
      
    </div>
  );
};
export default App;