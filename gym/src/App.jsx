import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Members from "./pages/members/Members.jsx";
import Example from "./pages/example/Example.jsx";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/members/example" element={<Example />} />
      </Routes>
      
    </div>
  );
};
export default App;