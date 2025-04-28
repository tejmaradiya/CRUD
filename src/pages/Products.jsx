// src/pages/Products.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Products({ tyres, setTyres }) {
  
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Tyre will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        setTyres(tyres.filter(t => t.id !== id));
        Swal.fire("Deleted!", "Tyre has been deleted.", "success");
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6">Tyre Product Listing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tyres.map((tyre) => (
            <div key={tyre.id} className="border p-6 rounded shadow">
              <h3 className="text-xl font-bold">{tyre.name}</h3>
              <p className="text-red-600 font-bold mt-2">₹ {tyre.price}</p>
              <p className="text-gray-500">{tyre.category}</p>
              <div className="flex gap-4 mt-4">
                <Link to={`/update/${tyre.id}`} className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700">Edit</Link>
                <button onClick={() => handleDelete(tyre.id)} className="border border-red-600 text-red-600 py-1 px-3 rounded hover:bg-red-600 hover:text-white">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
