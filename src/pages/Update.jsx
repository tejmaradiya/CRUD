// src/pages/Update.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Update({ tyres, setTyres }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const tyre = tyres.find((t) => t.id === parseInt(id));

  const [name, setName] = useState(tyre?.name || "");
  const [price, setPrice] = useState(tyre?.price || "");
  const [category, setCategory] = useState(tyre?.category || "");

  const handleUpdate = (e) => {
    e.preventDefault();
    setTyres(
      tyres.map((t) =>
        t.id === parseInt(id)
          ? { ...t, name, price, category }
          : t
      )
    );
    Swal.fire("Updated!", "Tyre details updated!", "success").then(() => navigate("/"));
  };

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-red-600">Update Tyre</h2>
        <form onSubmit={handleUpdate} className="space-y-4">
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
            Update Tyre
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
