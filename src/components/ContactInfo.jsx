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

          {/* <div className="bg-gray-50 rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition">

  <FaMapMarkerAlt className="text-4xl text-[#E56D2E] mx-auto" />

  <h3 className="mt-4 text-2xl font-bold">
    Address
  </h3>

  <p className="mt-4">
    Signal Road,
  </p>

  <p>
    Dema Hope Building,
  </p>

  <p>
    1st Floor, Office F04
  </p>

  <p>
    Addis Ababa, Ethiopia
  </p>

</div> */}
<div className="bg-gray-50 rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition">

  <FaMapMarkerAlt className="text-4xl text-[#E56D2E] mx-auto" />

  <h3 className="mt-4 text-2xl font-bold">
    Address
  </h3>

  <a
    href="https://www.google.com/maps/search/?api=1&query=Signal+Road+Dema+Hope+Building+F04+Addis+Ababa+Ethiopia"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 block text-gray-700 hover:text-[#E56D2E] transition"
  >
    <p>Signal Road</p>
    <p>Dema Hope Building</p>
    <p>1st Floor, Office F04</p>
    <p>Addis Ababa, Ethiopia</p>
  </a>

</div>

        </div>

      </div>

    </section>
  );
};

export default ContactInfo;
