import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser, signInWithGoogle } = useAuth();

  let from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // login Function
  const handleLogin = (data) => {
    // console.log(data);
    loginUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // google resister function
  const handleLoginGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2 className="font-extrabold text-5xl text-left text-black my-2">
        Welcome Back
      </h2>
      <p className=" text-sm text-left text-black">Login with ZapShift</p>

      <form onSubmit={handleSubmit(handleLogin)} className="fieldset">
        {/* email  */}
        <legend className="fieldset-legend">Email</legend>
        <input
          type="email"
          className="input"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email?.type === "required" && (
          <span className="text-red-800">This field is required</span>
        )}

        {/* password  */}
        <legend className="fieldset-legend">Password</legend>
        <input
          type="password"
          className="input"
          placeholder="password"
          {...register("password", {
            required: true,
            maxLength: 6,
            pattern:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
          })}
        />
        {errors.password?.type === "required" && (
          <span className="text-red-800">This field is required</span>
        )}
        {errors.password?.type === "minLength" && (
          <span className="text-red-800">
            Password me be more 6 characters or more
          </span>
        )}
        {errors.password?.type === "pattern" && (
          <span className="text-red-800">
            Password must include uppercase, lowercase, number, and special
            character
          </span>
        )}
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
      <button
        onClick={handleLoginGoogle}
        className="btn bg-black/10 text-black border-[#e5e5e5] w-full"
      >
        <FcGoogle size={20} />
        Login with Google
      </button>
    </div>
  );
};

export default Login;
