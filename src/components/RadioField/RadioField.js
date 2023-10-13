import React from "react";

const RadioField = ({
  item,
  register,
  selectedOption,
  handleRadioOptionChange,
}) => {
  const { labelName, registerName, value } = item;

  return (
    <div className="flex items-center">
      <input
        type="radio"
        value={value}
        className="radio-xs"
        {...register(`${registerName}`, {
          require: true,
        })}
        checked={selectedOption === value}
        onChange={handleRadioOptionChange}
      />
      <label className="p-1">{labelName}</label>
    </div>
  );
};

export default RadioField;
