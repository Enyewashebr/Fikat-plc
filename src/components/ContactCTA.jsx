import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="bg-[#E56D2E] text-white py-20">
      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold">
          Ready to Start Your Project?
        </h2>

        <p className="mt-6 text-lg">
          Contact us today for quotations and expert advice on
          construction finishing materials.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-8 bg-white text-[#E56D2E] px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Contact Us
        </Link>

      </div>
    </section>
  );
};

export default ContactCTA;
