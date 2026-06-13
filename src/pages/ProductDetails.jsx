import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { products } from "../data/products";

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
            className="w-full rounded-lg"
          />

          <div>
            <h1 className="text-4xl font-bold mb-4">
              {product.name}
            </h1>

            <p className="text-gray-600 mb-6">
              {product.category}
            </p>

            <p className="mb-8">
              {product.description}
            </p>

            <button className="bg-black text-white px-6 py-3 rounded">
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetails;
