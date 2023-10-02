import React from "react";

const SubmitBtn = ({ btnText }) => {
  return (
    <div className="w-full lg:w-3/4 flex justify-end">
      <button className="btn btn-success my-3 w-[150px]">{btnText}</button>
    </div>
  );
};

export default SubmitBtn;
