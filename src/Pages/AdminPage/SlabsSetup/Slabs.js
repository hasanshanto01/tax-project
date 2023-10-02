import React from "react";
import { useForm } from "react-hook-form";
import SubmitBtn from "../../../components/SubmitBtn/SubmitBtn";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import InputFieldItem from "../../../components/InputFieldItem/InputFieldItem";

const Slabs = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const handleSlabsDetails = (data) => {
    console.log(data);
  };

  const handleBackBtn = () => {
    navigate("/admin");
  };

  const selectItems = [
    {
      id: 1,
      title: "General – Individuals & Firms",
      value: "General – Individuals & Firms",
    },
    {
      id: 2,
      title: "Women,and senior citizens (65+)",
      value: "Women,and senior citizens (65+)",
    },
    {
      id: 3,
      title: "Third gender",
      value: "Third gender",
    },
    {
      id: 4,
      title: "Physically challenged persons",
      value: "Physically challenged persons",
    },
    {
      id: 5,
      title: "War-wounded gazetted freedom fighters",
      value: "War-wounded gazetted freedom fighters",
    },
  ];

  return (
    <div className="w-full lg:w-[82%] mx-8 my-5">
      <button
        className="btn btn-sm btn-outline btn-success"
        onClick={handleBackBtn}
      >
        <FontAwesomeIcon icon={faArrowLeftLong} className="w-5 h-5" />
      </button>
      <form
        onSubmit={() => handleSubmit(handleSlabsDetails)}
        className="my-3 p-2 text-sm bg-gray-50 rounded-md"
      >
        {/* select one */}
        <div className="w-full lg:w-3/4 my-2 flex items-center">
          <label className="w-3/5 p-[6px]">Select One</label>
          <select
            className="w-2/5 p-1 border border-success rounded-sm focus:outline-none"
            {...register("category_name", { required: true })}
          >
            {/* <option value="resident">Resident</option>
            <option value="nonResident">Non-resident</option> */}
            {selectItems.map((item) => (
              <option key={item.id} value={item.value}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        {/* select one */}

        <InputFieldItem
          item={{
            labelName: "Title ",
            registerName: "title ",
            type: "text",
          }}
          register={register}
        ></InputFieldItem>

        <InputFieldItem
          item={{
            labelName: "Amount  ",
            registerName: "amount  ",
            type: "number",
          }}
          register={register}
        ></InputFieldItem>

        <InputFieldItem
          item={{
            labelName: "Percentage  ",
            registerName: "percentage  ",
            type: "number",
          }}
          register={register}
        ></InputFieldItem>

        <SubmitBtn btnText={"Add"}></SubmitBtn>
      </form>
    </div>
  );
};

export default Slabs;
