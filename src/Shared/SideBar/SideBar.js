import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className=" w-[18%] h-screen pt-6 bg-gray-50">
      <ul className="mx-10">
        <li className="">
          <NavLink
            to="/"
            className="inline-block w-[190px] font-semibold border border-success p-2 rounded-md sidebar "
          >
            Dashboard
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/personalInfo"
            className="inline-block w-[190px] font-semibold border border-success my-1 p-2 rounded-md sidebar "
          >
            Personal info
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
