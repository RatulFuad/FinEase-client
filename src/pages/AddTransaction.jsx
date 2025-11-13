import React, { use } from "react";
import { AuthContext } from "../provider/AuthProvider"; 
import { toast } from "react-toastify";


const AddTransaction = ()=>{
  const {user} = use(AuthContext) 



  const handleSubmit = (e)=>{
    e.preventDefault()

    const transactionData ={
      
      type: e.target.type.value,
      category: e.target.category.value,
      amount: e.target.amount.value,
      description: e.target.description.value,
      date: e.target.date.value,
      userEmail: user?.email,
      userName: user?.displayName,
    }

    toast.success("Transaction added successfully")

    fetch("https://finease-server-phi.vercel.app/FinEase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transactionData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err)
      })
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        Add New Transaction
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
       
        <div>
          <label className=" font-medium mb-2">Type</label>
          <select
            name="type"
           
            className="w-full border border-gray-300 rounded-lg p-2">
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>

       
    <div>
          <label className=" font-medium mb-2">Category</label>
          <select name="category" className="w-full border border-gray-300 rounded-lg p-2 ">

            <option value="">Select category</option>
            <option value="Salary">Salary</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Bills">Bills</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Shopping">Shopping</option>
            <option value="Other">Other</option>
         </select>
        </div>

        
    <div>
          <label className=" font-medium mb-2">Amount</label>
          <input type="number" name="amount" placeholder="Enter amount" className="w-full border border-gray-300 rounded-lg p-2 " required/>
        </div>

       
        <div>
          <label className=" font-medium mb-2">Description</label>
          <textarea name="description" placeholder="Write a short description..." className="w-full border border-gray-300 rounded-lg p-2 h-24 "/>
     </div>

        
    <div>
          <label className=" font-medium mb-2">Date</label>
          <input type="date"  name="date" className="w-full border border-gray-300 rounded-lg p-2 " required/>
        </div>

       
 <div>
        <label className=" font-medium mb-2">User Email</label>
          <input type="email" value={user?.email || ""} readOnly  className="w-full border border-gray-200 bg-gray-100 rounded-lg p-2 "/>
        </div>

     
    <div>
          <label className=" font-medium mb-2">User Name</label>
          <input type="text" value={user?.displayName || ""} readOnly className="w-full border border-gray-200 bg-gray-100 rounded-lg p-2 "/>
        </div>

      
    <button type="submit" className="w-full btn bg-green-700 text-white font-bold py-2 rounded-lg ">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
