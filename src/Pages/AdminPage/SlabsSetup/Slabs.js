import React from "react";
import { useForm } from "react-hook-form";
import SubmitBtn from "../../../components/SubmitBtn/SubmitBtn";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useLoaderData, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import TextInput from "../../../components/TextInput/TextInput";
import NumberInput from "../../../components/NumberInput/NumberInput";

const Slabs = () => {
  const slabItem = useLoaderData();
  // console.log(slabItem);

  const navigate = useNavigate();

  const { register, handleSubmit, setValue, reset } = useForm({
    defaultValues: slabItem,
  });

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
      title: "War wounded gazetted freedom fighters",
      value: "War wounded gazetted freedom fighters",
    },
  ];

  const handleBtnAction = (e) => {
    setValue("btnAction", e.target.innerText);
  };

  const handleSlabs = (data) => {
    console.log("sl:", data);
    data.percentage = parseFloat(data.percentage);

    const { btnAction, id, ...submitedData } = data;
    console.log("s-sl:", submitedData);

    if (btnAction.toLowerCase() === "update") {
      // const { id, ...updatedData } = submitedData;
      // console.log("u-sl:", updatedData);

      fetch(`http://127.0.0.1:8000/api/v1/slab-retrieve/${slabItem.id}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(submitedData),
      })
        .then((res) => res.json())
        .then((resData) => {
          console.log("res:", resData);
          if (resData.id) {
            toast.success("Slab updated successfully");
            reset();
            navigate("/admin");
          }
        })
        .catch((err) => {
          console.log(err);
          // toast.err(err.message);
        });
    } else if (btnAction.toLowerCase() === "delete") {
      fetch(`http://127.0.0.1:8000/api/v1/slab-retrieve/${slabItem.id}/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(submitedData),
      })
        .then((res) => res.text())
        .then((resData) => {
          console.log("res:", resData);
          toast.success("Slab deleted successfully");
          reset();
          navigate("/admin");
        })
        .catch((err) => {
          console.log(err);
          // toast.err(err.message);
        });
    } else {
      fetch("http://127.0.0.1:8000/api/v1/slab-create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(submitedData),
      })
        .then((res) => res.json())
        .then((resData) => {
          // console.log("res:", resData);
          if (resData.id) {
            toast.success("Slab created successfully");
            reset();
            navigate("/admin");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
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

        <TextInput
          item={{
            labelName: "Title",
            registerName: "title",
          }}
          register={register}
        ></TextInput>

        <NumberInput
          item={{
            labelName: "Amount",
            registerName: "amount",
          }}
          register={register}
        ></NumberInput>

        <NumberInput
          item={{
            labelName: "Percentage",
            registerName: "percentage",
          }}
          register={register}
        ></NumberInput>

        <input type="hidden" {...register("btnAction")} />
        {slabItem ? (
          <div className="w-full lg:w-3/4 flex justify-end gap-3">
            <button
              className="btn btn-primary text-secondary my-3 w-[150px]"
              onClick={handleBtnAction}
            >
              Update
            </button>
            <button
              className="btn btn-error text-secondary my-3 w-[150px]"
              onClick={handleBtnAction}
            >
              Delete
            </button>
          </div>
        ) : (
          <div className="w-full lg:w-3/4 flex justify-end">
            <SubmitBtn btnText={"submit"}></SubmitBtn>
          </div>
        )}
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Slabs;
