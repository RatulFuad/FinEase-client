import React from "react";
import { useLoaderData } from "react-router";

const TransactionDetails = () => {

    const data = useLoaderData()
   const model = data.result
   console.log(model)
   




  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Transaction Details
      </h2>

      <div className="space-y-6">
  
        <div
       
          className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-200"
        >
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

          <div className="mb-2">
            <h3 className="text-lg font-semibold">{model.category}</h3>
            <p className="text-gray-600">{model.description}</p>
            <p className="text-xl font-bold mt-2">{model.amount}</p>
            
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default TransactionDetails;
