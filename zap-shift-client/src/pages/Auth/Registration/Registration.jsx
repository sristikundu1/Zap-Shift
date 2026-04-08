import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import photoUpload from "../../../assets/image-upload-icon.png";
import axios from "axios";

const Registration = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  const { registerUser, signInWithGoogle, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // register function
  const handleRegister = (data) => {
    // console.log(data);
    const profileImage = data.photo[0];
    registerUser(data.email, data.password)
      .then((result) => {
        // console.log(result.user)
        // store the image in form data
        const formData = new FormData();
        formData.append("image", profileImage);

        // send the photo to the store and get the url
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imageHost}`;
        axios.post(image_API_URL, formData).then((res) => {
          console.log(res.data.data.url);
          // update user profile to firebase

          const updateProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };
          updateUserProfile(updateProfile)
            .then(() => {
              console.log("user profile updated");
              navigate(from, { replace: true });
            })
            .catch((error) => {
              console.log(error);
            });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // google register function
  const handleRegisterGoogle = () => {
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
        Create an Account
      </h2>
      <p className=" text-sm text-left text-black mb-6">
        Register with ZapShift
      </p>

      <form onSubmit={handleSubmit(handleRegister)} className="fieldset">
        {/* photo  */}

        <label htmlFor="photo">
          <img
            src={photoUpload}
            alt="photoUpload"
            className="cursor-pointer  object-cover rounded-full "
          />
        </label>
        <input
          id="photo"
          type="file"
          accept="image/*"
          className="hidden"
          {...register("photo", { required: true })}
        />

        {errors.photo?.type === "required" && (
          <span className="text-red-800">This field is required</span>
        )}

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

        <button className="btn bg-primary text-base-200 rounded-lg font-semibold my-2 border-0">
          Register
        </button>
      </form>

      <p>
        Already have an account?
        <Link state={location?.state} to={"/login"}>
          <span className="text-primary">Login</span>
        </Link>
      </p>

      <p className="text-center my-2">or</p>

      {/* Google */}
      <button
        onClick={handleRegisterGoogle}
        className="btn bg-black/10 text-black border-[#e5e5e5] w-full"
      >
        <FcGoogle size={20} />
        Register with Google
      </button>
    </div>
  );
};

export default Registration;
