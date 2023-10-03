import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import SideBar from "../Shared/SideBar/SideBar";

const Main = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="flex">
        <div className="w-[14%] pt-5 bg-secondary hidden lg:block">
          <SideBar></SideBar>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
