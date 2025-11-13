import React, { use } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../provider/AuthProvider';
import { CgProfile } from "react-icons/cg";
import { toast } from 'react-toastify';
import logo from "../assets/logologo.png"

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut=()=>{
    console.log("logout")
    logOut().then(() => {
    toast.success("Successfully logged out!");
    }).catch((error) => {
      console.log(error)
    });
  }
    return (
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>

            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/addTransaction">Add Transaction</Link>
              </li>
              <li>
                <Link to="/myTransaction">My Transactions</Link>
              </li>
              <li>
                <Link to="/reports">Reports</Link>
              </li>
            </ul>
          </div>
          {/* <FaMoneyCheckDollar /> */}
          <img src={logo} alt="" className="w-15" />
          <a className="btn btn-ghost text-xl">FinEase</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/addTransaction">Add Transaction</Link>
            </li>

            <li>
              <Link to="/myTransaction">My Transactions</Link>
            </li>
            <li>
              <Link to="/reports">Reports</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-2">
              <div>
                <Link to="/profile">
                  <img
                    src={user.photoURL || "https://via.placeholder.com/40"}
                    alt="profile"
                    className="w-10 h-10 rounded-full border-2 border-gray-300 object-cover cursor-pointer"
                    title={user.displayName || "Profile"}
                  />
                </Link>
              </div>

              <div>
                <button
                  onClick={handleLogOut}
                  to=""
                  className="btn btn-neutral"
                >
                  LogOut
                </button>
              </div>
            </div>
          ) : (
            <div>
              <Link to="/Login" className="btn  btn-neutral">
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    );
};

export default Navbar;





