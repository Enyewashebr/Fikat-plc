import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const AdminEditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [imageFile, setImageFile] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    image: "",
    short_description: "",
    description: "",
    applications: "",
    finishes: "",
    sizes: "",
    origin: "",
  });

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFormData({
          ...data,
          applications: data.applications?.join(", ") || "",
          finishes: data.finishes?.join(", ") || "",
          sizes: data.sizes?.join(", ") || "",
        });
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    let imageUrl = formData.image;

    // Upload new image if selected
    if (imageFile) {
      const uploadData = new FormData();

      uploadData.append("image", imageFile);

      const uploadResponse = await fetch(
        `${import.meta.env.VITE_API_URL}api/upload`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: uploadData,
        }
      );

      const uploadResult = await uploadResponse.json();

      imageUrl = uploadResult.imageUrl;
    }

    const payload = {
      ...formData,
      image: imageUrl,
      applications: formData.applications
        .split(",")
        .map((item) => item.trim()),

      finishes: formData.finishes
        .split(",")
        .map((item) => item.trim()),

      sizes: formData.sizes
        .split(",")
        .map((item) => item.trim()),
    };

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}api/products/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      }
    );

    if (response.ok) {
      alert("Updated Successfully");
      navigate("/admin/products");
    } else {
      alert("Failed to Update Product");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        Edit Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        {/* Current Image */}
        {formData.image && (
          <img
            src={formData.image}
            alt={formData.name}
            className="w-48 h-48 object-cover rounded mb-4"
          />
        )}

        {/* New Image */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setImageFile(e.target.files[0])
          }
          className="w-full border p-3 rounded"
        />

        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="w-full border p-3 rounded"
        />

        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full border p-3 rounded"
        />

        <input
          name="origin"
          value={formData.origin}
          onChange={handleChange}
          placeholder="Origin"
          className="w-full border p-3 rounded"
        />

        <input
          name="applications"
          value={formData.applications}
          onChange={handleChange}
          placeholder="Applications (comma separated)"
          className="w-full border p-3 rounded"
        />

        <input
          name="finishes"
          value={formData.finishes}
          onChange={handleChange}
          placeholder="Finishes (comma separated)"
          className="w-full border p-3 rounded"
        />

        <input
          name="sizes"
          value={formData.sizes}
          onChange={handleChange}
          placeholder="Sizes (comma separated)"
          className="w-full border p-3 rounded"
        />

        <textarea
          name="short_description"
          value={formData.short_description}
          onChange={handleChange}
          rows="3"
          placeholder="Short Description"
          className="w-full border p-3 rounded"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="5"
          placeholder="Full Description"
          className="w-full border p-3 rounded"
        />

        <button
          type="submit"
          className="bg-[#E56D2E] text-white px-6 py-3 rounded hover:bg-orange-700"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default AdminEditProduct;
