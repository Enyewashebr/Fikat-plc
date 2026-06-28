const ContactMap = () => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#E56D2E] mb-10">
          Our Location
        </h2>

        <div className="rounded-xl overflow-hidden shadow-xl">

          {/* <iframe
          //   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.760921800361!2d38.839486099999995!3d9.0369155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b91491e3583b7%3A0x5a78d25bf31f435f!2sFikat%20Finishing%20Material%20Supplier%20Plc!5e1!3m2!1sen!2set!4v1781339844492!5m2!1sen!2set"
          //   width="100%"
          //   height="450"
          //   style={{ border: 0 }}
          //   loading="lazy"
          // ></iframe> */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d222.86931345231798!2d38.78583902866109!3d9.02194131246623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2set!4v1782674933158!5m2!1sen!2set"
                    width="100%"
                    height="450"
                    style={{border:0}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"></iframe>


        </div>

      </div>

    </section>
  );
};

export default ContactMap;
