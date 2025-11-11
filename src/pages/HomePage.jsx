import React from "react";
import banner from "../assets/banner.jpg"
import sec1 from "../assets/sec1.jpg"
import sec2 from "../assets/sec2.jpg"

const HomePage = () => {
  const totalBalance = 0;
  const totalIncome = 0;
  const totalExpenses = 0;

  return (
    <div className="font-sans p-5">
      {/* <section>
        <img src={banner} alt="" className="w-full h-[400px] rounded-2xl mb-5" />
      </section> */}

      <section className="relative">
        {/* Banner Image */}
        <img
          src={banner}
          alt="Banner"
          className="w-full h-[400px] rounded-2xl mb-5 object-cover"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-black  bg-opacity-30 rounded-2xl">
          <h1 className="text-4xl font-bold mb-2 text-center">
            Manage Your Finances Smartly
          </h1>
          <p className="text-lg text-center">
            Track your income, expenses, and savings easily all in one place
          </p>
        </div>
      </section>

      {/* ওভারভিউ সেকশন */}
      <section className="flex justify-around mb-8">
        <div className="bg-[#e0f7fa] p-5 rounded-lg w-1/4 text-center font-bold text-xl">
          <h2>Total Balance</h2>
          <p className="text-2xl font-bold">{totalBalance}</p>
        </div>
        <div className="bg-[#e8f5e9] p-5 rounded-lg w-1/4 text-center font-bold text-xl">
          <h2>Total Income</h2>
          <p className="text-2xl font-bold">{totalIncome}</p>
        </div>
        <div className="bg-[#ffebee] p-5 rounded-lg w-1/4 text-center font-bold text-xl">
          <h2>Total Expenses</h2>
          <p className="text-2xl font-bold">{totalExpenses}</p>
        </div>
      </section>

      <div className="flex gap-5 ">
        {/* স্ট্যাটিক সেকশন ১ */}
        <section className="relative">
          <img src={sec1} alt="" className="rounded-2xl" />

          <div className="absolute inset-0 flex flex-col justify-center items-center text-black  bg-opacity-30 rounded-2xl">
            <p className="text-2xl text-center font-bold ">
              <li>Track your monthly expenses carefully.</li>
              <li>Set realistic financial goals for savings.</li>
              <li>Review your spending habits regularly.</li>
            </p>
          </div>
        </section>

        {/* স্ট্যাটিক সেকশন ২ */}
        <section className="relative">
          <img src={sec2} alt="" className="rounded-2xl" />

          <div className="absolute inset-0 flex flex-col justify-center items-center text-black  bg-opacity-30 rounded-2xl">
            <p className="text-2xl text-center font-bold ">
              Financial planning helps you prepare for the future, <br /> reduce
              stress related to money, and ensure that you can achieve your life
              goals efficiently. Start planning today for a secure tomorrow.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;











//  <ul>
//    <li>Track your monthly expenses carefully.</li>
//    <li>Set realistic financial goals for savings.</li>
//    <li>Review your spending habits regularly.</li>
//  </ul>;



//  <p>
//    Financial planning helps you prepare for the future, reduce stress related to
//    money, and ensure that you can achieve your life goals efficiently. Start
//    planning today for a secure tomorrow.
//  </p>;