import React from "react";
import { Link, Outlet } from "react-router";
import NavLogo from "../components/shared/NavLogo";
import authImg from "../assets/authImage.png";
const AuthLayout = () => {
  return (
    <div className="flex justify-between items-start">
      <div className="flex flex-col flex-1">
        <Link to={"/"}>
          <div className="py-8 px-10">
            <NavLogo></NavLogo>
          </div>
        </Link>
        <div className=" flex items-center justify-center px-40">
          <Outlet></Outlet>
        </div>
      </div>
      <div className="bg-primary/10 h-screen flex items-center justify-center flex-1">
        <img src={authImg} alt="authImg" />
      </div>
    </div>
  );
};

export default AuthLayout;
