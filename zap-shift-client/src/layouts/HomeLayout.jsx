import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default HomeLayout;
