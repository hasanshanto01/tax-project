import React from "react";
import LinkItem from "../../components/LinkItem/LinkItem";

const SideBar = ({ mxValue }) => {
  console.log(mxValue);
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
    <ul className={`mx-${mxValue}`}>
      {menuList.map((menu, i) => (
        <LinkItem key={i} menu={menu}></LinkItem>
      ))}
    </ul>
  );
};

export default SideBar;
