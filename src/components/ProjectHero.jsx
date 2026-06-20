import heroImage from "../assets/projects/heroImg.png";

const ProjectHero = () => {
  return (
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Our Projects
        </h1>

        <p className="text-lg md:text-xl text-gray-200 leading-8">
          Discover residential, commercial, and interior finishing
          projects showcasing our premium granite, marble, ceramic,
          porcelain, and construction finishing materials.
        </p>

      </div>
    </section>
  );
};

export default ProjectHero;
