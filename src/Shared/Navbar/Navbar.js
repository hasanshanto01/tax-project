import React from "react";
import userImg from "../../Asstes/user.jpg";
import { Link } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import logo from "../../Asstes/logo.jpg";

const Navbar = () => {
  return (
    <div className="navbar bg-secondary shadow-md px-10">
      <div className="flex-1">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-sm flex lg:hidden">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <div
            tabIndex={0}
            className="dropdown-content mt-3 z-[1] p-2 shadow bg-secondary rounded-box w-52 flex justify-center"
          >
            <SideBar></SideBar>
          </div>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl text-primary font-bold"
        >
          {/* Tax House */}
          <img src={logo} alt="" className="w-8"></img>
          <span>E-Laywers</span>
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src={userImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
