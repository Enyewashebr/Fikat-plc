import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminAddProduct = () => {
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    let imageUrl = "";

if (imageFile) {
  const uploadData = new FormData();

  uploadData.append("image", imageFile);

  const uploadResponse = await fetch(
    "http://localhost:5000/api/upload",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: uploadData,
    }
  );

  const uploadResult =
    await uploadResponse.json();

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

    try {
      const response = await fetch(
        "http://localhost:5000/api/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        alert("Product Added Successfully");
        navigate("/admin/products");
      } else {
        alert("Failed to Add Product");
      }
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <div className="max-w-4xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        Add Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          name="name"
          placeholder="Product Name"
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />

        <input
          name="category"
          placeholder="Category"
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />

        <input
  type="file"
  accept="image/*"
  className="w-full border p-3 rounded"
  onChange={(e) => setImageFile(e.target.files[0])}
/>

        <input
          name="origin"
          placeholder="Origin"
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />

        <input
          name="applications"
          placeholder="Applications (comma separated)"
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />

        <input
          name="finishes"
          placeholder="Finishes (comma separated)"
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />

        <input
          name="sizes"
          placeholder="Sizes (comma separated)"
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />

        <textarea
          name="short_description"
          placeholder="Short Description"
          rows="3"
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Full Description"
          rows="5"
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />

        <button
          className="bg-[#E56D2E] text-white px-6 py-3 rounded"
        >
          Add Product
        </button>

      </form>
    </div>
  );
};

export default AdminAddProduct;
