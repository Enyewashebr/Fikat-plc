import MainLayout from "../layouts/MainLayout";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <MainLayout>
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h1 className="text-5xl font-bold text-center mb-12">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Get In Touch
            </h2>

            <div className="space-y-4">
              <p>
                <FaPhone className="inline-block mr-2 text-gray-600" />
                <strong>Phone:</strong> +251 XXX XXX XXX
              </p>
              <p>
                <FaEnvelope className="inline-block mr-2 text-gray-600" />
                <strong>Email:</strong> info@fikat.com
              </p>
              <p>
                <FaMapMarkerAlt className="inline-block mr-2 text-gray-600" />
                <strong>Address:</strong> Addis Ababa, Ethiopia
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-3 rounded"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border p-3 rounded"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border p-3 rounded"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border p-3 rounded"
              ></textarea>

              <button
                className="bg-black text-white px-6 py-3 rounded"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
       
        <div className="mt-16">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.760921800361!2d38.839486099999995!3d9.0369155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b91491e3583b7%3A0x5a78d25bf31f435f!2sFikat%20Finishing%20Material%20Supplier%20Plc!5e1!3m2!1sen!2set!4v1781339844492!5m2!1sen!2set"
            
            width="100%"
            height="450"
            style=
            {{border:0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;

