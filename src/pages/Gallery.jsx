import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { products } from "../data/products";

const categories = [
  "All",
  "Granite",
  "Ceramic",
  "Projects",
  "Warehouse",
];

const Gallery = () => {
  const [selected, setSelected] =
    useState("All");

  const filtered =
    selected === "All"
      ? products
      : products.filter(
          (item) =>
            item.category === selected
        );

  return (
    <MainLayout>

      <section className="max-w-7xl mx-auto py-20 px-6">

        <h1 className="text-5xl font-bold text-center mb-12">
          Gallery
        </h1>

        {/* Filters */}

        <div className="flex flex-wrap justify-center gap-4 mb-12">

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setSelected(cat)
              }
              className={`px-6 py-2 rounded
              ${
                selected === cat
                  ? "bg-black text-white"
                  : "bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}

        </div>

        {/* Grid */}

        <div className="grid md:grid-cols-3 gap-6">

          {filtered.map((item) => (

            <div
              key={item.id}
              className="
              overflow-hidden
              rounded-lg
              shadow
              "
            >

              <img
                src={item.image}
                alt=""
                className="
                h-72
                w-full
                object-cover
                hover:scale-110
                transition
                "
              />

            </div>

          ))}

        </div>

      </section>

    </MainLayout>
  );
};

export default Gallery;
