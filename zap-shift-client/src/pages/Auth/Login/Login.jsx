import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Login = () => {
  return (
    <div>
      <h2 className="font-extrabold text-5xl text-left text-black my-2">
        Welcome Back
      </h2>
      <p className=" text-sm text-left text-black">Login with ZapShift</p>

      <form className="fieldset">
        {/* email  */}
        <legend className="fieldset-legend">Email</legend>
        <input type="email" className="input" placeholder="Email" required />

        {/* password  */}
        <legend className="fieldset-legend">Password</legend>
        <input
          type="password"
          className="input"
          placeholder="password"
          required
        />
        {/* forget password  */}
        <div>
          <a className="link link-hover underline text-sm">Forgot password?</a>
        </div>

        <button className="btn bg-primary text-base-200 rounded-lg font-semibold my-2 border-0">
          Login
        </button>
      </form>

      <p>
        Don’t have any account?
        <Link to={"/register"}>
          <span className="text-primary">Register</span>
        </Link>
      </p>

      <p className="text-center my-2">or</p>

      {/* Google */}
      <button className="btn bg-black/10 text-black border-[#e5e5e5] w-full">
        <FcGoogle size={20} />
        Login with Google
      </button>
    </div>
  );
};

export default Login;
