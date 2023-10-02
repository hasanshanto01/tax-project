import React from "react";
import CategorySetUp from "../CategorySetUp/CategorySetUp";
import SlabsSetUp from "../SlabsSetup/SlabsSetUp";

const AdminPage = () => {
  return (
    <div className="w-full lg:w-[82%] mx-8 my-5">
      <CategorySetUp></CategorySetUp>
      <SlabsSetUp></SlabsSetUp>
    </div>
  );
};

export default AdminPage;
