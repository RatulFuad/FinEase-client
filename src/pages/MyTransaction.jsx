import React from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";

const MyTransaction =() =>{
const { _id } = useParams();
    const data = useLoaderData()
    const model = data.result
    console.log(model)

    const navigate = useNavigate();
  

    


    const handleDelete = (id)=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://finease-server-phi.vercel.app/FinEase/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
               navigate("/myTransaction");
           
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              }).catch((err) => {
                console.log(err);
              })
            })
        }
      })
    };


  return (
    <div className=" mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">My Transaction</h2>
     
      <div className="grid lg:grid-cols-3 gap-3">
        {data.map((model) => (
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 ">
            
  <div className="flex justify-between items-center mb-3">
    <span className={`px-3 py-1 text-sm font-semibold rounded-full ${ model.type?.toLowerCase() === "income" ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700" }`}> {model.type} </span>

     <span className="text-gray-500 text-sm">{model.date}</span>

    </div>

          
     <div className="mb-4">
      <h3 className="text-lg font-semibold">{model.category}</h3>
       <p className="text-2xl font-bold mt-2 text-gray-800"> {model.amount} </p>
      </div>

         
   <div className="flex justify-between">
    <Link to={`/update/${model._id}`} className="bg-green-700 btn  text-white px-4 py-1 rounded-lg text-sm font-semibold" > Update </Link>

    <button onClick={() => handleDelete(model._id)} className="bg-red-500 btn  text-white px-4 py-1 rounded-lg text-sm font-semibold" > Delete 

    </button>
   <Link to={`/TransactionDetails/${model._id}`} className="bg-gray-700 text-white px-4 py-1 rounded-lg text-sm font-semibold" > View Details </Link>
  </div>
     </div>
        ))}
      </div>
      
    </div>
  );
};

export default MyTransaction;
