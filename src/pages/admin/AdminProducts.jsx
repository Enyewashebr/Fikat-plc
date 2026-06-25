import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  const deleteProduct = async (id) => {
    const token = localStorage.getItem("token");

    if (!window.confirm("Delete this product?")) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/products/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        setProducts(
          products.filter((p) => p.id !== id)
        );

        alert("Product Deleted Successfully");
      } else {
        alert("Failed to Delete Product");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Products Management
        </h1>

        <Link
          to="/admin/products/add"
          className="bg-[#E56D2E] text-white px-4 py-2 rounded hover:bg-orange-700 transition"
        >
          Add Product
        </Link>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full border p-3 rounded mb-4"
      />

      {/* Total */}
      <p className="text-gray-600 mb-4">
        Total Products: {filteredProducts.length}
      </p>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-3">ID</th>
              <th className="border p-3">Image</th>
              <th className="border p-3">Name</th>
              <th className="border p-3">Category</th>
              <th className="border p-3">Origin</th>
              <th className="border p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <tr
                  key={product.id}
                  className="hover:bg-gray-50"
                >
                  <td className="border p-3">
                    {product.id}
                  </td>

                  <td className="border p-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>

                  <td className="border p-3">
                    {product.name}
                  </td>

                  <td className="border p-3">
                    {product.category}
                  </td>

                  <td className="border p-3">
                    {product.origin}
                  </td>

                  <td className="border p-3">
                    <div className="flex gap-2">
                      <Link
                        to={`/admin/products/edit/${product.id}`}
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() =>
                          deleteProduct(product.id)
                        }
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center p-6 text-gray-500"
                >
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProducts;
