import heroImage from "../assets/hero.png";

const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="bg-black/50 w-full h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-5xl md:text-7xl font-bold">
            Premium Construction Materials
          </h1>

          <p className="mt-6 text-xl">
            Granite, Ceramic, Marble & Finishing Materials
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-yellow-500 px-6 py-3 rounded">
              View Products
            </button>

            <button className="border px-6 py-3 rounded">
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
