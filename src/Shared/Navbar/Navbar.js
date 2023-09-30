import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import userImg from "../../Asstes/user.jpg";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-gray-50 shadow-md px-10">
      <div className="flex-1">
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
