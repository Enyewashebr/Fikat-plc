import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { products } from "../data/products";
import { Link } from "react-router-dom";
const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-xl shadow-lg"
          />

          <div>
            <div>
  <h1 className="text-4xl font-bold mb-2">
    {product.name}
  </h1>

  <p className="text-[#E56D2E] font-semibold mb-4">
    {product.category}
  </p>

  <p className="text-gray-600 mb-4">
    Origin: {product.origin}
  </p>

  <p className="mb-8 leading-7">
    {product.description}
  </p>

  {/* Applications */}
  <div className="mb-6">
    <h3 className="text-xl font-bold mb-3">
      Applications
    </h3>

    <ul className="list-disc list-inside text-gray-700">
      {product.applications?.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>

  {/* Finishes */}
  <div className="mb-6">
    <h3 className="text-xl font-bold mb-3">
      Available Finishes
    </h3>

    <div className="flex flex-wrap gap-2">
      {product.finishes?.map((finish, index) => (
        <span
          key={index}
          className="bg-gray-100 px-3 py-1 rounded-full"
        >
          {finish}
        </span>
      ))}
    </div>
  </div>

  {/* Sizes */}
  <div className="mb-8">
    <h3 className="text-xl font-bold mb-3">
      Available Sizes
    </h3>

    <div className="flex flex-wrap gap-2">
      {product.sizes?.map((size, index) => (
        <span
          key={index}
          className="bg-gray-100 px-3 py-1 rounded-full"
        >
          {size}
        </span>
      ))}
    </div>
  </div>

  <Link
    to="/contact"
    className="inline-block bg-[#E56D2E] hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition"
  >
    Request Quote
  </Link>
</div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetails;
