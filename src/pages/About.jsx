import MainLayout from "../layouts/MainLayout";
import logo from "../assets/logo.png";

const About = () => {
  return (
    <MainLayout>

      {/* Hero */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto text-center px-6">

          <img
            src={logo}
            alt="logo"
            className="h-28 mx-auto mb-6"
          />

          <h1 className="text-5xl font-bold">
            About Fikat
          </h1>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Premium supplier of granite, ceramic, marble,
            and construction finishing materials.
          </p>

        </div>
      </section>

      {/* Company Story */}
      <section className="max-w-6xl mx-auto py-20 px-6">

        <h2 className="text-4xl font-bold mb-6">
          Our Story
        </h2>

        <p className="text-gray-700 leading-8">
          Fikat Finishing & Supply Material provides
          imported construction and finishing materials
          to contractors, businesses, and individual
          customers in Addis Ababa.
        </p>

      </section>

      {/* Mission + Vision */}
      <section className="bg-gray-50 py-20">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">

          <div className="bg-white p-8 rounded-lg shadow">

            <h3 className="text-3xl font-bold mb-4">
              Mission
            </h3>

            <p>
              Deliver reliable construction materials
              with quality service and competitive pricing.
            </p>

          </div>

          <div className="bg-white p-8 rounded-lg shadow">

            <h3 className="text-3xl font-bold mb-4">
              Vision
            </h3>

            <p>
              Become a trusted construction supply partner
              across Ethiopia.
            </p>

          </div>

        </div>

      </section>

      {/* Stats */}
      <section className="py-20">

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h2 className="text-5xl font-bold">
              500+
            </h2>

            <p>Customers</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">
              50+
            </h2>

            <p>Products</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">
              5+
            </h2>

            <p>Years</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">
              100%
            </h2>

            <p>Quality</p>
          </div>

        </div>

      </section>

    </MainLayout>
  );
};

export default About;
