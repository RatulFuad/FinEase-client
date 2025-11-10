import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
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
    createUser(email, password)
    .then((result) =>{
      const user = result.user;
      // console.log(user)
      setUser(user);
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

                <button className="btn btn-primary mt-5">
                  {" "}
                  Continue With Google
                </button>
                <button type="submit" className="btn btn-neutral mt-4">
                  Register
                </button>
              </fieldset>
              <p className="text-center font-bold">
                Already Have an account ?{" "}
                <NavLink to="/login" className={"text-secondary"}>
                  Login
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;