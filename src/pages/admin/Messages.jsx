import AdminLayout from "../../layouts/AdminLayout";
import { messages } from "../../data/messages";

const Messages = () => {
  return (
    <AdminLayout>

      <h1 className="text-5xl font-bold mb-10">
        Messages
      </h1>

      <div className="space-y-6">

        {messages.map((msg) => (

          <div
            key={msg.id}
            className="
            bg-white
            rounded-xl
            shadow
            p-8
            "
          >

            <div
              className="
              flex
              justify-between
              mb-4
              "
            >

              <h2
                className="
                text-xl
                font-bold
                "
              >
                {msg.name}
              </h2>

              <span>
                {msg.phone}
              </span>

            </div>

            <p
              className="
              text-gray-500
              mb-4
              "
            >
              {msg.email}
            </p>

            <p>
              {msg.message}
            </p>

          </div>

        ))}

      </div>

    </AdminLayout>
  );
};

export default Messages;
