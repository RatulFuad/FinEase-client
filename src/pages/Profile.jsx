import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Profile = ()=>{
  const { user } = useContext(AuthContext)
  const [isDark, setIsDark] = useState(false)
  
  useEffect(() =>{
    const currentTheme = localStorage.getItem("theme") || "light";
    document.querySelector("html").setAttribute("data-theme", currentTheme)
    setIsDark(currentTheme === "dark")
  }, []);


  const handleTheme = (checked) =>{
    const html = document.querySelector("html")
    const newTheme = checked ? "dark" : "light";
    html.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
    setIsDark(checked)
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="card w-96 bg-base-100 shadow-xl p-6 text-center">
        <img
          src={user?.photoURL || "https://via.placeholder.com/100"}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-gray-300"
        />

        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          {user?.displayName || "No Name"}{" "}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{user?.email}</p>

        <label className="flex justify-center items-center gap-2 mt-4">
          <input
            type="checkbox"
            className="toggle"
            checked={isDark}
            onChange={(e) => handleTheme(e.target.checked)}
          />
        </label>

        <button className="btn bg-green-700 text-white mt-4">Update Profile</button>
      </div>
    </div>
  );
};

export default Profile;
