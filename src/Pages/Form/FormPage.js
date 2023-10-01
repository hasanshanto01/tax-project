import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputFieldItem from "../../components/InputFieldItem/InputFieldItem";
import SubmitBtn from "../../components/SubmitBtn/SubmitBtn";

const FormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormDetails = (data) => {
    console.log(data);
  };

  const InputItems = [
    {
      labelName: "Basic pay",
      registerName: "basicPay",
      type: "number",
      requiredStatus: true,
    },
    {
      labelName: "Arrear pay (if not included in taxable income earlier)",
      registerName: "arrearPay",
      type: "number",
      requiredStatus: false,
    },
    {
      labelName: "Special allowance",
      registerName: "specialAllowance",
      type: "number",
      requiredStatus: false,
    },
    {
      labelName: "House rent allowance",
      registerName: "houseRentAllowance",
      type: "number",
      requiredStatus: false,
    },
    {
      labelName: "Medical allowance",
      registerName: "medicalAllowance",
      type: "number",
      requiredStatus: false,
    },
    {
      labelName: "Conveyance allowance",
      registerName: "conveyanceAllowance",
      type: "number",
      requiredStatus: false,
    },
  ];

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleFormDetails)}
        className="my-3 p-2 text-sm bg-gray-50 rounded-md"
      >
        {InputItems.map((item, i) => (
          <InputFieldItem
            key={i}
            item={item}
            register={register}
          ></InputFieldItem>
        ))}
        <SubmitBtn></SubmitBtn>
      </form>
    </div>
  );
};

export default FormPage;
