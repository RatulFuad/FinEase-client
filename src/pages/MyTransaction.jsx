import React from "react";
import { Link, useLoaderData, useParams } from "react-router";

const MyTransaction = () => {
const { _id } = useParams();
    const data = useLoaderData()
    console.log(data)


  return (
    <div className=" mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">My Transaction</h2>
      {/* grid grid-cols-3 gap-3 */}
      {/* max-w-md */}
      <div className="grid lg:grid-cols-3 gap-3">
        {data.map((model) => (
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-200">
            {/* উপরের অংশ */}
            <div className="flex justify-between items-center mb-3">
              <span
                className={`px-3 py-1 text-sm font-semibold rounded-full ${
                  model.type === "Income"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {model.type}
              </span>
              <span className="text-gray-500 text-sm">{model.date}</span>
            </div>

            {/* বিস্তারিত */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold">{model.category}</h3>
              <p className="text-2xl font-bold mt-2 text-gray-800">
                {model.amount}
              </p>
            </div>

            {/* বাটন সেকশন */}
            <div className="flex justify-between">
              <Link to="/update" className="bg-green-700 btn  text-white px-4 py-1 rounded-lg text-sm font-semibold">
                Update
              </Link>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm font-semibold">
                Delete
              </button>
              <Link
                to={`/TransactionDetails/${model._id}`}
                className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-1 rounded-lg text-sm font-semibold"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* Transaction Card */}
    </div>
  );
};

export default MyTransaction;
