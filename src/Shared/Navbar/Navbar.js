import React, { useState } from "react";
import userImg from "../../Asstes/user.jpg";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SideBar from "../SideBar/SideBar";
import LinkItem from "../../components/LinkItem/LinkItem";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuList = [
    {
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      title: "Personal info",
      path: "/personalInfo",
    },
  ];

  return (
    <div className="navbar bg-gray-50 shadow-md px-10 relative">
      <div className="flex-1">
        <button
          onClick={toggleMenu}
          className="p-1 rounded-md hover:bg-success hover:text-gray-200 block lg:hidden"
        >
          <FontAwesomeIcon icon={faBars} className="w-6 h-4" />
        </button>
        {isOpen && (
          <div className="absolute top-[70px] left-3 w-48 py-2 rounded-md shadow-lg bg-gray-50  flex flex-col items-center lg:hidden">
            <SideBar></SideBar>
          </div>
        )}
        {/* ring-1 ring-black ring-opacity-5 */}
        <Link
          to="/"
          className="btn btn-ghost normal-case text-2xl text-success font-bold"
        >
          Tax House
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
