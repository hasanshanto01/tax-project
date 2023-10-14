import React from "react";

const TextInput = ({ item, register }) => {
  const { labelName, registerName, defaultValue, requiredStatus } = item;

  return (
    <div className="w-full lg:w-3/4 my-2 flex items-center">
      <label className="w-3/5 p-[6px]">
        {labelName}
        {requiredStatus && <span className="text-red-500">*</span>}
      </label>
      <input
        type="text"
        placeholder="Type here"
        defaultValue={defaultValue ? defaultValue : ""}
        className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
        {...register(`${registerName}`, {
          required: requiredStatus,
        })}
      />
    </div>
  );
};

export default TextInput;
