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

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
  Premium Granite, Marble, porcelain &
  Ceramic Solutions
</h1>

          


          <p className="mt-6 text-xl max-w-2xl">
  Imported quality materials for residential,
  commercial and public projects across Ethiopia.
</p>
          <div className="mt-8 flex gap-4">

            <Link
  to="/products"
  className="bg-[#E56D2E] hover:bg-orange-700 px-6 py-3 rounded-lg transition"
>
  View Products
</Link>

<Link
  to="/contact"
  className="bg-white text-black px-6 py-3 rounded-lg font-semibold transition hover:bg-gray-200"
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
