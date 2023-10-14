import React, { useContext, useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import SubmitBtn from "../../components/SubmitBtn/SubmitBtn";
import { useLoaderData } from "react-router-dom";
import FormInput from "../../components/FormInput/FormInput";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const FormPage = () => {
  const categorySetupData = useLoaderData();
  // console.log(categorySetupData);

  const { baseURL } = useContext(AuthContext);

  const categoryName = categorySetupData[0]?.category_name;
  // console.log(categoryName);

  let newCategorySetupData = categorySetupData.map((element) => {
    const { active, category_name, id, required, sequence, ...rest } = element;
    return rest;
  });

  // console.log("a", newCategorySetupData);

  const { register, handleSubmit, reset } = useForm();

  const handleFormDetails = (data) => {
    // console.log(data);

    const updatedCategorySetupData = newCategorySetupData.map((element, i) => {
      const property = Object.keys(data)[i];
      // console.log("pro", property);
      element.amount = data[property];
      // element.comment = "";
      // console.log("ele", element[property]);
      // console.log("data", data[property]);
      return element;
    });

    // updatedCategorySetupData.forEach((element) => {
    //   console.log(element.amount);
    //   if (element.amount === NaN) {
    //     element.amount = 0;
    //   } else {
    //     element.amount = amount;
    //   }
    // });

    // console.log("f", updatedCategorySetupData);
    const formData = {
      category_name: categoryName,
      // address: "32/e Mayakanon, Shobujhbagh, Dhaka",
      // nature: "Service",
      details: updatedCategorySetupData,
    };
    console.log("formData:", formData);

    fetch(`${baseURL}/transaction/`, {
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
        if (resData.length) {
          toast.success("Your information successfully submited.");
        }
        reset();
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleFormDetails)}
        className="my-3 p-2 text-sm bg-secondary rounded-md"
      >
        {categorySetupData?.map((item) => (
          <FormInput key={item.id} item={item} register={register}></FormInput>
        ))}
        <SubmitBtn btnText={"Submit"}></SubmitBtn>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default FormPage;
