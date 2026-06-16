import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";

const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="w-full h-full bg-black/50 flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-white">

          <h1 className="text-5xl md:text-7xl font-bold">
            Premium Construction Materials
          </h1>

          <p className="mt-6 text-xl max-w-2xl">
            Granite, Ceramic, Marble & Finishing Materials
            for Residential and Commercial Projects.
          </p>

          <div className="mt-8 flex gap-4">

            <Link
              to="/products"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition"
            >
              View Products
            </Link>

            <Link
              to="/contact"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold transition"
            >
              Request Quote
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
