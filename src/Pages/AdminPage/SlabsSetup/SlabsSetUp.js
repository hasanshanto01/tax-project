import React from "react";
import { useNavigate } from "react-router-dom";
import TableRow from "../../../components/TableRow/TableRow";

const SlabsSetUp = ({ slabList }) => {
  const navigate = useNavigate();

  const handleSlabsNewBtn = () => {
    navigate("/slabs");
  };

  return (
    <div className="my-10">
      <div className="flex  justify-between">
        <h2 className="text-xl font-semibold">Slabs</h2>
        <button
          className="btn btn-sm btn-primary text-secondary rounded-md"
          onClick={handleSlabsNewBtn}
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
              <th>Slabs</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {slabList?.map((slabItem, i) => (
              <TableRow key={i} slabItem={slabItem} rowNum={i + 1}></TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SlabsSetUp;
