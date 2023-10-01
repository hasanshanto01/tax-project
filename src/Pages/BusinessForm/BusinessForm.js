import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputFieldItem from "../../components/InputFieldItem/InputFieldItem";

const BusinessForm = () => {
  const [businessFormDetails, setBusinessFormDetails] = useState([]);
  // let businessFormDetails = [];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleBusinessInfo = (data) => {
    console.log(data);
  };

  const handleCalculativeInput = (e) => {
    // console.log(e.target);
    // console.log(e.target.name);
    const registerName = e.target.name;
    const value = e.target.value;

    if (registerName === "revenue") {
      const revenue = {
        title: registerName,
        revenueValue: value,
      };
      const updatedBusinessFormDetails = [...businessFormDetails];
      updatedBusinessFormDetails.revenueDetails = revenue;
      setBusinessFormDetails(updatedBusinessFormDetails);

      // const test = {
      //   registerName: "tn",
      //   value: 1,
      // };
      // businessFormDetails.push(1);
      // if
      // setRevenueDetails({
      //   registerName,
      //   value,
      // });
      // setBusinessFormDetails(test);
    }
  };

  console.log("revenueD:", businessFormDetails?.revenueDetails?.title);

  if (businessFormDetails?.revenueDetails?.title === "revenue") {
    // console.log("inside r");
    const revenueDetails = businessFormDetails.revenueDetails;
    const revenueValue = revenueDetails.revenueValue;
    const costOfSalesValue = revenueValue * 0.85;
    const grossProfitValue = revenueValue - costOfSalesValue;
    const administrativeExpenses = revenueValue * 0.05;
    const updatedRevenueDetails = {
      ...revenueDetails,
      costOfSalesValue,
      grossProfitValue,
      administrativeExpenses,
    };
    setBusinessFormDetails(revenueDetails.updatedRevenueDetails);
  }

  console.log("revenueA:", businessFormDetails);

  return (
    <div>
      <h2 className="text-2xl font-semibold">
        Income from business or profession
      </h2>

      {/* business info */}
      <form
        onSubmit={handleSubmit(handleBusinessInfo)}
        className="my-3 p-2 text-sm bg-gray-50"
      >
        <InputFieldItem
          item={{
            labelName: "Name of business",
            registerName: "businessName",
            type: "text",
            requiredStatus: true,
          }}
          register={register}
        ></InputFieldItem>

        <InputFieldItem
          item={{
            labelName: "Type of main business or profession",
            registerName: "businessType",
            type: "text",
            requiredStatus: false,
          }}
          register={register}
        ></InputFieldItem>

        <div className="w-3/4 my-2 flex items-center">
          <label className="w-3/5 p-[6px]">Buseness Address</label>
          <textarea
            className="w-2/5 p-1 border border-success rounded-sm focus:outline-none"
            placeholder="Type here"
            {...register("busenessAddress")}
          ></textarea>
        </div>

        <div className="border border-red-500  my-4">
          <div className="w-3/4 text-gray-200 font-bold flex items-center bg-success">
            <label className="w-3/5 p-[6px]">Income Statement</label>
            <label className="w-2/5 p-[6px]">BDT</label>
          </div>

          <InputFieldItem
            item={{
              labelName: "Revenue",
              registerName: "revenue",
              type: "number",
              requiredStatus: false,
              calculativeStatus: true,
            }}
            register={register}
            handleCalculativeInput={handleCalculativeInput}
          ></InputFieldItem>
          <InputFieldItem
            item={{
              labelName: "Less: Cost of sales",
              registerName: "costOfSales",
              type: "number",
              requiredStatus: false,
            }}
            register={register}
          ></InputFieldItem>
        </div>

        <div className="flex justify-center">
          <button className="btn btn-success my-3 w-[150px]">Submit</button>
        </div>
      </form>
      {/* business info */}
    </div>
  );
};

export default BusinessForm;
