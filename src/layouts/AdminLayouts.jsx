import { Link } from "react-router-dom";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">

      <aside className="w-64 bg-black text-white p-6">

        <h1 className="text-2xl font-bold mb-10">
          Admin
        </h1>

        <div className="space-y-4">

          <Link to="/admin">
            Dashboard
          </Link>

          <br />

          <Link to="/admin/products">
            Products
          </Link>

          <br />

          <Link to="/admin/add-product">
            Add Product
          </Link>

          <br />

          <Link to="/admin/messages">
            Messages
          </Link>

        </div>

      </aside>

      <main className="flex-1 p-10">
        {children}
      </main>

    </div>
  );
};

export default AdminLayout;
