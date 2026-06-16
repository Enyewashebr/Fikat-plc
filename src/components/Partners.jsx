import partner1 from "../assets/partner/partner1.png";
import partner2 from "../assets/partner/partner2.png";
import partner3 from "../assets/partner/partner3.png";

const Partners = () => {
  const brands = [
    partner1,
    partner2,
    partner3,
   partner1,
      partner2,
  ];

  return (
    <section className="py-20">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Trusted Partners
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">

          {brands.map((brand, index) => (

            <div
              key={index}
              className="
              grayscale
              hover:grayscale-0
              transition
              "
            >

              <img
                src={brand}
                alt=""
                className="h-20 mx-auto"
              />

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Partners;
