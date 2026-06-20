import hero from "../../assets/abouthero.png";

const AboutHero = () => {
  return (
    <section
      className="relative h-[55vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex items-center justify-center h-full">

        <div className="text-center text-white px-6">

          <h1 className="text-5xl md:text-6xl font-bold">
            About Fikat
          </h1>

          <p className="mt-6 text-xl max-w-3xl mx-auto">
            Ethiopia's trusted supplier of premium granite,
            marble, ceramic, porcelain and finishing materials.
          </p>

        </div>

      </div>

    </section>
  );
};

export default AboutHero;
