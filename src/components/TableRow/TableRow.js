import React from "react";
import "./TableRow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const TableRow = ({
  rowNum,
  categoryItem,
  handleEditBtn,
  handleDeleteBtn,
  slabItem,
  // handleCategorySetupModify,
}) => {
  // console.log(categoryItem.category_name);

  return (
    <tr>
      {categoryItem && (
        <>
          <td>{rowNum}</td>
          <td>
            {/* <Link to={`/admin/categorySetup/${id}`} className="hover:underline">
            {description}
          </Link> */}
            {categoryItem?.description}
          </td>
          <td>{categoryItem?.sequence}</td>
          <td>
            <Link
              to={`/categorySetup/${categoryItem?.category_name}/${categoryItem?.description}/`}
              className="btn btn-xs btn-outline btn-primary"
            >
              View
            </Link>
            {/* <button
              className="btn btn-xs btn-outline btn-primary"
              onClick={() =>
                handleCategorySetupModify(
                  categoryItem.category_name,
                  categoryItem.description
                )
              }
            >
              View
            </button> */}
          </td>
        </>
      )}
      {slabItem && (
        <>
          <td>{rowNum}</td>
          <td>{slabItem?.select_one}</td>
        </>
      )}
    </tr>
  );
};

export default TableRow;
