import React, { useEffect, useState } from "react";
import TableRow from "../../../components/TableRow/TableRow";
import { useNavigate } from "react-router-dom";

const CategorySetUp = ({ categorySetupList }) => {
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
    // navigate("/categorySetup", { state: { btnType: "add" } });
    navigate("/categorySetup");
  };
  const handleEditBtn = (id) => {
    console.log(id);
    // navigate("/categorySetup", { state: { btnType: "edit" } });
    navigate("/categorySetup");
  };
  const handleDeleteBtn = (id) => {
    console.log(id);
    // navigate("/categorySetup", { state: { btnType: "delete" } });
    navigate("/categorySetup");
  };

  // useEffect(() => {
  //   fetch()
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  console.log(categorySetupList);

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
            {categorySetupList?.map((categoryItem, i) => (
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
