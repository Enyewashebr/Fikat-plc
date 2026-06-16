import gra1 from "../assets/products/gra1.png";
import cera1 from "../assets/products/cera1.png";
import mar1 from "../assets/products/mar1.png";

const categories = [
  {
    title: "Granite",
    image: gra1,
  },
  {
    title: "Ceramic Tiles",
    image: cera1,
  },
  {
    title: "Marble",
    image: mar1,
  },
  {
    title: "Finishing Materials",
    image: gra1,
  },
];
const ProductCategories = () => {
  return (
    <section className="py-20 px-6 bg-white rounded-xl shadow-md hover:shadow-xl transition">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl  text-center mb-4 text-blue-700 font-bold">
          Our Products
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Explore our range of premium construction and finishing materials.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group rounded-lg overflow-hidden shadow-lg cursor-pointer"
            >
              <div className="overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold text-center">
                  {category.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
