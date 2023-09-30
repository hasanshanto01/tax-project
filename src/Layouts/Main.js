import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import SideBar from "../Shared/SideBar/SideBar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex">
        <SideBar></SideBar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
