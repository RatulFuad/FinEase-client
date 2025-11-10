import React, { use } from 'react';
import logo from "../assets/images.png"
import { Link } from "react-router-dom";
import { AuthContext } from '../provider/AuthProvider';
import { CgProfile } from "react-icons/cg";
import { toast } from 'react-toastify';

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut=()=>{
    console.log("logout")
    logOut().then(() => {
      // alert("logged out")
    toast.success("Successfully logged out!");
    }).catch((error) => {
      console.log(error)
    });
  }
    return (
      
      <div className="navbar bg-base-100 shadow-sm">
        {/* <div>{user && user.email}</div> */}
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
          <img className="w-[50px]" src={logo} alt="" />
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
                <Link>
                  <CgProfile size={25} />
                </Link>
              </div>

              <div>
                <button onClick={handleLogOut} to="" className="btn">
                  LogOut
                </button>
              </div>
            </div>
          ) : (
            <div>
              <Link to="/Login" className="btn">
                Login
              </Link>
            </div>
          )}
          {/* <Link to="/Login" className="btn">
            Login
          </Link> */}
          {/* <Link to="" className="btn">
            LogOut
          </Link> */}
        </div>
        {/* <div>
          <Link>
            <CgProfile size={25} />
          </Link>
        </div> */}
      </div>
    );
};

export default Navbar;





