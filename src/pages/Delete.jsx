// src/pages/Delete.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function Delete({ tyres, setTyres }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const tyre = tyres.find((t) => t.id === parseInt(id));

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: `Delete tyre ${tyre.name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setTyres(tyres.filter(t => t.id !== parseInt(id)));
        Swal.fire("Deleted!", "Tyre has been deleted.", "success").then(() => {
          navigate("/");
        });
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center p-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-red-600">Delete Tyre</h2>
        {tyre ? (
          <>
            <p className="text-lg mb-4">Are you sure you want to delete <strong>{tyre.name}</strong>?</p>
            <button
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded"
            >
              Confirm Delete
            </button>
          </>
        ) : (
          <p className="text-gray-500">Tyre not found!</p>
        )}
      </div>
      <Footer />
    </>
  );
}
