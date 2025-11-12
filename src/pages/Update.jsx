import React from "react";

export default function Update() {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl text-center font-semibold mb-4">
        Update Transaction
      </h2>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Type</label>
          <select
            name="category"
            id=""
            className="w-full border rounded-lg px-3 py-2 border-gray-200"
          >
            <option value="">Income</option>
            <option value="income">Expense</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            rows={3}
           
            className="w-full  border rounded-lg px-3 py-2 resize-y border-gray-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            name="category"
            className="w-full border rounded-lg px-3 py-2 border-gray-200"
          >
            <option value=""> Select Category </option>
            <option value="income">Salary</option>
            <option value="expense">Food</option>
            <option value="savings">Transport</option>
            <option value="investment">Bills</option>
            <option value="investment">Entertainment</option>
            <option value="investment">Shoping</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Amount</label>
          <input
            name="amount"
           
            inputMode="decimal"
            className="w-full border rounded-lg px-3 py-2 border-gray-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <input
            type="date"
            name="date"
            className="w-full border rounded-lg px-3 py-2 border-gray-200"
          />
        </div>

        <div className="flex items-center gap-3 mt-2">
          <button
            type="button"
            className="px-4 py-2 btn rounded-lg bg-blue-600 text-white font-medium shadow"
          >
            Update Data
          </button>
          {/* <button type="button" className="px-4 py-2 rounded-lg border">
            Cancel
          </button> */}
        </div>
      </form>
    </div>
  );
}
