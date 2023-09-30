import React from "react";

const InputItem = ({ register, item }) => {
  const { fieldName } = item;

  return (
    <div className="flex items-center my-1 p-1 rounded-md bg-gray-50">
      <label className="w-3/5 p-3">{fieldName}</label>
      <input
        type="number"
        defaultValue="0"
        min="0"
        className="w-2/5 input input-bordered bg-gray-50 "
        {...register(`${fieldName}`)}
      />
    </div>
  );
};

export default InputItem;
