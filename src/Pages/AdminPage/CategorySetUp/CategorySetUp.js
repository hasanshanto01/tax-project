import React from "react";
import TableRow from "../../../components/TableRow/TableRow";
import { useNavigate } from "react-router-dom";

const CategorySetUp = () => {
  const navigate = useNavigate();

  const descriptionItems = [
    {
      id: "1",
      description: "Basic pay",
      sequence: 1,
    },
    {
      id: "2",
      description: "Arrear pay (if not included in taxable income earlier)",
      sequence: 2,
    },
    {
      id: "3",
      description: "Special allowance",
      sequence: 3,
    },
    {
      id: "4",
      description: "House rent allowance",
      sequence: 4,
    },
    {
      id: "5",
      description: "Medical allowance",
      sequence: 5,
    },
  ];

  const handleNewBtn = () => {
    navigate("/categorySetup", { state: { btnType: "add" } });
  };
  const handleEditBtn = (id) => {
    console.log(id);
    navigate("/categorySetup", { state: { btnType: "edit" } });
  };
  const handleDeleteBtn = (id) => {
    console.log(id);
    navigate("/categorySetup", { state: { btnType: "delete" } });
  };

  return (
    <div>
      <div className="flex  justify-between">
        <h2 className="text-xl font-semibold">Category Set Up</h2>
        <button
          className="btn btn-sm btn-success text-gray-200 rounded-md"
          onClick={handleNewBtn}
        >
          New
        </button>
      </div>
      <div className="overflow-x-auto bg-gray-50 my-5 p-2">
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
            {descriptionItems.map((item, i) => (
              <TableRow
                key={i}
                item={item}
                rowNum={i + 1}
                handleEditBtn={handleEditBtn}
                handleDeleteBtn={handleDeleteBtn}
              ></TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategorySetUp;