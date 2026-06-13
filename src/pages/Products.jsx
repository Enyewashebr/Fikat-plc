import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const Products = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <MainLayout>
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h1 className="text-5xl font-bold text-center mb-10">
          Our Products
        </h1>

        <input
          type="text"
          placeholder="Search products..."
          className="w-full p-4 border rounded-lg mb-10"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default Products;
