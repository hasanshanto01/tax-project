import React from "react";
import LinkItem from "../../components/LinkItem/LinkItem";

const SideBar = () => {
  const menuList = [
    {
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      title: "Personal info",
      path: "/personalInfo",
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
