import MainLayout from "../layouts/MainLayout";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <MainLayout>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-green-600 text-white py-20">
        <div className="max-w-6xl mx-auto text-center px-6">

          <img
            src={logo}
            alt="Fikat Logo"
            className="h-28 mx-auto mb-6"
          />

          <h1 className="text-5xl font-bold">
            About Fikat
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg">
            Your trusted partner for premium granite, ceramic,
            marble, and construction finishing materials in Ethiopia.
          </p>

        </div>
      </section>

      {/* Company Story */}
      <section className="max-w-6xl mx-auto py-20 px-6">

        <h2 className="text-4xl font-bold mb-8">
          Our Story
        </h2>

        <div className="space-y-6 text-gray-700 leading-8 text-lg">

          <p>
            Fikat Finishing & Supply Material is committed to providing
            high-quality construction and finishing materials to contractors,
            businesses, and homeowners throughout Ethiopia.
          </p>

          <p>
            We specialize in imported granite, ceramic tiles, marble,
            and a wide range of finishing materials designed to meet
            modern construction standards and customer expectations.
          </p>

          <p>
            Through reliable sourcing, competitive pricing, and excellent
            customer service, we help our clients complete their projects
            with confidence and quality.
          </p>

        </div>

      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-3xl font-bold mb-4 text-blue-700">
                Our Mission
              </h3>

              <p className="text-gray-700 leading-7">
                To deliver reliable construction and finishing materials
                through exceptional service, quality products, and
                competitive pricing that create value for our customers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-3xl font-bold mb-4 text-green-700">
                Our Vision
              </h3>

              <p className="text-gray-700 leading-7">
                To become one of Ethiopia's most trusted suppliers of
                construction and finishing materials by building lasting
                relationships based on quality and reliability.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Core Values */}
      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">
                Quality
              </h3>

              <p className="text-gray-700">
                We provide products that meet high standards of durability,
                performance, and appearance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4 text-green-700">
                Reliability
              </h3>

              <p className="text-gray-700">
                Customers can count on us for consistent supply,
                timely service, and dependable support.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-600">
                Integrity
              </h3>

              <p className="text-gray-700">
                We believe in honesty, transparency, and building
                long-term trust with our clients.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Statistics */}
      <section className="bg-blue-700 text-white py-20">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

            <div>
              <h2 className="text-5xl font-bold mb-2">
                500+
              </h2>

              <p>Customers Served</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold mb-2">
                50+
              </h2>

              <p>Products Available</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold mb-2">
                5+
              </h2>

              <p>Years Experience</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold mb-2">
                100%
              </h2>

              <p>Commitment to Quality</p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA Section */}
      <section className="bg-gray-700 text-white py-20">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            Ready to Start Your Project?
          </h2>

          <p className="mt-6 text-gray-300">
            Contact our team today for product information,
            quotations, and expert guidance.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-8 bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Contact Us
          </Link>

        </div>

      </section>

    </MainLayout>
  );
};

export default About;
