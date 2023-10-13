import React from "react";
import "./TableRow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const TableRow = ({ rowNum, categoryItem, slabItem }) => {
  // console.log(categoryItem.category_name);
  // console.log(slabItem);

  return (
    <tr>
      {categoryItem && (
        <>
          <td>{rowNum}</td>
          <td>{categoryItem?.description}</td>
          <td>{categoryItem?.sequence}</td>
          <td>
            <Link
              to={`/categorySetup/${categoryItem?.category_name}/${categoryItem?.description}/`}
              className="btn btn-xs btn-outline btn-primary"
            >
              View
            </Link>
          </td>
        </>
      )}
      {slabItem && (
        <>
          <td>{rowNum}</td>
          <td>{slabItem?.select_one}</td>
          <td>
            <Link
              to={`/slabs/${slabItem?.id}/`}
              className="btn btn-xs btn-outline btn-primary"
            >
              View
            </Link>
          </td>
        </>
      )}
    </tr>
  );
};

export default TableRow;
