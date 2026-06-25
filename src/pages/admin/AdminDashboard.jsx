import { Link, useNavigate } from "react-router-dom";
import {
  FaBox,
  FaEnvelope,
  FaProjectDiagram,
  FaSignOutAlt,
  FaTachometerAlt,
} from "react-icons/fa";
import { useState, useEffect } from "react";

const AdminDashboard = () => {

  const [productsCount, setProductsCount] = useState(0);
const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };



  useEffect(() => {
  const token = localStorage.getItem("token");

  // Products
  fetch(`${import.meta.env.VITE_API_URL}api/products`)
    .then((res) => res.json())
    .then((data) => {
      setProductsCount(data.length);
    });

    

  // Messages
  fetch(`${import.meta.env.VITE_API_URL}api/messages`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      setMessages(data);
    });
}, []);
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-6">
        <h1 className="text-3xl font-bold text-[#E56D2E] mb-10">
          Fikat Admin
        </h1>

        <nav className="space-y-4">
          <Link
            to="/admin/dashboard"
            className="flex items-center gap-3 p-3 rounded hover:bg-gray-800 transition"
          >
            <FaTachometerAlt />
            Dashboard
          </Link>

          <Link
            to="/admin/products"
            className="flex items-center gap-3 p-3 rounded hover:bg-gray-800 transition"
          >
            <FaBox />
            Products
          </Link>

          <Link
            to="/admin/messages"
            className="flex items-center gap-3 p-3 rounded hover:bg-gray-800 transition"
          >
            <FaEnvelope />
            Messages
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold">
            Admin Dashboard
          </h1>

          <button
            onClick={logout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-lg transition"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <Link
            to="/admin/products"
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">
                  Products
                </p>

               <h2 className="text-4xl font-bold mt-2">
  {productsCount}
</h2>
              </div>

              <FaBox className="text-5xl text-[#E56D2E]" />
            </div>

            <p className="mt-4 text-gray-600">
              Manage products
            </p>
          </Link>

          <Link
            to="/admin/messages"
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">
                  Messages
                </p>

                <h2 className="text-4xl font-bold mt-2">
  {messages.length}
</h2>
              </div>

              <FaEnvelope className="text-5xl text-[#E56D2E]" />
            </div>

            <p className="mt-4 text-gray-600">
              View customer inquiries
            </p>
          </Link>

          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">
                  Projects
                </p>

                <h2 className="text-4xl font-bold mt-2">
                  🏗️
                </h2>
              </div>

              <FaProjectDiagram className="text-5xl text-[#E56D2E]" />
            </div>

            <p className="mt-4 text-gray-600">
              Showcase projects
            </p>
          </div>
        </div>

        {/* Recent Messages */}
        <div className="bg-white rounded-xl shadow p-6 mt-10">
          <h2 className="text-2xl font-bold mb-4">
            Recent Messages
          </h2>

          <div className="space-y-4">
  {messages.slice(0, 5).map((msg) => (
    <div
      key={msg.id}
      className="border-b pb-4"
    >
      <h3 className="font-semibold">
        {msg.name}
      </h3>

      <p className="text-gray-600">
        {msg.message}
      </p>

      <p className="text-sm text-gray-400 mt-1">
        {new Date(
          msg.created_at
        ).toLocaleString()}
      </p>
    </div>
  ))}
</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
