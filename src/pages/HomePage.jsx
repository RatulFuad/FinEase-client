import React, { useEffect, useState } from "react";
import banner from "../assets/banner.jpg"
import sec1 from "../assets/sec1.jpg"
import sec2 from "../assets/sec2.jpg"

const HomePage =() =>{
  const [transactions, setTransactions] =useState([])
const [totalIncome, setTotalIncome]= useState(0)
  const [totalExpenses, setTotalExpenses]= useState(0)
  const [totalBalance, setTotalBalance]= useState(0)

  
  useEffect(()=>{
    fetch("https://finease-server-phi.vercel.app/FinEase")
      .then((res)=> res.json())
      .then((data) =>{
    setTransactions(data)

      
        const income =data
          .filter((item)=> item.type === "Income")
          .reduce((sum, item)=> sum + Number(item.amount), 0)

        const expenses = data
          .filter((item)=> item.type === "Expense")
          .reduce((sum, item)=> sum + Number(item.amount), 0);


        setTotalIncome(income)
        setTotalExpenses(expenses)
        setTotalBalance(income - expenses)
      })
      .catch((err) => console.error("Error loading data:", err))
  }, []);

  return (
    <div className="font-sans p-5">
      <section className="relative">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-[400px] rounded-2xl mb-5 object-cover"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-black  rounded-2xl">
          <h1 className="text-4xl font-bold mb-2 text-center">
            Manage Your Finances Smartly
          </h1>
          <p className="text-lg text-center">
            Track your income, expenses, and savings easily all in one place
          </p>
        </div>
      </section>

      <section className="flex justify-around mb-8">
        <div className="bg-[#e0f7fa] p-5 rounded-lg w-1/4 text-center font-bold text-xl shadow-md">
          <h2>Total Balance</h2>
          <p className="text-3xl font-extrabold text-gray-800">
            {totalBalance}
          </p>
        </div>
        <div className="bg-[#e8f5e9] p-5 rounded-lg w-1/4 text-center font-bold text-xl shadow-md">
          <h2>Total Income</h2>
          <p className="text-3xl font-extrabold text-green-700">
            {totalIncome}
          </p>
        </div>
        <div className="bg-[#ffebee] p-5 rounded-lg w-1/4 text-center font-bold text-xl shadow-md">
          <h2>Total Expenses</h2>
          <p className="text-3xl font-extrabold text-red-700">
            {totalExpenses}
          </p>
        </div>
      </section>

    

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 px-4 lg:px-12">
        
        <section className="relative group overflow-hidden rounded-2xl shadow-lg">
          <img src={sec1} alt="Financial Tips" className="w-full h-[300px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105" />

  
          <div className="absolute inset-0 bg-black/20   flex flex-col justify-center items-center rounded-2xl p-6">
            <ul className="text-white text-lg md:text-xl font-semibold space-y-3 text-center leading-relaxed">
              <li>💰 Track your monthly expenses carefully</li>
              <li>🎯 Set realistic financial goals for savings</li>
              <li>📊 Review your spending habits regularly</li>
            </ul>
          </div>
        </section>

      
        <section className="relative group overflow-hidden rounded-2xl shadow-lg">
          <img src={sec2} alt="Financial Planning" className="w-full h-[300px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105" />

         
        <div className="absolute inset-0 flex flex-col justify-center items-center rounded-2xl p-6">
            <p className="text-white text-lg md:text-xl font-semibold text-center leading-relaxed">
              Financial planning helps you prepare for the future,
              <br />
              reduce money stress, and ensure that you can
              <br />
              achieve your life goals efficiently.
              <br />
              <span className="text-yellow-300 font-bold">
                Start planning today for a secure tomorrow!
              </span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;











