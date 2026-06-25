// import { useNavigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen p-10">
      <div className="flex justify-between items-center">

        <h1 className="text-4xl font-bold">
          Admin Dashboard
        </h1>
        <div className="mt-10 grid md:grid-cols-2 gap-6">

  <Link
    to="/admin/products"
    className="bg-white shadow-md p-6 rounded-lg"
  >
    <h2 className="text-2xl font-bold">
      Products
    </h2>

    <p className="text-gray-600 mt-2">
      Manage products
    </p>
  </Link>

</div>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>

      </div>
    </div>
  );
};

export default AdminDashboard;
