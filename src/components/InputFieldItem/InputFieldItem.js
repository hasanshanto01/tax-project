import React from "react";

const InputFieldItem = ({ item, register, handleCalculativeInput }) => {
  const { labelName, registerName, type, requiredStatus, calculativeStatus } =
    item;
  //   console.log(requiredStatus);

  return (
    <div className="w-full lg:w-3/4 my-2 flex items-center">
      <label className="w-3/5 p-[6px]">
        {labelName}
        {requiredStatus && <span className="text-red-500">*</span>}
      </label>

      {type === "text" && (
        <input
          type={`${type}`}
          placeholder="Type here"
          className="w-2/5 p-1 border border-success rounded-sm focus:outline-none"
          {...register(`${registerName}`, {
            required: requiredStatus,
          })}
        />
      )}

      {type === "number" && !calculativeStatus && (
        <input
          type={`${type}`}
          defaultValue="0"
          min="0"
          className="w-2/5 p-1 border border-success rounded-sm focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          {...register(`${registerName}`, {
            required: requiredStatus,
          })}
        />
      )}

      {type === "number" && calculativeStatus && (
        <input
          type={`${type}`}
          defaultValue="0"
          min="0"
          className="w-2/5 p-1 border border-success rounded-sm focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          {...register(`${registerName}`, {
            required: requiredStatus,
          })}
          onKeyUp={(e) => handleCalculativeInput(e)}
        />
      )}
    </div>
  );
};

export default InputFieldItem;
