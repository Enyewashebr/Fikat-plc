import { useParams } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";

const EditProduct = () => {
  const { id } = useParams();

  return (
    <AdminLayout>

      <div className="max-w-3xl">

        <h1 className="text-5xl font-bold mb-10">
          Edit Product
        </h1>

        <form
          className="
          bg-white
          p-8
          rounded-xl
          shadow
          space-y-6
          "
        >

          <input
            type="text"
            defaultValue={`Product ${id}`}
            className="
            w-full
            p-4
            border
            rounded
            "
          />

          <textarea
            rows="5"
            className="
            w-full
            p-4
            border
            rounded
            "
          />

          <button
            className="
            bg-black
            text-white
            px-8
            py-4
            rounded
            "
          >
            Save Changes
          </button>

        </form>

      </div>

    </AdminLayout>
  );
};

export default EditProduct;
