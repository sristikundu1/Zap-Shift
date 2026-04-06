import React from "react";
import logo from "../../assets/logo.png";

const NavLogo = () => {
  return (
    <div className="flex items-center gap-0">
      <img src={logo} alt="logo" />
      <h2 className="text-base-200 font-extrabold text-2xl">ZapShift</h2>
    </div>
  );
};

export default NavLogo;
