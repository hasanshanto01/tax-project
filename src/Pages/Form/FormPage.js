import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputItem from "../../components/InputItem/InputItem";

const FormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleForm = (data) => {
    console.log(data);
  };

  const InputItems = [
    {
      fieldName: "Basic pay",
    },
    {
      fieldName: "Arrear pay (if not included in taxable income earlier)",
    },
    {
      fieldName: "Special allowance",
    },
    {
      fieldName: "House rent allowance",
    },
    {
      fieldName: "Medical allowance",
    },
    {
      fieldName: "Conveyance allowance",
    },
  ];

  return (
    <div>
      <form onSubmit={handleSubmit(handleForm)} className="my-3">
        {InputItems.map((item, i) => (
          <>
            <InputItem key={i} register={register} item={item}></InputItem>
            {errors.item?.fieldName && <p>{errors.item?.fieldName?.message}</p>}
          </>
        ))}
        <div className="flex justify-center">
          <button className="btn btn-success my-3 w-[150px]">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormPage;
