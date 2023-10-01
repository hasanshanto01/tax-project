import React from "react";
import QueryMenu from "../Shared/QueryMenu/QueryMenu";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="w-full lg:w-[82%] mx-8 border border-green-500">
      <QueryMenu></QueryMenu>
      <div className="my-5 px-5 py-2 flex flex-col-reverse md:flex-row md:justify-between rounded-md bg-gray-50">
        <p className="mt-2 md:mt-0">
          Tax File: <strong>2022-2023</strong>
        </p>
        <p>
          TaxPayer Name: <strong>Abu Babu</strong>
        </p>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
