// src/pages/Create.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Create({ tyres, setTyres }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Two-wheeler");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTyre = {
      id: Date.now(),
      name,
      price,
      category,
    };
    setTyres([...tyres, newTyre]);
    Swal.fire("Added!", "New tyre added successfully!", "success").then(() => navigate("/"));
  };

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-red-600">Add New Tyre</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Tyre Name"
            className="w-full border p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Price"
            className="w-full border p-2 rounded"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <select
            className="w-full border p-2 rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Two-wheeler</option>
            <option>Four-wheeler</option>
            <option>Truck Tyre</option>
          </select>
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded"
          >
            Add Tyre
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
