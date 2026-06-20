import ProductCard from "./ProductCard";
import { products } from "../data/products";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {``

  const previewProducts = products.slice(0,3);
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#E56D2E]">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-block bg-[#E56D2E] hover:bg-orange-700 text-white px-8 py-3 rounded-lg transition"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
