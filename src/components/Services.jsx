const services = [
  {
    title: "Import & Supply",
    description:
      "We import high-quality construction and finishing materials.",
  },
  {
    title: "Wholesale Distribution",
    description:
      "Reliable supply for contractors, retailers, and projects.",
  },
  {
    title: "Retail Sales",
    description:
      "Quality products available for individual customers.",
  },
  {
    title: "Project Consultation",
    description:
      "Helping customers choose the right materials.",
  },
];

const Services = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Our Services
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Professional solutions for construction and finishing projects.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
