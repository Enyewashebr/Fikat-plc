const WhoWeAre = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-[#E56D2E] mb-6">
          Who We Are
        </h2>

        <p className="text-gray-700 text-lg leading-8 max-w-4xl mx-auto">
          Fikat Finishing Material Supplier PLC is a trusted supplier of
          premium granite, marble, ceramic, porcelain, and finishing
          materials. We provide high-quality products for residential,
          commercial, and public construction projects across Ethiopia.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-12">

          <div className="p-6 shadow rounded-lg">
            <h3 className="text-3xl font-bold text-[#E56D2E]">✓</h3>
            <p className="mt-3 font-medium">Quality Products</p>
          </div>

          <div className="p-6 shadow rounded-lg">
            <h3 className="text-3xl font-bold text-[#E56D2E]">✓</h3>
            <p className="mt-3 font-medium">Imported Materials</p>
          </div>

          <div className="p-6 shadow rounded-lg">
            <h3 className="text-3xl font-bold text-[#E56D2E]">✓</h3>
            <p className="mt-3 font-medium">Competitive Pricing</p>
          </div>

          <div className="p-6 shadow rounded-lg">
            <h3 className="text-3xl font-bold text-[#E56D2E]">✓</h3>
            <p className="mt-3 font-medium">Reliable Supply</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;
