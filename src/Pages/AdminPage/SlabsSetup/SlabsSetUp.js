import React from "react";
import { useNavigate } from "react-router-dom";

const SlabsSetUp = () => {
  const navigate = useNavigate();

  const handleSlabsNewBtn = () => {
    navigate("/slabs");
  };

  return (
    <div className="my-10">
      <div className="flex  justify-between">
        <h2 className="text-xl font-semibold">Slabs</h2>
        <button
          className="btn btn-sm btn-success text-gray-200 rounded-md"
          onClick={handleSlabsNewBtn}
        >
          New
        </button>
      </div>
    </div>
  );
};

export default SlabsSetUp;
