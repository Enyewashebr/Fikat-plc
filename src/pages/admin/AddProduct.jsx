import AdminLayout from "../../layouts/AdminLayout";

const AddProduct = () => {
  return (
    <AdminLayout>

      <div className="max-w-3xl">

        <h1 className="text-5xl font-bold mb-10">
          Add Product
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

          <div>

            <label className="block mb-2">
              Product Name
            </label>

            <input
              type="text"
              className="
              w-full
              border
              rounded
              p-4
              "
            />

          </div>

          <div>

            <label className="block mb-2">
              Category
            </label>

            <select
              className="
              w-full
              border
              rounded
              p-4
              "
            >

              <option>
                Granite
              </option>

              <option>
                Ceramic
              </option>

              <option>
                Marble
              </option>

              <option>
                Finishing
              </option>

            </select>

          </div>

          <div>

            <label className="block mb-2">
              Price
            </label>

            <input
              type="number"
              className="
              w-full
              border
              rounded
              p-4
              "
            />

          </div>

          <div>

            <label className="block mb-2">
              Description
            </label>

            <textarea
              rows="5"
              className="
              w-full
              border
              rounded
              p-4
              "
            />

          </div>

          <div>

            <label className="block mb-2">
              Product Image
            </label>

            <input
              type="file"
              className="
              w-full
              border
              rounded
              p-4
              "
            />

          </div>

          <button
            className="
            bg-black
            text-white
            px-8
            py-4
            rounded-lg
            hover:opacity-90
            "
          >
            Save Product
          </button>

        </form>

      </div>

    </AdminLayout>
  );
};

export default AddProduct;
