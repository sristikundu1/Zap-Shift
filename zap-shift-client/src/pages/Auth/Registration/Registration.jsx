import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { useForm } from "react-hook-form";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegister = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h2 className="font-extrabold text-5xl text-left text-black my-2">
        Create an Account
      </h2>
      <p className=" text-sm text-left text-black">Register with ZapShift</p>

      <form onSubmit={handleSubmit(handleRegister)} className="fieldset">
        {/* name  */}
        <legend className="fieldset-legend">Name</legend>
        <input
          type="text"
          className="input"
          {...register("name", { required: true })}
          placeholder="Name"
        />
        {errors.name?.type === "required" && (
          <span className="text-red-800">This field is required</span>
        )}
        {/* email  */}
        <legend className="fieldset-legend">Email</legend>
        <input
          type="email"
          className="input"
          {...register("email", { required: true })}
          placeholder="Email"
        />
        {errors.email?.type === "required" && (
          <span className="text-red-800">This field is required</span>
        )}

        {/* password  */}
        <legend className="fieldset-legend">Password</legend>
        <input
          type="password"
          className="input"
          {...register("password", {
            required: true,
            minLength: 6,
            pattern:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
          })}
          placeholder="password"
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
        Already have an account?
        <Link to={"/login"}>
          <span className="text-primary">Register</span>
        </Link>
      </p>

      <p className="text-center my-2">or</p>

      {/* Google */}
      <button className="btn bg-black/10 text-black border-[#e5e5e5] w-full">
        <FcGoogle size={20} />
        Register with Google
      </button>
    </div>
  );
};

export default Registration;
