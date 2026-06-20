import {
  FaFacebookF,
  FaTelegramPlane,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const SocialMedia = () => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold text-[#E56D2E]">
          Follow Us
        </h2>

        <p className="mt-4 text-gray-600">
          Stay connected with Fikat Finishing Material Supplier PLC
          through our social media channels.
        </p>

        <div className="flex justify-center gap-6 mt-10">

          <a
            href="#"
            className="w-14 h-14 rounded-full bg-[#1877F2] text-white flex items-center justify-center text-2xl hover:scale-110 transition"
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            className="w-14 h-14 rounded-full bg-[#229ED9] text-white flex items-center justify-center text-2xl hover:scale-110 transition"
          >
            <FaTelegramPlane />
          </a>

          <a
            href="#"
            className="w-14 h-14 rounded-full bg-[#0A66C2] text-white flex items-center justify-center text-2xl hover:scale-110 transition"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="#"
            className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white flex items-center justify-center text-2xl hover:scale-110 transition"
          >
            <FaInstagram />
          </a>

        </div>

      </div>

    </section>
  );
};

export default SocialMedia;
