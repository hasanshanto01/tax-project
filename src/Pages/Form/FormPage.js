import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import InputFieldItem from "../../components/InputFieldItem/InputFieldItem";
import SubmitBtn from "../../components/SubmitBtn/SubmitBtn";
import { useLoaderData } from "react-router-dom";
import FormInput from "../../components/FormInput/FormInput";
import toast, { Toaster } from "react-hot-toast";

const FormPage = () => {
  // const [categoryName, setCategoryName] = useState("");

  const categorySetupData = useLoaderData();
  // console.log(categorySetupData);

  const categoryName = categorySetupData[0].category_name;

  // console.log(categoryName);

  let newCategorySetupData = categorySetupData.map((element) => {
    const { active, category_name, id, required, sequence, ...rest } = element;
    return rest;
  });

  // console.log("b", newCategorySetupData);

  // newCategorySetupData.forEach((element) => {
  //   element.value = 10;
  // });

  // console.log("a", newCategorySetupData);

  const { register, handleSubmit, formState, reset } = useForm();

  const handleFormDetails = (data) => {
    // console.log(data);
    // const fieldNames = Object.keys(formState.register.fields);
    // const fieldValues = fieldNames.map((fieldName) => data[fieldName]);
    // console.log(fieldNames, fieldValues);
    // const formData = useWatch();
    // console.log(formData);
    // const fieldNames = Object.keys(data);
    // const fieldValues = Object.values(data);

    // console.log("Field Names:", fieldNames);
    // console.log("Field Values:", fieldValues);
    // newCategorySetupData.forEach((element) => {
    //   Object.assign(element, data);
    // });
    const updatedCategorySetupData = newCategorySetupData.map((element, i) => {
      const property = Object.keys(data)[i];
      // console.log("pro", property);
      element.amount = data[property];
      // element.comment = "";
      // console.log("ele", element[property]);
      // console.log("data", data[property]);
      return element;
    });
    // console.log("f", updatedCategorySetupData);
    const formData = {
      category_name: categoryName,
      // address: "32/e Mayakanon, Shobujhbagh, Dhaka",
      // nature: "Service",
      details: updatedCategorySetupData,
    };
    console.log("formData:", formData);

    const test = {
      category_name: "Salary Government",
      nature: "Service",
      address: "32/e Mayakanon, Shobujhbagh, Dhaka",
      details: [
        {
          description: "Basic Pay",
          amount: 250000,
          tax_exempted: true,
          aggregated: "",
          comment: "",
        },
        {
          description: "Arrear Pay (if not included in taxable income earlier)",
          amount: 500,
          tax_exempted: true,
          aggregated: "",
          comment: "",
        },
        {
          description: "Special Allowance",
          amount: 1000,
          tax_exempted: false,
          aggregated: "",
          comment: "",
        },
      ],
    };
    // console.log(test);

    fetch("http://127.0.0.1:8000/api/v1/transaction/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        // if (resData.length) {
        //   toast.success("Your information successfully submited.");
        // }
        reset();
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
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
        className="my-3 p-2 text-sm bg-secondary rounded-md"
      >
        {categorySetupData.map((item, i) => (
          <FormInput key={i} item={item} register={register}></FormInput>
        ))}
        <SubmitBtn btnText={"Submit"}></SubmitBtn>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default FormPage;
