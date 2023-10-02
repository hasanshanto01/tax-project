import React from "react";
import { NavLink } from "react-router-dom";

const LinkItem = ({ menu }) => {
  const activeClass =
    "inline-block w-[150px] p-2 my-1 rounded-md font-semibold text-center  bg-primary text-secondary";
  const inActiveClass =
    "inline-block w-[150px] p-2 my-1 rounded-md font-semibold text-center border border-primary";

  const { title, path } = menu;

  return (
    <>
      <li>
        <NavLink
          to={path}
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
        >
          {title}
        </NavLink>
      </li>
    </>
  );
};

export default LinkItem;
