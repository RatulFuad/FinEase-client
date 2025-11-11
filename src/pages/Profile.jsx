// import React from 'react';

// const Profile = () => {
//     return (
//         <div>
//             profile
//         </div>
//     );
// };

// export default Profile;







import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-96 bg-white shadow-xl p-6 text-center">
        <img
          src={user?.photoURL || "https://via.placeholder.com/100"}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-gray-300"
        />
        <h2 className="text-2xl font-bold">{user?.displayName || "No Name"}</h2>
        <p className="text-gray-600 mt-2">{user?.email}</p>
      </div>
    </div>
  );
};

export default Profile;
