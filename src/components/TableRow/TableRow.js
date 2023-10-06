import React from "react";
import "./TableRow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const TableRow = ({
  categoryItem,
  rowNum,
  handleEditBtn,
  handleDeleteBtn,
  slabItem,
}) => {
  return (
    <tr>
      {categoryItem && (
        <>
          <td>{rowNum}</td>
          <td className="hover:underline">
            {/* <Link to={`/admin/categorySetup/${id}`} className="hover:underline">
            {description}
          </Link> */}
            {categoryItem?.description}
          </td>
          <td>{categoryItem?.sequence}</td>
        </>
      )}
      {slabItem && (
        <>
          <td>{rowNum}</td>
          <td className="hover:underline">{slabItem?.select_one}</td>
        </>
      )}
    </tr>
  );
};

export default TableRow;
