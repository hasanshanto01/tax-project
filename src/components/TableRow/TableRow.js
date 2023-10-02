import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const TableRow = ({ item, rowNum, handleEditBtn, handleDeleteBtn }) => {
  const { id, description, sequence } = item;

  return (
    <tr>
      <th>{rowNum}</th>
      <td>
        {/* <Link to={`/admin/categorySetup/${id}`} className="hover:underline">
          {description}
        </Link> */}
        {description}
      </td>
      <td>{sequence}</td>
      <td className="flex gap-2">
        <button
          className="btn btn-xs btn-outline btn-success"
          onClick={() => handleEditBtn(id)}
        >
          <FontAwesomeIcon icon={faPenToSquare} className="w-4 h-4" />
        </button>
        <button
          className="btn btn-xs btn-outline btn-error"
          onClick={() => handleDeleteBtn(id)}
        >
          <FontAwesomeIcon icon={faTrash} className="w-4 h-4" />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
