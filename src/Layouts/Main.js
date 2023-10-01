import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import SideBar from "../Shared/SideBar/SideBar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex">
        <div className="w-[14%] h-screen pt-5 bg-gray-50 hidden lg:block border border-yellow-300">
          <SideBar></SideBar>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
