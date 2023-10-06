import React from "react";
import LinkItem from "../../components/LinkItem/LinkItem";

const QueryMenu = ({ handleCategorySetupList }) => {
  const menuList = [
    {
      id: 1,
      title: "Salary Government",
      path: "/dashboard/form/Salary Government",
    },
    {
      id: 2,
      title: "Salary Private",
      path: "/dashboard/form/Salary Private",
    },
    {
      id: 3,
      title: "House Income",
      path: "/dashboard/form2/House Income",
    },
    {
      id: 4,
      title: "Agriculture",
      path: "/dashboard/form2/Agriculture",
    },
    {
      id: 5,
      title: "Business",
      path: "/dashboard/businessForm",
    },
    {
      id: 6,
      title: "Expense",
      path: "/dashboard/form/Expense",
    },
    {
      id: 7,
      title: "Rebate",
      path: "/dashboard/form/Rebate",
    },
  ];

  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 justify-items-center gap-[16px] my-5 overflow-x-auto text-sm">
      {menuList.map((menu) => (
        <LinkItem
          key={menu.id}
          menu={menu}
          handleCategorySetupList={handleCategorySetupList}
        ></LinkItem>
      ))}
    </ul>
  );
};

export default QueryMenu;
