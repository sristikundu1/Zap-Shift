import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import NavLogo from "./NavLogo";
import { Link, NavLink } from "react-router";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOutUser } = useAuth();
  const Links = (
    <>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          `px-3 py-2 ${
            isActive
              ? "bg-primary text-secondary font-bold rounded-4xl"
              : "text-base-200"
          }`
        }
      >
        Services
      </NavLink>

      <NavLink
        to="/coverage"
        className={({ isActive }) =>
          `px-3 py-2 ${
            isActive
              ? "bg-primary text-secondary font-bold rounded-4xl"
              : "text-base-200"
          }`
        }
      >
        Coverage
      </NavLink>
      <NavLink
        to="/send-parcel"
        className={({ isActive }) =>
          `px-3 py-2 ${
            isActive
              ? "bg-primary text-secondary font-bold rounded-4xl"
              : "text-base-200"
          }`
        }
      >
        Send Parcel
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `px-3 py-2 ${
            isActive
              ? "bg-primary text-secondary font-bold rounded-4xl"
              : "text-base-200"
          }`
        }
      >
        About Us
      </NavLink>
      <NavLink
        to="/pricing"
        className={({ isActive }) =>
          `px-3 py-2 ${
            isActive
              ? "bg-primary text-secondary font-bold rounded-4xl"
              : "text-base-200"
          }`
        }
      >
        Pricing
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) =>
          `px-3 py-2 ${
            isActive
              ? "bg-primary text-secondary font-bold rounded-4xl"
              : "text-base-200"
          }`
        }
      >
        Blog
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `px-3 py-2 ${
            isActive
              ? "bg-primary text-secondary font-bold rounded-4xl"
              : "text-base-200"
          }`
        }
      >
        Contact
      </NavLink>
    </>
  );

  // logout function
  const handleLogOut = () => {
    logOutUser()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="max-w-11/12 mx-auto  my-3 ">
      <div className="navbar bg-white shadow-sm rounded-lg px-6">
        {/* Left */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>

          <NavLogo />
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{Links}</ul>
        </div>

        {/* Right */}
        <div className="navbar-end flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-3">
              <button
                onClick={handleLogOut}
                className="btn bg-white border rounded-lg border-base-200"
              >
                Sign Out
              </button>
              <Link to={"/rider"}>
                <div className="flex">
                  <button className="btn bg-primary text-base-200 rounded-lg font-semibold">
                    Be a rider
                  </button>
                  <GoArrowUpRight className="bg-base-200 rounded-full p-2 text-4xl text-white" />
                </div>
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <button className="btn bg-white border rounded-lg border-base-200">
                Sign In
              </button>

              <Link to={"/rider"}>
                <div className="flex">
                  <button className="btn bg-primary text-base-200 rounded-lg font-semibold">
                    Be a rider
                  </button>
                  <GoArrowUpRight className="bg-base-200 rounded-full p-2 text-4xl text-white" />
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
