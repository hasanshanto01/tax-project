import React from "react";

const NumberInput = ({ item, register }) => {
  const { labelName, registerName, requiredStatus, defaultValueNone } = item;
  return (
    <div className="w-full lg:w-3/4 my-2 flex items-center">
      <label className="w-3/5 p-[6px]">
        {labelName}
        {requiredStatus && <span className="text-red-500">*</span>}
      </label>

      {/* [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none  */}

      {!defaultValueNone && (
        <input
          type="number"
          defaultValue="0"
          min="0"
          className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none "
          {...register(`${registerName}`, {
            required: requiredStatus,
          })}
        />
      )}

      {defaultValueNone && (
        <input
          type="number"
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

export default NumberInput;
