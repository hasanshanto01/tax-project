import React from "react";

const SubmitBtn = ({ btnText }) => {
  return (
    <div className="w-full lg:w-3/4 flex justify-end">
      {btnText.toLowerCase() !== "delete" && (
        <button className="btn btn-primary text-secondary my-3 w-[150px]">
          {btnText}
        </button>
      )}
      {btnText.toLowerCase() === "delete" && (
        <button className="btn btn-error text-secondary my-3 w-[150px]">
          {btnText}
        </button>
      )}
    </div>
  );
};

export default SubmitBtn;
