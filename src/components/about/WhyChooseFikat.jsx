const reasons = [
  "Premium Imported Materials",
  "Competitive Pricing",
  "Reliable Supply",
  "Professional Customer Service",
];

const WhyChooseFikat = () => {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl text-center font-bold text-[#E56D2E]">
          Why Choose Fikat
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold">
                ✓ {item}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseFikat;
