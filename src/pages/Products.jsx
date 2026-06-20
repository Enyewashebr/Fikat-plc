import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { Helmet } from "react-helmet-async";

const Products = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <MainLayout>
      <Helmet>
  <title>
    Products | Fikat Finishing Material Supplier PLC
  </title>

  <meta
    name="description"
    content="Explore our collection of granite, marble, ceramic, porcelain and finishing materials."
  />
</Helmet>

      {/* Hero */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold">
            Our Products
          </h1>

          <p className="mt-6 text-lg max-w-3xl mx-auto text-gray-300">
            Explore our premium collection of granite, marble,
            ceramic tiles, porcelain tiles, and finishing materials
            for residential and commercial projects.
          </p>

        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-wrap justify-center gap-4">

            <span className="bg-[#E56D2E] text-white px-5 py-2 rounded-full">
              Granite
            </span>

            <span className="bg-[#E56D2E] text-white px-5 py-2 rounded-full">
              Marble
            </span>

            <span className="bg-[#E56D2E] text-white px-5 py-2 rounded-full">
              Ceramic Tiles
            </span>

            <span className="bg-[#E56D2E] text-white px-5 py-2 rounded-full">
              Porcelain Tiles
            </span>

            <span className="bg-[#E56D2E] text-white px-5 py-2 rounded-full">
              Finishing Materials
            </span>

          </div>

        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto py-20 px-6">

        <div className="mb-10">

          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E56D2E]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

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
