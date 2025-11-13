import React from "react";
import { useNavigate } from "react-router";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";

export default function Update() {
  const data = useLoaderData()
  const model = data.result
  
   const navigate = useNavigate()
    const handleSubmit = (e)=>{
      e.preventDefault()

   
  
  const transactionData ={
      
     type: e.target.type.value,
      category: e.target.category.value,
       amount: e.target.amount.value,
       description: e.target.description.value,
       date: e.target.date.value,
       }

      

  
      toast.success("Transaction Update successfully")
  
      fetch(`https://finease-server-phi.vercel.app/FinEase/${model._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transactionData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          navigate("/myTransaction")
        })
        .catch((err) => {
          console.log(err);
        })
    };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
   <h2 className="text-2xl text-center font-semibold mb-4"> Update Transaction </h2>

  <form onSubmit={handleSubmit} className="space-y-4">
   <div>
      <label className="block text-sm font-medium mb-1">Type</label>
    <select defaultValue={model.type?.toLowerCase()} name="type" className="w-full border rounded-lg px-3 py-2 border-gray-200" >
        <option value="">Select Type</option>
        <option value="income">Income</option>
         <option value="expense">Expense</option>
       </select>
   </div>

    <div>
     <label className="block text-sm font-medium mb-1">Description</label>
     <textarea name="description" rows={3} defaultValue={model.description} className="w-full border rounded-lg px-3 py-2 resize-y border-gray-200" />
    </div>

   <div>
  <label className="block text-sm font-medium mb-1">Category</label>
     <select defaultValue={model.category?.toLowerCase()} name="category" className="w-full border rounded-lg px-3 py-2 border-gray-200" >

            <option value="">Select Category</option>
            <option value="salary">Salary</option>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="bills">Bills</option>
            <option value="entertainment">Entertainment</option>
            <option value="shopping">Shopping</option>
            <option value="other">Other</option>
      </select>
     </div>

    <div>
       <label className="block text-sm font-medium mb-1">Amount</label>
    <input defaultValue={model.amount} name="amount" inputMode="decimal" className="w-full border rounded-lg px-3 py-2 border-gray-200"/>
  </div>

 <div>
  <label className="block text-sm font-medium mb-1">Date</label>
 <input defaultValue={model.date?.split("T")[0]}  type="date" name="date" className="w-full border rounded-lg px-3 py-2 border-gray-200" />

 </div>

 <div className="flex items-center gap-3 mt-2">
     <button type="submit" className="px-4 py-2 btn rounded-lg bg-green-700 text-white font-medium shadow" > Update Data </button>
        </div>
      </form>
    </div>
  );
}
