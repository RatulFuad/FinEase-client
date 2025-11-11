import React, { use, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
  import { toast } from "react-toastify";

const Login = () => {
  const [error, setError] = useState("")

   const {signInWithGoogle} = use(AuthContext)
   const location = useLocation();
   const navigate = useNavigate()
   console.log(location)
  
    const handleGoogleSignIn = ()=>{
      signInWithGoogle()
      .then(result => {
        console.log(result);
        navigate(`${location.state ? location.state : "/"}`);

        toast.success("Successfully logged In!");
      })
      .catch(error => {
        console.log(error)
      })
  
    }


  const {signIn} = use(AuthContext)
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({email, password});
    signIn(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user)
      navigate(`${location.state ? location.state : "/"}`)
      toast.success("Successfully logged In!");
      
    })
    .catch((error)=> {
      const errorCode = error.code;
      setError(errorCode)
      console.log(error)
    })
  }
    return (
      <div>
        <div className="flex justify-center items-center mt-20">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h2 className="text-5xl font-bold text-center">Login Now</h2>
            <form onSubmit={handleLogin} className="card-body">
              <fieldset className="fieldset">
                {/* email */}
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                  required
                />
                {/* password */}
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                  required
                />

               {
                error && <p className='text-red-500 text-xs'>{error}</p>
               }

                
                <button   onClick={handleGoogleSignIn} className="btn btn-primary mt-5">
                  {" "}
                  Continue With Google
                </button>
                <button type="submit" className="btn btn-neutral mt-4">
                  Login
                </button>
              </fieldset>
              <p className="text-center font-bold">
                Don`t Have an account ?{" "}
                <NavLink to="/register" className={"text-secondary"}>
                  Register
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;