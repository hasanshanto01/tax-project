import React from "react";

const BusinessFormInput = ({ item, register, handleOnchange }) => {
  const { labelName, registerName, value, requiredStatus, calculativeField } =
    item;
  console.log("bfi:", value);
  return (
    <div className="w-full my-2 mr-2 flex items-center">
      <label className="w-3/5 p-[6px]">
        {labelName}
        {requiredStatus && <span className="text-red-500">*</span>}
      </label>

      {/* [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none  */}

      {calculativeField && !handleOnchange && (
        <input
          type="number"
          value={value}
          // defaultValue={0}
          min={0}
          // value={value}
          className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
          {...register(`${registerName}`, {
            required: requiredStatus,
            valueAsNumber: true,
          })}
        />
      )}
      {!calculativeField && handleOnchange && (
        <input
          type="number"
          // defaultValue={value ? value : 0}
          defaultValue={0}
          min={0}
          className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
          {...register(`${registerName}`, {
            required: requiredStatus,
            valueAsNumber: true,
          })}
          onChange={handleOnchange}
        />
      )}
    </div>
  );
};

export default BusinessFormInput;
