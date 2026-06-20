import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-50 rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition">

            <FaPhone className="text-4xl text-[#E56D2E] mx-auto" />

            <h3 className="mt-4 text-2xl font-bold">
              Phone
            </h3>

            <p className="mt-4">
              +251 911 524 938
            </p>

            <p>
              +251 930 796 513
            </p>

          </div>

          <div className="bg-gray-50 rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition">

            <FaEnvelope className="text-4xl text-[#E56D2E] mx-auto" />

            <h3 className="mt-4 text-2xl font-bold">
              Email
            </h3>

            <p className="mt-4">
              plcfikat@gmail.com
            </p>

          </div>

          <div className="bg-gray-50 rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition">

            <FaMapMarkerAlt className="text-4xl text-[#E56D2E] mx-auto" />

            <h3 className="mt-4 text-2xl font-bold">
              Address
            </h3>

            <p className="mt-4">
              Addis Ababa, Ethiopia
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactInfo;
