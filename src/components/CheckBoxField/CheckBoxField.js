import React from "react";

const CheckBoxField = ({ item, register }) => {
  const { labelName, registerName } = item;

  return (
    <div className="w-full lg:w-[12%] my-2 p-1 flex justify-between items-center">
      <label className="">{labelName}</label>
      <input
        type="checkbox"
        className="ml-5"
        {...register(`${registerName}`)}
      />
    </div>
  );
};

export default CheckBoxField;
