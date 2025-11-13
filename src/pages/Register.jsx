import React, { use } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
  import { toast } from "react-toastify";

const Register = () =>{

  const {signInWithGoogle} = use(AuthContext)

  const location = useLocation()
     const navigate = useNavigate()
     console.log(location)

  const handleGoogleSignIn = ()=>{
    signInWithGoogle()
    .then(result => {
      console.log(result);
      navigate(`${location.state ? location.state : "/"}`)

      toast.success("Successfully logged In!");
    })
    .catch(error => {
      console.log(error)
    })

  }


  const { createUser, setUser } = use(AuthContext)
  const handleRegister = (e)=>{
    e.preventDefault();
    console.log(e.target)
    const form = e.target
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log({name, email, photo, password})


    if (password.length < 6){
      toast.error("Password must be at least 6 characters long!")
      return
    }

    if (!/[A-Z]/.test(password)){
   toast.error("Password must contain at least one uppercase letter!")
      return
    }

    if (!/[a-z]/.test(password)){
      toast.error("Password must contain at least one lowercase letter!")
      return
    }



    createUser(email, password)
    .then((result) =>{
      const user = result.user;
      // console.log(user)
      setUser(user);
      toast.success("Registration Successful!");
      form.reset();
    })
    .catch((error)=>{
      const errorcode = error.code;
      const errorMessage = error.message;
    });
  }
    return (
      <div>
        <div className="flex justify-center items-center mt-20">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h2 className="text-5xl font-bold text-center">Register Now</h2>
            <form onSubmit={handleRegister} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  name="name"
                  type="name"
                  className="input"
                  placeholder="Your Name"
                  required
                />

                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                  required
                />

                <label className="label">PhotoURL</label>
                <input
                  name="photo"
                  type="text"
                  className="input"
                  placeholder="Your Photo"
                  required
                />

                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                  required
                />

                {/* <button className="btn btn-primary mt-5">
                  {" "}
                  Continue With Google{" "}
                </button> */}
                <button
                  onClick={handleGoogleSignIn}
                  className="btn bg-white text-black border-[#e5e5e5]"
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>

                <button type="submit" className="btn btn-neutral mt-4">
                  
                  Register
                </button>
              </fieldset>
              <p className="text-center font-bold">
                Already Have an account ?{" "}
                <NavLink to="/login" className={"text-primary"}>
                  {" "}
                  Login{" "}
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;