import React, { useEffect, useState } from "react";
import { Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer,
} from "recharts";

const Reports = ()=>{
  const [transactions, setTransactions] = useState([])

  useEffect(()=>{
    fetch("https://finease-server-phi.vercel.app/FinEase")
      .then((res) => res.json())
      .then((data) => setTransactions(data))
      .catch((err) => console.error(err));
  }, [])


  const categorySummary = Object.values(
    transactions.reduce((acc, curr) =>{
      if (!acc[curr.category])
        acc[curr.category] = { category: curr.category, amount: 0 }
      acc[curr.category].amount += curr.amount
      return acc
    }, {})
  );

 
  const monthlySummary = Object.values(
    transactions.reduce((acc, curr)=>{
      const month = new Date(curr.date).toLocaleString("default", {
        month: "short",
      })
      if (!acc[month]) acc[month] = { month, total: 0 }
      acc[month].total += curr.amount;
      return acc
    }, {})
  )

  const COLORS = [ "#0088FE", "#00C49F", "#FFBB28","#FF8042","#AA46BE", "#FF6B6B",];

  return (
    <div className="mt-10 px-6 space-y-10">
      <h2 className="text-3xl font-bold text-center mb-8 "> Financial Summary </h2>

    

      <div className="bg-white shadow-xl rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-4 text-center text-gray-700"> Category (Bar Chart) </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={categorySummary}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="#00C49F" barSize={50} />
          </BarChart>
        </ResponsiveContainer>
      </div>

   
      <div className="bg-white shadow-xl rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-4 text-center text-gray-700">  Monthly Totals
           </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlySummary}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="#8884d8" barSize={50} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Reports;
