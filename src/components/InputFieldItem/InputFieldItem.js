import React from "react";

const InputFieldItem = ({ item, register }) => {
  const { labelName, registerName, type, requiredStatus, defaultValueNone } =
    item;
  // console.log(requiredStatus);

  return (
    <div className="w-full lg:w-3/4 my-2 flex items-center">
      <label className="w-3/5 p-[6px]">
        {labelName}
        {requiredStatus && <span className="text-red-500">*</span>}
      </label>

      {type === "text" && type !== "number" && (
        <input
          type={type}
          placeholder="Type here"
          className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
          {...register(`${registerName}`, {
            required: requiredStatus,
          })}
        />
      )}

      {/* [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none  */}

      {type === "number" && !defaultValueNone && (
        <input
          type={type}
          defaultValue="0"
          min="0"
          className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          {...register(`${registerName}`, {
            valueAsNumber: true,
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
            valueAsNumber: true,
            required: requiredStatus,
          })}
        />
      )}
    </div>
  );
};

export default InputFieldItem;
