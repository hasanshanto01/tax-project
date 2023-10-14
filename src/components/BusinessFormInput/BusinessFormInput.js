import React from "react";

const BusinessFormInput = ({
  item,
  register,
  dependOnFields,
  setDependOnFields,
}) => {
  const { labelName, registerName, value, requiredStatus } = item;
  // console.log("bfi:", value);
  return (
    <div className="w-full my-2 mr-2 flex items-center">
      <label className="w-3/5 p-[6px]">
        {labelName}
        {requiredStatus && <span className="text-red-500">*</span>}
      </label>

      {/* [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none  */}

      {!dependOnFields && (
        <input
          type="number"
          value={value}
          // defaultValue={0}
          min={0}
          className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
          {...register(`${registerName}`, {
            required: requiredStatus,
            valueAsNumber: true,
          })}
        />
      )}
      {dependOnFields && (
        <input
          type="number"
          defaultValue={0}
          min={0}
          className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
          {...register(`${registerName}`, {
            required: requiredStatus,
            valueAsNumber: true,
          })}
          onChange={(e) => {
            e.preventDefault();
            const fieldName = e.target.name;
            const value = parseInt(e.target.value);

            setDependOnFields((prevDependOnFields) => ({
              ...prevDependOnFields,
              [fieldName]: value,
            }));
            console.log("dOn:", dependOnFields);
          }}
        />
      )}
    </div>
  );
};

export default BusinessFormInput;
