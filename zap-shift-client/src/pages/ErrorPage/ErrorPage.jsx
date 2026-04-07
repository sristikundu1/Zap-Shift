import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="max-w-11/12 mx-auto  my-3 ">
      <div className="bg-white flex flex-col justify-center items-center gap-2 py-20 px-28 rounded-2xl">
        <img
          src="https://i.ibb.co/ZzKH6TZH/18499954-bubble-gum200-89-1.png"
          alt="errorIcon"
        />
        <Link to={"/"}>
          <button className="btn bg-primary text-base-200 rounded-lg font-semibold">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
