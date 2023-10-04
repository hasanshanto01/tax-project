import React from "react";

const BusinessFormInput = ({ item, register }) => {
  const { labelName, registerName, type, requiredStatus, defaultValueNone } =
    item;

  return (
    <div className="w-full my-2 pr-2 flex items-center">
      <label className="w-3/5 p-[6px]">
        {labelName}
        {requiredStatus && <span className="text-red-500">*</span>}
      </label>
      {type === "number" && !defaultValueNone && (
        <input
          type={type}
          defaultValue="0"
          min="0"
          className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none "
          {...register(`${registerName}`, {
            required: requiredStatus,
          })}
        />
      )}

      {type === "number" && defaultValueNone && (
        <input
          type={type}
          min="0"
          className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          {...register(`${registerName}`, {
            required: requiredStatus,
          })}
        />
      )}
    </div>
  );
};

export default BusinessFormInput;
