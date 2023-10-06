import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputFieldItem from "../../components/InputFieldItem/InputFieldItem";
import SubmitBtn from "../../components/SubmitBtn/SubmitBtn";
import BusinessFormInput from "../../components/BusinessFormInput/BusinessFormInput";

const BusinessForm = () => {
  const [businessFormDetails, setBusinessFormDetails] = useState([]);
  // let businessFormDetails = [];

  const { register, handleSubmit } = useForm();

  const handleBusinessInfo = (data) => {
    console.log(data);
  };

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
          }}
          register={register}
        ></InputFieldItem>

        <div className="w-full lg:w-3/4 my-2 flex items-center">
          <label className="w-3/5 p-[6px]">Buseness Address</label>
          <textarea
            className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
            placeholder="Type here"
            {...register("busenessAddress")}
          ></textarea>
        </div>

        <div className="w-full lg:w-3/4 my-4 p-2 border border-primary rounded-sm">
          <div className="w-full text-secondary font-bold flex items-center bg-primary">
            <label className="w-3/5 p-[6px]">Income Statement</label>
            <label className="w-2/5 p-[6px]">BDT</label>
          </div>

          <BusinessFormInput
            item={{
              labelName: "Revenue",
              registerName: "revenue",
              type: "number",
            }}
            register={register}
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Less: Cost of sales",
              registerName: "costOfSales",
              type: "number",
            }}
            register={register}
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Gross profit",
              registerName: "grossProfit",
              type: "number",
            }}
            register={register}
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Administrative expenses",
              registerName: "administrativeExpenses",
              type: "number",
            }}
            register={register}
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Bad debt expense",
              registerName: "badDebtExpense",
              type: "number",
            }}
            register={register}
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Net profit",
              registerName: "netProfit",
              type: "number",
            }}
            register={register}
          ></BusinessFormInput>
        </div>
        <div className="w-full lg:w-3/4 my-4 p-2 border border-primary rounded-sm">
          <div className="w-full text-secondary font-bold flex items-center bg-primary">
            <label className="w-3/5 p-[6px]">Total Assets</label>
            <input
              type="number"
              defaultValue="0"
              min="0"
              className="w-2/5 p-1 mr-2 border-0 rounded-sm text-secondary bg-primary focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              {...register("totalAssets", {
                required: true,
              })}
            />
          </div>

          <BusinessFormInput
            item={{
              labelName: "Property, Plant and Equipment",
              registerName: "propertyPlant&Equipment",
              type: "number",
            }}
            register={register}
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Loan to Others",
              registerName: "loanToOthers",
              type: "number",
            }}
            register={register}
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Advances, Deposits and Receivable",
              registerName: "advancesDeposits&Receivable",
              type: "number",
            }}
            register={register}
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Closing balanceInventory",
              registerName: "closingBalanceInventory",
              type: "number",
            }}
            register={register}
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Bank Balance",
              registerName: "bankBalance",
              type: "number",
            }}
            register={register}
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Cash in Hand",
              registerName: "cashInHand",
              type: "number",
            }}
            register={register}
          ></BusinessFormInput>
        </div>
        <div className="w-full lg:w-3/4 my-4 p-2 border border-primary rounded-sm">
          <div className="w-full text-secondary font-bold flex items-center bg-primary">
            <label className="w-3/5 p-[6px]">
              Total Equity and Liabilities
            </label>
            <input
              type="number"
              defaultValue="0"
              min="0"
              className="w-2/5 p-1 mr-2 border-0 rounded-sm text-secondary bg-primary focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              {...register("totalEquity&Liabilities", {
                required: true,
              })}
            />
          </div>

          <BusinessFormInput
            equity
            and
            liabilitieseldItem
            item={{
              labelName: "Total equity",
              registerName: "totalEquity",
              type: "number",
            }}
            register={register}
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Opening balance Capital",
              registerName: "openingBalanceCapital",
              type: "number",
            }}
            register={register}
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Drawing during the income year",
              registerName: "drawingDuringTheIncomeYear",
              type: "number",
            }}
            register={register}
          ></BusinessFormInput>
        </div>
        <div className="w-full lg:w-3/4 my-4 p-2 border border-primary rounded-sm">
          <div className="w-full text-secondary font-bold flex items-center bg-primary">
            <label className="w-3/5 p-[6px]">Liabilities</label>
            <input
              type="number"
              defaultValue="0"
              min="0"
              className="w-2/5 p-1 mr-2 border-0 rounded-sm text-secondary bg-primary focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              {...register("totalAssets", {
                required: true,
              })}
            />
          </div>

          <BusinessFormInput
            item={{
              labelName: "Long term loan",
              registerName: "longTermLoan",
              type: "number",
            }}
            register={register}
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Short-term borrowings",
              registerName: "shortTermBorrowings",
              type: "number",
            }}
            register={register}
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Liability for other",
              registerName: "liabilityForOther",
              type: "number",
            }}
            register={register}
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Differences",
              registerName: "differences",
              type: "number",
            }}
            register={register}
          ></BusinessFormInput>
        </div>

        <SubmitBtn btnText={"Submit"}></SubmitBtn>
      </form>
      {/* business info */}
    </div>
  );
};

export default BusinessForm;
