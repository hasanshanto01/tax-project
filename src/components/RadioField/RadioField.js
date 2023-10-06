import React from "react";

const RadioField = ({
  item,
  register,
  selectedOption,
  handleRadioOptionChange,
}) => {
  const { lableName, registerName, value } = item;

  // console.log("lg:", typeof value);

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
      <label className="p-1">{lableName}</label>
    </div>
  );
};

export default RadioField;
