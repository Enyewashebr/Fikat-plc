const ContactHero = () => {
  return (
    <section className="relative h-[45vh] bg-[url('/contact-hero.jpg')] bg-cover bg-center">

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex h-full items-center justify-center">

        <div className="text-center text-white px-6">

          <h1 className="text-5xl md:text-6xl font-bold">
            Contact Us
          </h1>

          <p className="mt-6 text-lg max-w-3xl">
            Get in touch with Fikat Finishing Material Supplier PLC for
            premium granite, marble, ceramic, porcelain and finishing materials.
          </p>

        </div>

      </div>

    </section>
  );
};

export default ContactHero;
