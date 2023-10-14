<<<<<<< HEAD
import React, { useContext, useEffect, useState } from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
import { useForm } from "react-hook-form";
import SubmitBtn from "../../components/SubmitBtn/SubmitBtn";
import BusinessFormInput from "../../components/BusinessFormInput/BusinessFormInput";
import TextInput from "../../components/TextInput/TextInput";
import toast, { Toaster } from "react-hot-toast";
<<<<<<< HEAD
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
=======

const BusinessForm = () => {
  // const [revenue, setRevenue] = useState(0);
  // const [costOfSales, setCostOfSales] = useState(0);
  // // const [grossProfit, setGrossProfit] = useState(revenue - costOfSales);
  // const [grossProfit, setGrossProfit] = useState(0);
  // const [administrativeExpenses, setAdministrativeExpenses] = useState(0);
  // const [badDebtExpense, setBadDebtExpense] = useState(0);
  // const [netProfit, setNetProfit] = useState(0);

  // const [propertyPlantEquipment, setPropertyPlantEquipment] = useState(0);
  // const [loanToOthers, setLoanToOthers] = useState(0);
  // const [advancesDepositsReceivable, setAdvancesDepositsReceivable] =
  //   useState(0);
  // const [closingBalanceInventory, setClosingBalanceInventory] = useState(0);
  // const [bankBalance, setBankBalance] = useState(0);
  // const [cashInHand, setCashInHand] = useState(0);
  // const [totalAssets, setTotalAssets] = useState(0);

  // const [openingBalanceCapital, setOpeningBalanceCapital] = useState(0);
  // const [drawingDuringTheIncomeYear, setDrawingDuringTheIncomeYear] =
  //   useState(0);
  // const [totalEquity, setTotalEquity] = useState(0);

  // const [longTermLoan, setLongTermLoan] = useState(0);
  // const [shortTermBorrowings, setShortTermBorrowings] = useState(0);
  // const [liabilityForOther, setLiabilityForOther] = useState(0);
  // const [liabilities, setLiabilities] = useState(0);

  // const [totalEquityLiabilities, setTotalEquityLiabilities] = useState(0);
  // const [differences, setDifferences] = useState(0);

  // // const [formKey, setFormKey] = useState(0);

  // // console.log(typeof totalAssets);

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

  const { register, handleSubmit, setValue } = useForm();

  // useEffect(() => {
  //   setGrossProfit(revenue - costOfSales);
  //   setValue("gross_profit", grossProfit);
  //   setNetProfit(grossProfit - administrativeExpenses - badDebtExpense);
  //   setValue("net_profit", netProfit);
  //   setTotalAssets(
  //     propertyPlantEquipment +
  //       loanToOthers +
  //       advancesDepositsReceivable +
  //       closingBalanceInventory +
  //       bankBalance +
  //       cashInHand
  //   );
  //   setValue("total_assets", totalAssets);
  //   setTotalEquity(
  //     openingBalanceCapital - drawingDuringTheIncomeYear + netProfit
  //   );
  //   setValue("total_equity", totalEquity);
  //   setLiabilities(longTermLoan + shortTermBorrowings + liabilityForOther);
  //   setValue("liabilities", liabilities);
  //   setTotalEquityLiabilities(totalEquity + liabilities);
  //   setValue("total_equity_liabilities", liabilities);
  //   setDifferences(totalEquityLiabilities - totalAssets);
  //   setValue("differences", differences);
  // }, [
  //   revenue,
  //   grossProfit,
  //   netProfit,
  //   totalAssets,
  //   totalEquity,
  //   liabilities,
  //   totalEquityLiabilities,
  //   differences,
  // ]);

  const handleOnchange = (e) => {
    console.log(e.target.name, typeof e.target.value);
    const fieldName = e.target.name;
    // const value = parseInt(e.target.value);
    const value = e.target.value;

    setDependOnFields({
      ...dependOnFields,
      fieldName: parseInt(value),
    });

    // if (fieldName === "revenue") {
    //   // console.log(typeof value);
    //   const costOfSalesValue = value * 0.85;
    //   const grossProfitValue = value - costOfSalesValue;
    //   const administrativeExpensesValue = value * 0.05;
    //   // console.log(
    //   //   "bf:",
    //   //   costOfSalesValue,
    //   //   grossProfitValue,
    //   //   administrativeExpensesValue
    //   // );
    //   setCostOfSales(costOfSalesValue);
    //   setGrossProfit(grossProfitValue);
    //   setAdministrativeExpenses(administrativeExpensesValue);
    // } else if (fieldName === "badDebtExpense") {
    //   const netProfitValue = grossProfit - administrativeExpenses - value;
    //   setNetProfit(netProfitValue);
    // }

    // Obj.fieldName = value;

    // if (fieldName === "revenue") {
    //   if (value === "") {
    //     setRevenue(0);
    //   } else {
    //     setRevenue(parseInt(value));
    //   }
    // } else if (fieldName === "cost_of_sales") {
    //   if (value === "") {
    //     setCostOfSales(0);
    //   } else {
    //     setCostOfSales(parseInt(value));
    //   }
    // } else if (fieldName === "administrative_expenses") {
    //   if (value === "") {
    //     setAdministrativeExpenses(0);
    //   } else {
    //     setAdministrativeExpenses(parseInt(value));
    //   }
    // } else if (fieldName === "bad_debt_expense") {
    //   if (value === "") {
    //     setBadDebtExpense(0);
    //   } else {
    //     setBadDebtExpense(parseInt(value));
    //   }
    // }

    // if (fieldName === "property_plant_equipment") {
    //   if (value === "") {
    //     setPropertyPlantEquipment(0);
    //   } else {
    //     setPropertyPlantEquipment(parseInt(value));
    //   }
    // } else if (fieldName === "loan_to_others") {
    //   if (value === "") {
    //     setLoanToOthers(0);
    //   } else {
    //     setLoanToOthers(parseInt(value));
    //   }
    // } else if (fieldName === "advances_deposits_receivable") {
    //   if (value === "") {
    //     setAdvancesDepositsReceivable(0);
    //   } else {
    //     setAdvancesDepositsReceivable(parseInt(value));
    //   }
    // } else if (fieldName === "closing_balance_inventory") {
    //   if (value === "") {
    //     setClosingBalanceInventory(0);
    //   } else {
    //     setClosingBalanceInventory(parseInt(value));
    //   }
    // } else if (fieldName === "bank_balance") {
    //   if (value === "") {
    //     setBankBalance(0);
    //   } else {
    //     setBankBalance(parseInt(value));
    //   }
    // } else if (fieldName === "cash_in_hand") {
    //   if (value === "") {
    //     setCashInHand(0);
    //   } else {
    //     setCashInHand(parseInt(value));
    //   }
    // }

    // if (fieldName === "propertyPlant&Equipment") {
    //   console.log(typeof value);
    //   if (value === "") {
    //     console.log("nan");
    //   } else {
    //     setPropertyPlantEquipment(value);
    //     const totalAssetsValue = value;
    //     setTotalAssets(totalAssetsValue);
    //   }
    // } else if (fieldName === "loanToOthers") {
    //   setLoanToOthers(value);
    //   const totalAssetsValue = propertyPlantEquipment + value;
    //   setTotalAssets(totalAssetsValue);
    // } else if (fieldName === "advancesDeposits&Receivable") {
    //   setAdvancesDepositsReceivable(value);
    // } else if (fieldName === "closingBalanceInventory") {
    //   setClosingBalanceInventory(value);
    // } else if (fieldName === "bankBalance") {
    //   setBankBalance(value);
    // } else if (fieldName === "cashInHand") {
    //   setCashInHand(value);
    // }

    // if (fieldName === "opening_balance_capital") {
    //   if (value === "") {
    //     setOpeningBalanceCapital(0);
    //   } else {
    //     setOpeningBalanceCapital(parseInt(value));
    //   }
    // } else if (fieldName === "drawing_during_the_income_year") {
    //   if (value === "") {
    //     setDrawingDuringTheIncomeYear(0);
    //   } else {
    //     setDrawingDuringTheIncomeYear(parseInt(value));
    //   }
    // }

    //   if (fieldName === "long_term_loan") {
    //     if (value === "") {
    //       setLongTermLoan(0);
    //     } else {
    //       setLongTermLoan(parseInt(value));
    //     }
    //   } else if (fieldName === "short_term_borrowings") {
    //     if (value === "") {
    //       setShortTermBorrowings(0);
    //     } else {
    //       setShortTermBorrowings(parseInt(value));
    //     }
    //   } else if (fieldName === "liability_for_other") {
    //     if (value === "") {
    //       setLiabilityForOther(0);
    //     } else {
    //       setLiabilityForOther(parseInt(value));
    //     }
    //   }
  };
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649

  // const grossProfit = revenue - costOfSales;
  // const netProfit = grossProfit - administrativeExpenses - badDebtExpense;

  // const totalAssets =
  //   propertyPlantEquipment +
  //   loanToOthers +
  //   advancesDepositsReceivable +
  //   closingBalanceInventory +
  //   bankBalance +
  //   cashInHand;
  // // console.log(typeof totalAssets);
  // // console.log(netProfit);

  // const totalEquity =
  //   openingBalanceCapital - drawingDuringTheIncomeYear + netProfit;

  // // console.log(longTermLoan);

  // const liabilities = longTermLoan + shortTermBorrowings + liabilityForOther;
  // // console.log(liabilities);

  // const totalEquityLiabilities = totalEquity + liabilities;

  // const differences = totalEquityLiabilities - totalAssets;
  // console.log(differences);

  const handleBusinessInfo = (data) => {
    console.log("bform:", data);

    // setValue("gross_profit", grossProfit);
    // setValue("net_profit", netProfit);
    // setValue("total_assets", totalAssets);
    // setValue("total_equity_liabilities", totalEquityLiabilities);
    // setValue("total_equity", totalEquity);
    // setValue("liabilities", liabilities);
    // setValue("differences", differences);

    // setFormKey((prevKey) => prevKey + 1);

    const { business_address, business_name, business_type, ...updatedData } =
      data;

    const businessFormData = {
      category_name: "Business",
      address: business_address,
      business_name,
      business_type,
      details: updatedData,
    };
    console.log("updated:", businessFormData);
  };

  useEffect(() => {
    // setGrossProfit(revenue - costOfSales);
    // const gross_profit_value = revenue - cost_of_sales;
    setDependantFields({
      ...dependantFields,
      gross_profit: revenue - cost_of_sales,
    });
    // setDependantFields((gross_profit = revenue - cost_of_sales));
    setValue("gross_profit", gross_profit);
    // setNetProfit(grossProfit - administrativeExpenses - badDebtExpense);
    setDependantFields({
      ...dependantFields,
      net_profit: gross_profit - administrative_expenses - bad_debt_expense,
    });
    setValue("net_profit", net_profit);
    // setTotalAssets(
    //   propertyPlantEquipment +
    //     loanToOthers +
    //     advancesDepositsReceivable +
    //     closingBalanceInventory +
    //     bankBalance +
    //     cashInHand
    // );
    setDependantFields({
      ...dependantFields,
      total_assets:
        property_plant_equipment +
        loan_to_others +
        advances_deposits_receivable +
        closing_balance_inventory +
        bank_balance +
        cash_in_hand,
    });
    setValue("total_assets", total_assets);
    // setTotalEquity(
    //   openingBalanceCapital - drawingDuringTheIncomeYear + netProfit
    // );
    setDependantFields({
      ...dependantFields,
      total_equity:
        opening_balance_capital - drawing_during_the_income_year + net_profit,
    });
    setValue("total_equity", total_equity);
    // setLiabilities(longTermLoan + shortTermBorrowings + liabilityForOther);
    setDependantFields({
      ...dependantFields,
      liabilities: long_term_loan + short_term_borrowings + liability_for_other,
    });
    setValue("liabilities", liabilities);
    // setTotalEquityLiabilities(totalEquity + liabilities);
    setDependantFields({
      ...dependantFields,
      total_equity_liabilities: total_equity + liabilities,
    });
    setValue("total_equity_liabilities", total_equity_liabilities);
    // setDifferences(totalEquityLiabilities - totalAssets);
    setDependantFields({
      ...dependantFields,
      differences: total_equity_liabilities - total_assets,
    });
    setValue("differences", differences);
  }, [revenue]);

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
<<<<<<< HEAD
          <label className="w-3/5 p-[6px]">
            Business Address
            <span className="text-red-500">*</span>
          </label>
=======
          <label className="w-3/5 p-[6px]">Business Address</label>
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
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
<<<<<<< HEAD
            dependOnFields={dependOnFields}
            setDependOnFields={setDependOnFields}
=======
            handleOnchange={handleOnchange}
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Gross profit",
              registerName: "gross_profit",
<<<<<<< HEAD
              value: gross_profit,
=======
              // value: grossProfit,
              calculativeField: true,
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
            }}
            register={register}
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Administrative expenses",
              registerName: "administrative_expenses",
            }}
            register={register}
<<<<<<< HEAD
            dependOnFields={dependOnFields}
            setDependOnFields={setDependOnFields}
=======
            handleOnchange={handleOnchange}
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Bad debt expense",
              registerName: "bad_debt_expense",
            }}
            register={register}
<<<<<<< HEAD
            dependOnFields={dependOnFields}
            setDependOnFields={setDependOnFields}
=======
            handleOnchange={handleOnchange}
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Net profit",
              registerName: "net_profit",
<<<<<<< HEAD
              value: net_profit,
=======
              // value: netProfit,
              calculativeField: true,
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
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
<<<<<<< HEAD
              value={total_assets}
=======
              // value={totalAssets}
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
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
<<<<<<< HEAD
            dependOnFields={dependOnFields}
            setDependOnFields={setDependOnFields}
=======
            handleOnchange={handleOnchange}
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Loan to Others",
              registerName: "loan_to_others",
            }}
            register={register}
<<<<<<< HEAD
            dependOnFields={dependOnFields}
            setDependOnFields={setDependOnFields}
=======
            handleOnchange={handleOnchange}
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Advances, Deposits and Receivable",
              registerName: "advances_deposits_receivable",
            }}
            register={register}
<<<<<<< HEAD
            dependOnFields={dependOnFields}
            setDependOnFields={setDependOnFields}
=======
            handleOnchange={handleOnchange}
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Closing balanceInventory",
              registerName: "closing_balance_inventory",
            }}
            register={register}
<<<<<<< HEAD
            dependOnFields={dependOnFields}
            setDependOnFields={setDependOnFields}
=======
            handleOnchange={handleOnchange}
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Bank Balance",
              registerName: "bank_balance",
            }}
            register={register}
<<<<<<< HEAD
            dependOnFields={dependOnFields}
            setDependOnFields={setDependOnFields}
=======
            handleOnchange={handleOnchange}
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Cash in Hand",
              registerName: "cash_in_hand",
            }}
            register={register}
<<<<<<< HEAD
            dependOnFields={dependOnFields}
            setDependOnFields={setDependOnFields}
=======
            handleOnchange={handleOnchange}
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
          ></BusinessFormInput>
        </div>
        <div className="w-full lg:w-3/4 my-4 p-2 border border-primary rounded-sm">
          <div className="w-full text-secondary font-bold flex items-center bg-primary">
            <label className="w-3/5 p-[6px]">
              Total Equity and Liabilities
            </label>
            <input
              type="number"
<<<<<<< HEAD
              value={total_equity_liabilities}
=======
              // value={totalEquityLiabilities}
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
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
<<<<<<< HEAD
              value={total_equity}
=======
              // value={totalEquity}
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
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
<<<<<<< HEAD
            dependOnFields={dependOnFields}
            setDependOnFields={setDependOnFields}
=======
            handleOnchange={handleOnchange}
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Drawing during the income year",
              registerName: "drawing_during_the_income_year",
            }}
            register={register}
<<<<<<< HEAD
            dependOnFields={dependOnFields}
            setDependOnFields={setDependOnFields}
=======
            handleOnchange={handleOnchange}
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
          ></BusinessFormInput>
        </div>
        <div className="w-full lg:w-3/4 my-4 p-2 border border-primary rounded-sm">
          <div className="w-full text-secondary font-bold flex items-center bg-primary">
            <label className="w-3/5 p-[6px]">Liabilities</label>
            <input
              type="number"
<<<<<<< HEAD
              value={liabilities}
=======
              // value={liabilities}
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
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
<<<<<<< HEAD
            }}
            register={register}
            dependOnFields={dependOnFields}
            setDependOnFields={setDependOnFields}
=======
              // value: differences,
            }}
            register={register}
            handleOnchange={handleOnchange}
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Short-term borrowings",
              registerName: "short_term_borrowings",
            }}
            register={register}
<<<<<<< HEAD
            dependOnFields={dependOnFields}
            setDependOnFields={setDependOnFields}
=======
            handleOnchange={handleOnchange}
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Liability for other",
              registerName: "liability_for_other",
            }}
            register={register}
<<<<<<< HEAD
            dependOnFields={dependOnFields}
            setDependOnFields={setDependOnFields}
=======
            handleOnchange={handleOnchange}
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
          ></BusinessFormInput>
          <BusinessFormInput
            item={{
              labelName: "Differences",
              registerName: "differences",
              value: differences,
<<<<<<< HEAD
=======
              calculativeField: true,
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
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
