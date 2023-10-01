import React from "react";
import { NavLink } from "react-router-dom";
import LinkItem from "../../components/LinkItem/LinkItem";

const SideBar = () => {
  // const activeClass =
  //   "inline-block w-[190px] p-2 my-1 rounded-md font-semibold  bg-success text-gray-200 ";
  // const inActiveClass =
  //   "inline-block w-[190px] p-2 my-1 rounded-md font-semibold border border-success sidebar";
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
    <ul className="mx-8">
      {menuList.map((menu, i) => (
        <LinkItem key={i} menu={menu}></LinkItem>
      ))}
    </ul>
  );
};

export default SideBar;
