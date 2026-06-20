const ContactForm = () => {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#E56D2E]">
          Send Us a Message
        </h2>

        <form className="bg-white shadow-lg rounded-xl p-8 mt-10">

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Your Name"
              className="border p-4 rounded-lg"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="border p-4 rounded-lg"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="border p-4 rounded-lg"
            />

            <input
              type="text"
              placeholder="Subject"
              className="border p-4 rounded-lg"
            />

          </div>

          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full border p-4 rounded-lg mt-6"
          ></textarea>

          <button className="mt-6 bg-[#E56D2E] hover:bg-orange-700 text-white px-8 py-3 rounded-lg">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
};

export default ContactForm;
