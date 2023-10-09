import React from "react";
import { useForm } from "react-hook-form";
import SubmitBtn from "../../../components/SubmitBtn/SubmitBtn";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import InputFieldItem from "../../../components/InputFieldItem/InputFieldItem";
import toast, { Toaster } from "react-hot-toast";

const Slabs = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const handleBackBtn = () => {
    navigate("/admin");
  };

  const selectItems = [
    {
      id: 1,
      title: "General - Individuals & Firms",
      value: "General - Individuals & Firms",
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

  const handleSlabs = (data) => {
    // console.log(data);
    data.percentage = parseFloat(data.percentage);

    fetch("http://127.0.0.1:8000/api/v1/slab-create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((resData) => {
        // console.log("res:", resData);
        toast.success("Slab created successfully");
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
        onSubmit={handleSubmit(handleSlabs)}
        className="my-3 p-2 text-sm bg-secondary rounded-md"
      >
        {/* select one */}
        <div className="w-full lg:w-3/4 my-2 flex items-center">
          <label className="w-3/5 p-[6px]">Select One</label>
          <select
            className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
            {...register("select_one", { required: true })}
          >
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
            labelName: "Title",
            registerName: "title",
            type: "text",
          }}
          register={register}
        ></InputFieldItem>

        <InputFieldItem
          item={{
            labelName: "Amount",
            registerName: "amount",
            type: "number",
          }}
          register={register}
        ></InputFieldItem>

        <InputFieldItem
          item={{
            labelName: "Percentage",
            registerName: "percentage",
            type: "number",
          }}
          register={register}
        ></InputFieldItem>

        {/* <SubmitBtn btnText={"Add"}></SubmitBtn> */}
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

export default Slabs;
