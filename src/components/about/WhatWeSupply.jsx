const supplies = [
  "Granite",
  "Marble",
  "Ceramic Tiles",
  "Porcelain Tiles",
  "Finishing Materials",
];

const WhatWeSupply = () => {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl text-center font-bold text-[#E56D2E]">
          What We Supply
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">

          {supplies.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhatWeSupply;
