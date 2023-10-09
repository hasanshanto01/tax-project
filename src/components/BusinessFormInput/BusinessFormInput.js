import React from "react";

const BusinessFormInput = ({ item, handleOnchange }) => {
  const { labelName, registerName, type, defaultValue, requiredStatus } = item;
  console.log(defaultValue);
  return (
    <div className="w-full my-2 mr-2 flex items-center">
      <label className="w-3/5 p-[6px]">
        {labelName}
        {requiredStatus && <span className="text-red-500">*</span>}
      </label>
      {type === "text" && (
        <input
          type={type}
          placeholder="Type here"
          name={registerName}
          className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
        />
      )}

      {/* [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none  */}

      {type === "number" && !handleOnchange && (
        <input
          type={type}
          defaultValue={defaultValue}
          min={0}
          name={registerName}
          className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
        />
      )}
      {type === "number" && handleOnchange && (
        <input
          type={type}
          defaultValue={defaultValue}
          min={0}
          name={registerName}
          className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
          onChange={handleOnchange}
        />
      )}
    </div>
  );
};

export default BusinessFormInput;
