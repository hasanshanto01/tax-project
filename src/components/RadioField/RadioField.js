import React from "react";

const RadioField = ({ item, register }) => {
  const { lableName, registerName, value, isChecked } = item;

  return (
    <div className="flex items-center">
      <input
        type="radio"
        checked={isChecked}
        value={`${value}`}
        className="radio"
        {...register(`${registerName}`, {
          required: "This field is required",
        })}
      />
      <label className="p-1">{lableName}</label>
    </div>
  );
};

export default RadioField;
