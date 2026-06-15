import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}

      <aside
        className="
        w-72
        bg-white
        shadow-xl
        p-8
        flex
        flex-col
        "
      >

        <div className="flex items-center gap-3 mb-12">

          <img
            src={logo}
            alt="logo"
            className="h-12"
          />

          <h1 className="text-xl font-bold">
            Admin
          </h1>

        </div>

        <nav className="space-y-3">

          <Link
            to="/admin"
            className="
            block
            p-4
            rounded-lg
            hover:bg-black
            hover:text-white
            transition
            "
          >
            Dashboard
          </Link>

          <Link
            to="/admin/products"
            className="
            block
            p-4
            rounded-lg
            hover:bg-black
            hover:text-white
            transition
            "
          >
            Products
          </Link>

          <Link
            to="/admin/add-product"
            className="
            block
            p-4
            rounded-lg
            hover:bg-black
            hover:text-white
            transition
            "
          >
            Add Product
          </Link>

          <Link
            to="/admin/messages"
            className="
            block
            p-4
            rounded-lg
            hover:bg-black
            hover:text-white
            transition
            "
          >
            Messages
          </Link>

        </nav>

      </aside>

      {/* Content */}

      <main className="flex-1 p-10">

        {children}

      </main>

    </div>
  );
};

export default AdminLayout;
