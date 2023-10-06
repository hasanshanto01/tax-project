import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputFieldItem from "../../../components/InputFieldItem/InputFieldItem";
import CheckBoxField from "../../../components/CheckBoxField/CheckBoxField";
import { useLocation, useNavigate } from "react-router-dom";
import SubmitBtn from "../../../components/SubmitBtn/SubmitBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const CategoryDescription = () => {
  const [btnText, setBtnText] = useState("");

  const navigate = useNavigate();

  const { state } = useLocation();
  const btnType = state;
  console.log(btnType);
  const { register, handleSubmit } = useForm();

  const handleDescriptionDetails = (data) => {
    console.log(data);
  };

  const categoryList = [
    {
      id: 1,
      title: "Salary - Govt.",
      value: "salaryGovt",
    },
    {
      id: 2,
      title: "Salary - Private",
      value: "salaryPrivate",
    },
    {
      id: 3,
      title: "House Income",
      value: "houseIncome",
    },
    {
      id: 4,
      title: "Agriculture",
      value: "agriculture",
    },
    {
      id: 5,
      title: "Business Income",
      value: "businessIncome",
    },
    {
      id: 6,
      title: "Personal Expense",
      value: "personalExpense",
    },
    {
      id: 7,
      title: "Rebate",
      value: "rebate",
    },
  ];

  const handleBackBtn = () => {
    navigate("/admin");
  };

  useEffect(() => {
    if (btnType === "add") {
      setBtnText("Add");
    } else if (btnType === "edit") {
      setBtnText("Update");
    } else if (btnType === "delete") {
      setBtnText("Delete");
    }
  }, [btnType]);

  return (
    <div className="w-full lg:w-[82%] mx-8 my-5">
      <button
        className="btn btn-sm btn-outline btn-primary"
        onClick={handleBackBtn}
      >
        <FontAwesomeIcon icon={faArrowLeftLong} className="w-5 h-5" />
      </button>
      <form
        onSubmit={() => handleSubmit(handleDescriptionDetails)}
        className="my-3 p-2 text-sm bg-secondary rounded-md"
      >
        {/* category */}
        <div className="w-full lg:w-3/4 my-2 flex items-center">
          <label className="w-3/5 p-[6px]">Category</label>
          <select
            className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
            {...register("category_name", { required: true })}
          >
            {/* <option value="resident">Resident</option>
            <option value="nonResident">Non-resident</option> */}
            {categoryList.map((category) => (
              <option key={category.id} value={category.value}>
                {category.title}
              </option>
            ))}
          </select>
        </div>
        {/* category */}

        <div className="w-full lg:w-3/4 my-2 flex items-center">
          <label className="w-3/5 p-[6px]">Description</label>
          <textarea
            className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
            placeholder="Type here"
            {...register("description")}
          ></textarea>
        </div>

        <CheckBoxField
          item={{
            labelName: "Tax Exempted",
            registerName: "tax_exempted",
          }}
          register={register}
        ></CheckBoxField>

        <InputFieldItem
          item={{
            labelName: "Aggregated ",
            registerName: "aggregated ",
            type: "text",
          }}
          register={register}
        ></InputFieldItem>

        <CheckBoxField
          item={{
            labelName: "Active",
            registerName: "active",
          }}
          register={register}
        ></CheckBoxField>

        <InputFieldItem
          item={{
            labelName: "Sequence  ",
            registerName: "sequence  ",
            type: "number",
          }}
          register={register}
        ></InputFieldItem>

        {/* <SubmitBtn btnText={btnText}></SubmitBtn> */}
        {/* {btnType === "add" && (
          <div className="w-full lg:w-3/4 flex justify-end">
            <button className="btn btn-primary text-secondary my-3 w-[150px]">
              Submit
            </button>
          </div>
        )}
        {btnType === "edit" && (
          <div className="w-full lg:w-3/4 flex justify-end">
            <button className="btn btn-primary text-secondary my-3 w-[150px]">
              Edit
            </button>
          </div>
        )}
        {btnType === "delete" && (
          <div className="w-full lg:w-3/4 flex justify-end">
            <button className="btn btn-error text-secondary my-3 w-[150px]">
              Delete
            </button>
          </div>
        )} */}
        <div className="w-full lg:w-3/4 flex justify-end">
          <button className="btn btn-primary text-secondary my-3 w-[150px]">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoryDescription;
