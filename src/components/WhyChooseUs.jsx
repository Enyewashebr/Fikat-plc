const reasons = [
  {
    title: "Quality Materials",
    description: "We supply high-quality imported construction and finishing materials.",
  },
  {
    title: "Competitive Prices",
    description: "Affordable pricing for both wholesale and retail customers.",
  },
  {
    title: "Reliable Supply",
    description: "Consistent availability of granite, ceramic, and finishing materials.",
  },
  {
    title: "Customer Satisfaction",
    description: "Dedicated support and professional service for every customer.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Why Choose Us
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Your trusted partner for premium construction and finishing materials.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {reason.title}
              </h3>

              <p className="text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
