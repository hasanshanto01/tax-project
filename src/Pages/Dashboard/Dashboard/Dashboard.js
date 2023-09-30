import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import FolderCard from "../../../components/FolderCard/FolderCard";

const Dashboard = () => {
  const folderItems = [
    {
      title: "Bank Statement",
    },
    {
      title: "Salary Certificate",
    },
    {
      title: "Investment documents",
    },
    {
      title: "Advance tax/TDS documents",
    },
    {
      title: "Previous year return",
    },
    {
      title: "New Asset/Loan documents",
    },
    {
      title: "Expenses Documents",
    },
    {
      title: "e-TIN",
    },
    {
      title: "Other documents",
    },
  ];

  return (
    <div className="mx-10">
      <div className="my-6 px-5 py-2 flex justify-between rounded-md bg-gray-50">
        <p>
          Tax File: <strong>2022-2023</strong>
        </p>
        <p>
          TaxPayer Name: <strong>Abu Babu</strong>
        </p>
      </div>
      <div className="my-6 px-5 py-3 bg-gray-50 rounded-md">
        <button className="btn btn-outline btn-success">
          <FontAwesomeIcon icon={faFolderPlus} className="w-8 h-8" />
          New Folder
        </button>
        <hr className="my-5" />
        <div className="grid grid-cols-5 gap-5">
          {folderItems.map((folderItem, i) => (
            <FolderCard key={i} folderItem={folderItem}></FolderCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
