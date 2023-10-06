import React from "react";
import LinkItem from "../../components/LinkItem/LinkItem";

const SideBar = () => {
  const menuList = [
    {
      title: "Personal info",
      path: "/personalInfo",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      title: "Report",
      path: "/report",
    },
    {
      title: "Admin",
      path: "/admin",
    },
  ];

  return (
    <ul className="lg:mx-7">
      {menuList.map((menu, i) => (
        <LinkItem key={i} menu={menu}></LinkItem>
      ))}
    </ul>
  );
};

export default SideBar;
