import React from "react";
import { NavLink } from "react-router-dom";

const LinkItem = ({ menu, handleCategorySetupList }) => {
  const activeClass =
    "inline-block w-[150px] p-2 my-1 rounded-md font-semibold text-center  bg-primary text-secondary";
  const inActiveClass =
    "inline-block w-[150px] p-2 my-1 rounded-md font-semibold text-center border border-primary";

  const { title, path } = menu;
  // console.log(menu);

  return (
    <>
      {/* {!path && (
        <li>
          <NavLink
            to={`/dashboard/form/${title}`}
            className={({ isActive }) =>
              isActive ? activeClass : inActiveClass
            }
          >
            {title}
          </NavLink>
        </li>
      )} */}
      {!handleCategorySetupList && (
        <li>
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive ? activeClass : inActiveClass
            }
          >
            {title}
          </NavLink>
        </li>
      )}
      {handleCategorySetupList && (
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClass : inActiveClass
            }
            onClick={() => handleCategorySetupList(title)}
          >
            {title}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default LinkItem;
