import React from "react";
import TableRow from "../../../components/TableRow/TableRow";
import { useNavigate } from "react-router-dom";

const CategorySetUp = ({ categorySetupList }) => {
  const navigate = useNavigate();

  const handleNewBtn = () => {
    navigate("/categorySetup");
  };

  return (
    <div className="">
      <div className="flex  justify-between">
        <h2 className="text-xl font-semibold">Category Set Up</h2>
        <button
          className="btn btn-sm btn-primary text-secondary rounded-md"
          onClick={handleNewBtn}
        >
          New
        </button>
      </div>
      <div className="overflow-x-auto bg-secondary my-5 p-2">
        <table className="w-3/5 table table-zebra">
          {/* head */}
          <thead className="text-base">
            <tr>
              <th></th>
              <th>Description</th>
              <th>Sequence</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {categorySetupList &&
              categorySetupList?.map((categoryItem, i) => (
                <TableRow
                  key={i}
                  categoryItem={categoryItem}
                  rowNum={i + 1}
                ></TableRow>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategorySetUp;
