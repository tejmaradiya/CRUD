// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black p-4 flex justify-between items-center text-white">
      <h1 className="font-bold text-2xl">TyreZone</h1>
      <div className="space-x-6 text-lg">
        <Link to="/" className="hover:text-red-500">Home</Link>
        <Link to="/create" className="bg-red-600 px-4 py-2 rounded hover:bg-red-700">Add Tyre</Link>
      </div>
    </nav>
  );
}
