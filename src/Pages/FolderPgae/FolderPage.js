import React from "react";
import FolderCard from "../../components/FolderCard/FolderCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";

const FolderPage = () => {
  const folderItems = [
    {
      name: "Bank Statement",
    },
    {
      name: "Salary Certificate",
    },
    {
      name: "Investment documents",
    },
    {
      name: "Advance tax/TDS ",
    },
    {
      name: "documents",
    },
    {
      name: "Previous year return",
    },
    {
      name: "New Asset/Loan documents",
    },
    {
      name: "Expenses Documents",
    },
    {
      name: "e-TIN",
    },
    {
      name: "Other documents",
    },
  ];

  return (
    <div className="my-6 px-5 py-3 bg-gray-50 rounded-md">
      <button className="btn btn-outline btn-success">
        <FontAwesomeIcon icon={faFolderPlus} className="w-8 h-8" />
        New Folder
      </button>
      <hr className="my-5" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {folderItems.map((folderItem, i) => (
          <FolderCard key={i} folderItem={folderItem}></FolderCard>
        ))}
      </div>
    </div>
  );
};

export default FolderPage;
