import React from "react";

<<<<<<< HEAD
const BusinessFormInput = ({
  item,
  register,
  dependOnFields,
  setDependOnFields,
}) => {
  const { labelName, registerName, value, requiredStatus } = item;
  // console.log("bfi:", value);
=======
const BusinessFormInput = ({ item, register, handleOnchange }) => {
  const { labelName, registerName, value, requiredStatus, calculativeField } =
    item;
  console.log("bfi:", value);
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
  return (
    <div className="w-full my-2 mr-2 flex items-center">
      <label className="w-3/5 p-[6px]">
        {labelName}
        {requiredStatus && <span className="text-red-500">*</span>}
      </label>

      {/* [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none  */}

<<<<<<< HEAD
      {!dependOnFields && (
=======
      {calculativeField && !handleOnchange && (
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
        <input
          type="number"
          value={value}
          // defaultValue={0}
          min={0}
<<<<<<< HEAD
=======
          // value={value}
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
          className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
          {...register(`${registerName}`, {
            required: requiredStatus,
            valueAsNumber: true,
          })}
        />
      )}
<<<<<<< HEAD
      {dependOnFields && (
        <input
          type="number"
=======
      {!calculativeField && handleOnchange && (
        <input
          type="number"
          // defaultValue={value ? value : 0}
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
          defaultValue={0}
          min={0}
          className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
          {...register(`${registerName}`, {
            required: requiredStatus,
            valueAsNumber: true,
          })}
<<<<<<< HEAD
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
=======
          onChange={handleOnchange}
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
        />
      )}
    </div>
  );
};

export default BusinessFormInput;
