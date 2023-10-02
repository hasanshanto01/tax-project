import React from "react";
import LinkItem from "../../components/LinkItem/LinkItem";

const QueryMenu = () => {
  const menuList = [
    {
      id: 1,
      title: "Salary - Govt.",
      path: "/dashboard/form/1",
    },
    {
      id: 2,
      title: "Salary - Private",
      path: "/dashboard/form/2",
    },
    {
      id: 3,
      title: "House Income",
      path: "/dashboard/form2/3",
    },
    {
      id: 4,
      title: "Agriculture",
      path: "/dashboard/form2/4",
    },
    {
      id: 5,
      title: "Business Income",
      path: "/dashboard/businessForm",
    },
    {
      id: 6,
      title: "Personal Expense",
      path: "/dashboard/form/6",
    },
    {
      id: 7,
      title: "Rebate",
      path: "/dashboard/form/7",
    },
  ];

  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 justify-items-center gap-[16px] my-5 overflow-x-auto">
      {menuList.map((menu) => (
        <LinkItem key={menu.id} menu={menu}></LinkItem>
      ))}
    </ul>
  );
};

export default QueryMenu;
