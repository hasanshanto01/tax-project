<<<<<<< HEAD
import React, { useContext } from "react";
=======
import React from "react";
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
import { useForm } from "react-hook-form";
import CheckBoxField from "../../../components/CheckBoxField/CheckBoxField";
import { useLoaderData, useNavigate } from "react-router-dom";
import SubmitBtn from "../../../components/SubmitBtn/SubmitBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from "react-hot-toast";
import TextInput from "../../../components/TextInput/TextInput";
import NumberInput from "../../../components/NumberInput/NumberInput";
<<<<<<< HEAD
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
=======
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649

const CategoryDescription = () => {
  const categoryItem = useLoaderData();
  // console.log(categoryItem);

  const navigate = useNavigate();

<<<<<<< HEAD
  const { baseURL } = useContext(AuthContext);

=======
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
  const { register, handleSubmit, setValue, reset } = useForm({
    defaultValues: categoryItem,
  });

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

  const handleBtnAction = (e) => {
    setValue("btnAction", e.target.innerText);
  };

  const handleDescriptionDetails = (data) => {
    // console.log("ctd", data);
    const { btnAction, ...submitedData } = data;
    // console.log("s-ctd:", submitedData);

    if (btnAction.toLowerCase() === "update") {
      const { required, ...updatedData } = submitedData;
      // console.log("u-ctd:", updatedData);
      // console.log(
      //   "url:",
      //   categoryItem?.category_name,
      //   categoryItem?.description
      // );

      fetch(
<<<<<<< HEAD
        `${baseURL}/category-retrieve/${categoryItem?.category_name}/${categoryItem?.description}/`,
=======
        `http://127.0.0.1:8000/api/v1/category-retrieve/${categoryItem?.category_name}/${categoryItem?.description}/`,
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(updatedData),
        }
      )
        .then((res) => res.json())
        .then((resData) => {
          console.log("res:", resData);
          if (resData.description) {
            toast.success("Category Setup updated successfully");
            reset();
            navigate("/admin");
          }
        })
        .catch((err) => {
          console.log(err);
          // toast.err(err.message);
        });
    } else if (btnAction.toLowerCase() === "delete") {
      fetch(
<<<<<<< HEAD
        `${baseURL}/category-retrieve/${categoryItem?.category_name}/${categoryItem?.description}/`,
=======
        `http://127.0.0.1:8000/api/v1/category-retrieve/${categoryItem?.category_name}/${categoryItem?.description}/`,
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => res.text())
        .then((resData) => {
          console.log("res:", resData);
          toast.success("Category Setup deleted successfully");
          reset();
          navigate("/admin");
        })
        .catch((err) => {
          console.log(err);
          // toast.err(err.message);
        });
    } else {
<<<<<<< HEAD
      fetch(`${baseURL}/category-setup-create/`, {
=======
      fetch("http://127.0.0.1:8000/api/v1/category-setup-create/", {
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(submitedData),
      })
        .then((res) => res.json())
        .then((resData) => {
          console.log("res:", resData);
          if (resData.description) {
            toast.success("Category Setup created successfully");
            reset();
            navigate("/admin");
          }
        })
        .catch((err) => {
          console.log(err);
          toast.err(err.message);
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
            {categoryList?.map((category) => (
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

        <TextInput
          item={{
            labelName: "Aggregated",
            registerName: "aggregated",
          }}
          register={register}
        ></TextInput>

        <CheckBoxField
          item={{
            labelName: "Active",
            registerName: "active",
          }}
          register={register}
        ></CheckBoxField>

        <NumberInput
          item={{
            labelName: "Sequence",
            registerName: "sequence",
          }}
          register={register}
        ></NumberInput>

        <CheckBoxField
          item={{
            labelName: "Required",
            registerName: "required",
          }}
          register={register}
        ></CheckBoxField>

        <input type="hidden" {...register("btnAction")} />
        {categoryItem ? (
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

export default CategoryDescription;
