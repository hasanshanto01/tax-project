import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SubmitBtn from "../../components/SubmitBtn/SubmitBtn";
import BusinessFormInput from "../../components/BusinessFormInput/BusinessFormInput";
import TextInput from "../../components/TextInput/TextInput";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const BusinessForm = () => {
  const [dependOnFields, setDependOnFields] = useState({
    revenue: 0,
    cost_of_sales: 0,
    administrative_expenses: 0,
    bad_debt_expense: 0,
    property_plant_equipment: 0,
    loan_to_others: 0,
    advances_deposits_receivable: 0,
    closing_balance_inventory: 0,
    bank_balance: 0,
    cash_in_hand: 0,
    opening_balance_capital: 0,
    drawing_during_the_income_year: 0,
    long_term_loan: 0,
    short_term_borrowings: 0,
    liability_for_other: 0,
  });

  const [dependantFields, setDependantFields] = useState({
    gross_profit: 0,
    net_profit: 0,
    total_assets: 0,
    total_equity: 0,
    liabilities: 0,
    total_equity_liabilities: 0,
    differences: 0,
  });

  const { baseURL } = useContext(AuthContext);

  const {
    revenue,
    cost_of_sales,
    administrative_expenses,
    bad_debt_expense,
    property_plant_equipment,
    loan_to_others,
    advances_deposits_receivable,
    closing_balance_inventory,
    bank_balance,
    cash_in_hand,
    opening_balance_capital,
    drawing_during_the_income_year,
    long_term_loan,
    short_term_borrowings,
    liability_for_other,
  } = dependOnFields;

  const {
    gross_profit,
    net_profit,
    total_assets,
    total_equity,
    liabilities,
    total_equity_liabilities,
    differences,
  } = dependantFields;

  const { register, handleSubmit, setValue, reset } = useForm();

  const handleBusinessInfo = (data) => {
    console.log("bform:", data);

    const { business_address, business_name, business_type, ...updatedData } =
      data;

    const businessFormData = {
      category_name: "Business",
      address: business_address,
      business_name,
      nature: "Other",
      details: updatedData,
    };
    console.log("updated:", businessFormData);

    fetch(`${baseURL}/transaction/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(businessFormData),
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

  useEffect(() => {
    const gross_profit = revenue - cost_of_sales;

    setDependantFields((prevDependantFields) => ({
      ...prevDependantFields,
      gross_profit,
    }));
    setValue("gross_profit", gross_profit);

    const net_profit =
      gross_profit - administrative_expenses - bad_debt_expense;

    setDependantFields((prevDependantFields) => ({
      ...prevDependantFields,
      net_profit,
    }));
    setValue("net_profit", net_profit);

    const total_assets =
      property_plant_equipment +
      loan_to_others +
      advances_deposits_receivable +
      closing_balance_inventory +
      bank_balance +
      cash_in_hand;

    setDependantFields((prevDependantFields) => ({
      ...prevDependantFields,
      total_assets,
    }));
    setValue("total_assets", total_assets);

    const total_equity =
      opening_balance_capital - drawing_during_the_income_year + net_profit;

    setDependantFields((prevDependantFields) => ({
      ...prevDependantFields,
      total_equity,
    }));
    setValue("total_equity", total_equity);

    const liabilities =
      long_term_loan + short_term_borrowings + liability_for_other;

    setDependantFields((prevDependantFields) => ({
      ...prevDependantFields,
      liabilities,
    }));
    setValue("liabilities", liabilities);

    const total_equity_liabilities = total_equity + liabilities;

    setDependantFields((prevDependantFields) => ({
      ...prevDependantFields,
      total_equity_liabilities,
    }));
    setValue("total_equity_liabilities", total_equity_liabilities);

    const differences = total_equity_liabilities - total_assets;

    setDependantFields((prevDependantFields) => ({
      ...prevDependantFields,
      differences,
    }));
    setValue("differences", differences);
  }, [
    revenue,
    cost_of_sales,
    gross_profit,
    administrative_expenses,
    bad_debt_expense,
    property_plant_equipment,
    loan_to_others,
    advances_deposits_receivable,
    closing_balance_inventory,
    bank_balance,
    cash_in_hand,
    opening_balance_capital,
    drawing_during_the_income_year,
    net_profit,
    long_term_loan,
    short_term_borrowings,
    liability_for_other,
    total_equity,
    liabilities,
    total_equity_liabilities,
    total_assets,
  ]);

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
        <TextInput
          item={{
            labelName: "Name of business",
            registerName: "business_name",
            requiredStatus: true,
          }}
          register={register}
        ></TextInput>

        <TextInput
          item={{
            labelName: "Type of main business or profession",
            registerName: "business_type",
          }}
          register={register}
        ></TextInput>

        <div className="w-full lg:w-3/4 my-2 flex items-center">
          <label className="w-3/5 p-[6px]">
            Business Address
            <span className="text-red-500">*</span>
          </label>
          <textarea
            className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
            placeholder="Type here"
            {...register("business_address")}
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
            }}
            register={register}
            dependOnFields={dependOnFields}
            setDependOnFields={setDependOnFields}
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Less: Cost of sales",
              registerName: "cost_of_sales",
            }}
            register={register}
            dependOnFields={dependOnFields}
            setDependOnFields={setDependOnFields}
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Gross profit",
              registerName: "gross_profit",
              value: gross_profit,
            }}
            register={register}
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Administrative expenses",
              registerName: "administrative_expenses",
            }}
            register={register}
            dependOnFields={dependOnFields}
            setDependOnFields={setDependOnFields}
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Bad debt expense",
              registerName: "bad_debt_expense",
            }}
            register={register}
            dependOnFields={dependOnFields}
            setDependOnFields={setDependOnFields}
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Net profit",
              registerName: "net_profit",
              value: net_profit,
            }}
            register={register}
            dependOnFields={dependOnFields}
            setDependOnFields={setDependOnFields}
          ></BusinessFormInput>
        </div>
        <div className="w-full lg:w-3/4 my-4 p-2 border border-primary rounded-sm">
          <div className="w-full text-secondary font-bold flex items-center bg-primary">
            <label className="w-3/5 p-[6px]">Total Assets</label>
            <input
              type="number"
              min={0}
              value={total_assets}
              className="w-2/5 p-1 mr-2 border-0 rounded-sm text-secondary bg-primary focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              {...register("total_assets", {
                valueAsNumber: true,
              })}
            />
          </div>

          <BusinessFormInput
            item={{
              labelName: "Property, Plant and Equipment",
              registerName: "property_plant_equipment",
            }}
            register={register}
            dependOnFields={dependOnFields}
            setDependOnFields={setDependOnFields}
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Loan to Others",
              registerName: "loan_to_others",
            }}
            register={register}
            dependOnFields={dependOnFields}
            setDependOnFields={setDependOnFields}
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Advances, Deposits and Receivable",
              registerName: "advances_deposits_receivable",
            }}
            register={register}
            dependOnFields={dependOnFields}
            setDependOnFields={setDependOnFields}
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Closing balanceInventory",
              registerName: "closing_balance_inventory",
            }}
            register={register}
            dependOnFields={dependOnFields}
            setDependOnFields={setDependOnFields}
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Bank Balance",
              registerName: "bank_balance",
            }}
            register={register}
            dependOnFields={dependOnFields}
            setDependOnFields={setDependOnFields}
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Cash in Hand",
              registerName: "cash_in_hand",
            }}
            register={register}
            dependOnFields={dependOnFields}
            setDependOnFields={setDependOnFields}
          ></BusinessFormInput>
        </div>
        <div className="w-full lg:w-3/4 my-4 p-2 border border-primary rounded-sm">
          <div className="w-full text-secondary font-bold flex items-center bg-primary">
            <label className="w-3/5 p-[6px]">
              Total Equity and Liabilities
            </label>
            <input
              type="number"
              value={total_equity_liabilities}
              min={0}
              className="w-2/5 p-1 mr-2 border-0 rounded-sm text-secondary bg-primary focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              {...register("total_equity_liabilities", {
                valueAsNumber: true,
              })}
            />
          </div>

          <div className="-full my-2 flex items-center font-bold">
            <label className="w-3/5 p-[6px]">Total Equity</label>
            <input
              type="number"
              min={0}
              value={total_equity}
              className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
              {...register("total_equity", {
                valueAsNumber: true,
              })}
            />
          </div>
          <BusinessFormInput
            item={{
              labelName: "Opening balance Capital",
              registerName: "opening_balance_capital",
            }}
            register={register}
            dependOnFields={dependOnFields}
            setDependOnFields={setDependOnFields}
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Drawing during the income year",
              registerName: "drawing_during_the_income_year",
            }}
            register={register}
            dependOnFields={dependOnFields}
            setDependOnFields={setDependOnFields}
          ></BusinessFormInput>
        </div>
        <div className="w-full lg:w-3/4 my-4 p-2 border border-primary rounded-sm">
          <div className="w-full text-secondary font-bold flex items-center bg-primary">
            <label className="w-3/5 p-[6px]">Liabilities</label>
            <input
              type="number"
              value={liabilities}
              min={0}
              className="w-2/5 p-1 mr-2 border-0 rounded-sm text-secondary bg-primary focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              {...register("liabilities", {
                valueAsNumber: true,
              })}
            />
          </div>
          <BusinessFormInput
            item={{
              labelName: "Long term loan",
              registerName: "long_term_loan",
            }}
            register={register}
            dependOnFields={dependOnFields}
            setDependOnFields={setDependOnFields}
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Short-term borrowings",
              registerName: "short_term_borrowings",
            }}
            register={register}
            dependOnFields={dependOnFields}
            setDependOnFields={setDependOnFields}
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Liability for other",
              registerName: "liability_for_other",
            }}
            register={register}
            dependOnFields={dependOnFields}
            setDependOnFields={setDependOnFields}
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Differences",
              registerName: "differences",
              value: differences,
            }}
            register={register}
          ></BusinessFormInput>
        </div>

        <SubmitBtn btnText={"Submit"}></SubmitBtn>
      </form>
      {/* business info */}

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default BusinessForm;
