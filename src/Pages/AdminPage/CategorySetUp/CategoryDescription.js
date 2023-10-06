import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputFieldItem from "../../../components/InputFieldItem/InputFieldItem";
import CheckBoxField from "../../../components/CheckBoxField/CheckBoxField";
import { useLocation, useNavigate } from "react-router-dom";
import SubmitBtn from "../../../components/SubmitBtn/SubmitBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import QueryMenu from "../../../Shared/QueryMenu/QueryMenu";
import toast, { Toaster } from "react-hot-toast";

const CategoryDescription = () => {
  // const [btnText, setBtnText] = useState("");

  const navigate = useNavigate();

  const { state } = useLocation();
  // const { btnType } = state;
  // console.log(btnType);
  const { register, handleSubmit } = useForm();

  const categoryList = [
    {
      id: 1,
      title: "Salary Government",
      value: "Salary Government",
    },
    {
      id: 2,
      title: "Salary Private",
      value: "Salary Private",
    },
    {
      id: 3,
      title: "House Income",
      value: "House Income",
    },
    {
      id: 4,
      title: "Agriculture",
      value: "Agriculture",
    },
    {
      id: 5,
      title: "Business",
      value: "businessIncome",
    },
    {
      id: 6,
      title: "Expense",
      value: "Expense",
    },
    {
      id: 7,
      title: "Rebate",
      value: "Rebate",
    },
  ];

  const handleBackBtn = () => {
    navigate("/admin");
  };

  // useEffect(() => {
  //   if (btnType === "add") {
  //     setBtnText("Add");
  //   } else if (btnType === "edit") {
  //     setBtnText("Update");
  //   } else if (btnType === "delete") {
  //     setBtnText("Delete");
  //   }
  // }, [btnType]);

  const handleDescriptionDetails = (data) => {
    console.log("ctd", data);
    // const updatedSequence = Number(data.sequence);
    // data.sequence = +data.sequence;
    // if (data.sequence == NaN) {
    //   delete data.data.sequence;
    // }

    // if (data.active) {
    //   data.required = true;
    // } else {
    //   data.required = false;
    // }

    console.log("ctdF", data);

    fetch("http://127.0.0.1:8000/api/v1/category-setup-create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((resData) => {
        console.log("res:", resData);
        toast.success("Category Setup created successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full lg:w-[82%] mx-8 my-5">
      <button
        className="btn btn-sm btn-outline btn-primary"
        onClick={handleBackBtn}
      >
        <FontAwesomeIcon icon={faArrowLeftLong} className="w-5 h-5" />
      </button>
      <form
        onSubmit={handleSubmit(handleDescriptionDetails)}
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
            labelName: "Aggregated",
            registerName: "aggregated",
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
            labelName: "Sequence",
            registerName: "sequence",
            type: "number",
          }}
          register={register}
        ></InputFieldItem>

        <CheckBoxField
          item={{
            labelName: "Required",
            registerName: "required",
          }}
          register={register}
        ></CheckBoxField>

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
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default CategoryDescription;
