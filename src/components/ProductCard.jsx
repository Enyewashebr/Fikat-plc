const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <img
        src={product.image}
        alt={product.name}
        className="h-60 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold">
          {product.name}
        </h3>

        <p className="text-gray-600 mt-2">
          {product.description}
        </p>

        <button className="mt-4 bg-black text-white px-4 py-2 rounded">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
