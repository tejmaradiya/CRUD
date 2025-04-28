// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Products from "./pages/Products";
import Create from "./pages/Create";
import Update from "./pages/Update";

export default function App() {
  const [tyres, setTyres] = useState([
    { id: 1, name: "MRF Zapper", price: 2500, category: "Two-wheeler" },
    { id: 2, name: "MRF Wanderer", price: 6000, category: "Four-wheeler" },
    { id: 3, name: "MRF Steel Muscle", price: 12000, category: "Truck Tyre" },
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products tyres={tyres} setTyres={setTyres} />} />
        <Route path="/create" element={<Create tyres={tyres} setTyres={setTyres} />} />
        <Route path="/update/:id" element={<Update tyres={tyres} setTyres={setTyres} />} />
      </Routes>
    </Router>
  );
}
