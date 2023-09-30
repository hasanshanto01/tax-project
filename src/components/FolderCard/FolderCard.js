import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";

const FolderCard = ({ folderItem }) => {
  const { title } = folderItem;

  return (
    <div className="border borde-base-100 p-2 flex flex-col items-center text-center">
      <FontAwesomeIcon icon={faFolder} className="w-16 h-16 text-success" />
      <h2 className="font-semibold">{title}</h2>
    </div>
  );
};

export default FolderCard;
