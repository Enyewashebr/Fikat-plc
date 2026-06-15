import AdminLayout from "../../layouts/AdminLayouts";

const Dashboard = () => {
  return (
    <AdminLayout>

      <h1 className="text-4xl font-bold mb-10">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="p-8 shadow rounded">
          Products
          <h2 className="text-4xl mt-4">
            50
          </h2>
        </div>

        <div className="p-8 shadow rounded">
          Messages
          <h2 className="text-4xl mt-4">
            12
          </h2>
        </div>

        <div className="p-8 shadow rounded">
          Projects
          <h2 className="text-4xl mt-4">
            8
          </h2>
        </div>

      </div>

    </AdminLayout>
  );
};

export default Dashboard;
