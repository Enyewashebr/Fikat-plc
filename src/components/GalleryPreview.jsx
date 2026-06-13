import granite from "../assets/logo.png";
import ceramic from "../assets/logo.png";
import marble from "../assets/logo.png";

const GalleryPreview = () => {
  const images = [granite, ceramic, marble, granite, ceramic, marble];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Project Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="gallery"
              className="h-64 w-full object-cover rounded-lg"
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-black text-white px-6 py-3 rounded">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
