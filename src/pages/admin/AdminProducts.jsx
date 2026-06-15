import AdminLayout from "../../layouts/AdminLayout";
import { products } from "../../data/products";
import { Link } from "react-router-dom";
import { useState } from "react";

const AdminProducts = () => {

    const [productList, setProductList] =
  useState(products);

const [showDelete, setShowDelete] =
  useState(false);

const [selectedId, setSelectedId] =
  useState(null);

  const handleDelete = () => {
  setProductList(
    productList.filter(
      (item) =>
        item.id !== selectedId
    )
  );

  setShowDelete(false);
};



  return (
    <AdminLayout>

      <h1 className="text-4xl font-bold mb-10">
        Products
      </h1>

      <div className="bg-white rounded shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-4">
                Image
              </th>

              <th>
                Name
              </th>

              <th>
                Category
              </th>

              <th>
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {productList.map((product) => (

              <tr
                key={product.id}
                className="border-t"
              >

                <td className="p-4">

                  <img
                    src={product.image}
                    alt=""
                    className="
                    h-16
                    w-16
                    object-cover
                    "
                  />

                </td>

                <td>
                  {product.name}
                </td>

                <td>
                  {product.category}
                </td>

                <td>

                  <Link
  to={`/admin/products/edit/${product.id}`}
  className="
  bg-blue-500
  text-white
  px-4
  py-2
  rounded
  "
>
  Edit
</Link>

                  <button
  onClick={() => {
    setSelectedId(product.id);
    setShowDelete(true);
  }}
  className="
  bg-red-500
  text-white
  px-4
  py-2
  rounded
  "
>
  Delete
</button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>
        {
showDelete && (

<div
className="
fixed
inset-0
bg-black/40
flex
items-center
justify-center
"
>

<div
className="
bg-white
p-8
rounded-xl
w-[400px]
"
>

<h2
className="
text-2xl
font-bold
mb-4
"
>
Delete Product
</h2>

<p
className="
mb-8
"
>
Are you sure?
</p>

<div className="flex gap-4">

<button
onClick={() =>
setShowDelete(false)
}
className="
border
px-6
py-3
rounded
"
>
Cancel
</button>

<button
onClick={handleDelete}
className="
bg-red-500
text-white
px-6
py-3
rounded
"
>
Delete
</button>

</div>

</div>

</div>

)
}

      </div>

    </AdminLayout>
  );
};

export default AdminProducts;
