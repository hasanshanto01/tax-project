import React, { useEffect, useState } from "react";
import CategorySetUp from "../CategorySetUp/CategorySetUp";
import SlabsSetUp from "../SlabsSetup/SlabsSetUp";
import QueryMenu from "../../../Shared/QueryMenu/QueryMenu";

const AdminPage = () => {
  const activeClass =
    "inline-block w-[150px] p-2 my-1 rounded-md font-semibold text-center  bg-primary text-secondary";
  const inActiveClass =
    "inline-block w-[150px] p-2 my-1 rounded-md font-semibold text-center border border-primary";

  const [categorySetupList, setCategorySetupList] = useState([]);
  // id, active, aggregated, category_name, description, required, sequence, tax_exempted

  const [slabList, setSlabList] = useState([]);
  // id, active, aggregated, category_name, description, required, sequence, tax_exempted

  const menuList = [
    {
      id: 1,
      title: "Salary Government",
      path: "/dashboard/form/1",
    },
    {
      id: 2,
      title: "Salary Private",
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
      title: "Business",
      path: "/dashboard/businessForm",
    },
    {
      id: 6,
      title: "Expense",
      path: "/dashboard/form/6",
    },
    {
      id: 7,
      title: "Rebate",
      path: "/dashboard/form/7",
    },
  ];

  const handleCategorySetupList = (categoryName) => {
    console.log(categoryName);
    fetch(`http://127.0.0.1:8000/api/v1/category-setup-list/${categoryName}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategorySetupList(data);
      })
      .catch((err) => console.log(err));
  };

  // const handleSlabs = (data) => {
  //   console.log(data);
  // };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/v1/slab-list/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("slabs", data);
        setSlabList(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full lg:w-[82%] mx-[14px] lg:mx-8 my-5">
      <QueryMenu handleCategorySetupList={handleCategorySetupList}></QueryMenu>

      <CategorySetUp categorySetupList={categorySetupList}></CategorySetUp>
      <SlabsSetUp slabList={slabList}></SlabsSetUp>
    </div>
  );
};

export default AdminPage;
