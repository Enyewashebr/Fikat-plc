const CoreValues = () => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl text-center font-bold text-[#E56D2E] mb-12">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              Quality
            </h3>

            <p className="text-gray-600">
              Supplying premium imported materials that
              meet international standards.
            </p>

          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              Reliability
            </h3>

            <p className="text-gray-600">
              Consistent product availability and
              dependable customer support.
            </p>

          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              Integrity
            </h3>

            <p className="text-gray-600">
              Building long-term relationships through
              honesty, trust and transparency.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CoreValues;
