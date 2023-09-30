import React from "react";
import { NavLink } from "react-router-dom";
import ModalCard from "../ModalCard/ModalCard";

const LinkItem = ({ menu }) => {
  const activeClass =
    "inline-block w-[150px] p-2 my-1 rounded-md font-semibold text-center  bg-success text-gray-200 ";
  const inActiveClass =
    "inline-block w-[150px] p-2 my-1 rounded-md font-semibold text-center border border-success linkbar";

  const { title, path, modalId } = menu;

  return (
    <>
      <li>
        {menu.openModal ? (
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive ? activeClass : inActiveClass
            }
            onClick={() => document.getElementById(`${modalId}`).showModal()}
          >
            {title}
          </NavLink>
        ) : (
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive ? activeClass : inActiveClass
            }
          >
            {title}
          </NavLink>
        )}
      </li>
      <ModalCard modalId={modalId}></ModalCard>
    </>
  );
};

export default LinkItem;
