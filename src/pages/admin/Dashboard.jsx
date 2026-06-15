import AdminLayout from "../../layouts/AdminLayout";

const Dashboard = () => {
  return (
    <AdminLayout>

      <h1 className="text-5xl font-bold mb-10">
        Dashboard
      </h1>

      <div
        className="
        grid
        md:grid-cols-3
        gap-8
        "
      >

        {[
          {
            title: "Products",
            value: 50,
          },

          {
            title: "Messages",
            value: 12,
          },

          {
            title: "Projects",
            value: 8,
          },

        ].map((card) => (

          <div
            key={card.title}
            className="
            bg-white
            rounded-xl
            p-8
            shadow-lg
            hover:-translate-y-2
            transition
            "
          >

            <p
              className="
              text-gray-500
              mb-4
              "
            >
              {card.title}
            </p>

            <h2
              className="
              text-5xl
              font-bold
              "
            >
              {card.value}
            </h2>

          </div>

        ))}

      </div>

      {/* Recent */}

      <div
        className="
        mt-12
        bg-white
        rounded-xl
        p-8
        shadow
        "
      >

        <h2
          className="
          text-2xl
          font-bold
          mb-6
          "
        >
          Recent Activity
        </h2>

        <div className="space-y-4">

          <div>
            Product added
          </div>

          <div>
            Customer message
          </div>

          <div>
            Project updated
          </div>

        </div>

      </div>

    </AdminLayout>
  );
};

export default Dashboard;
