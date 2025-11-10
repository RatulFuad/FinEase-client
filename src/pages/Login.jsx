import React from 'react';
import { Link, NavLink } from 'react-router';

const Login = () => {
    return (
      <div>
        <div className="flex justify-center items-center mt-20">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h2 className="text-5xl font-bold text-center">Login Now</h2>
            <form  className="card-body">
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

                <div>
                  <Link to="/forget-password" className="link link-hover">
                    Forgot password?
                  </Link>
                </div>
                <button className="btn btn-primary">
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