import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputFieldItem from "../../../components/InputFieldItem/InputFieldItem";
import RadioField from "../../../components/RadioField/RadioField";
import SubmitBtn from "../../../components/SubmitBtn/SubmitBtn";
import TextInput from "../../../components/TextInput/TextInput";
import NumberInput from "../../../components/NumberInput/NumberInput";
import { type } from "@testing-library/user-event/dist/type";
import toast, { Toaster } from "react-hot-toast";

const PersonalInfo = () => {
  const [selectedCityOption, setSelectedCityOption] = useState(
    "Dhaka or Chattogram City Corporation"
  );
  const [selectedAreYouOption, setSelectedAreYouOption] = useState(
    "General – Individuals & Firms"
  );
  const [selectedGaurdianOption, setSelectedGaurdianOption] = useState("false");

  const { register, handleSubmit } = useForm();

  const regExp = /^0[0-9].*$/; // for start with 0

  const cityItems = [
    {
      lableName: "Any other City Corporation",
      registerName: "city",
      value: "Any other City Corporation",
    },
    {
      lableName: "Any area other than City Corporation",
      registerName: "city",
      value: "Any area other than City Corporation",
    },
    {
      lableName: "Dhaka or Chattagram City Corporation",
      registerName: "city",
      value: "Dhaka or Chattagram City Corporation",
    },
  ];

  const areYouItems = [
    {
      lableName: "General - Individuals & Firms",
      registerName: "are_you",
      value: "General - Individuals & Firms",
    },
    {
      lableName: "Women,and senior citizens (65+)",
      registerName: "are_you",
      value: "Women,and senior citizens (65+)",
    },
    {
      lableName: "Third gender",
      registerName: "are_you",
      value: "Third gender",
    },
    {
      lableName: "Physically challenged persons",
      registerName: "are_you",
      value: "Physically challenged persons",
    },
    {
      lableName: "War-wounded gazetted freedom fighters",
      registerName: "are_you",
      value: "War-wounded gazetted freedom fighters",
    },
  ];

  const gaurdianItems = [
    {
      lableName: "Yes",
      registerName: "legal_guardian",
      value: true,
    },
    {
      lableName: "No",
      registerName: "legal_guardian",
      value: false,
    },
  ];

  const handleRadioOptionChange = (e) => {
    // console.log(e.target.name);
    if (e.target.name === "city") {
      setSelectedCityOption(e.target.value);
    } else if (e.target.name === "are_you") {
      setSelectedAreYouOption(e.target.value);
    } else if (e.target.name === "legal_guardian") {
      console.log(e.target.value);
      setSelectedGaurdianOption(e.target.value);
    }
  };

  const handlePersonalInfo = (data) => {
    console.log("s:", data);
    console.log(Object.keys(data).length);

    data.nid = data.nid.toString();
    if (
      data.phone_number.toString().length !== 11 &&
      regExp.test(data.phone_number) === false
    ) {
      alert("Invalid phone number");
    } else {
      const phone = data.phone_number.toString();
      const updatedPhone = "+88" + phone;
      data.phone_number = updatedPhone;
    }
    if (data.tin.length !== 12) {
      alert("Invalid TIN number");
    }
    data.tin = data.tin.toString();
    data.circle = parseInt(data.circle);
    // data.circle = parseInt(data.circle);
    // console.log(typeof data.circle);\
    // console.log(data.city);

    // const updatedLegalGaurdian = Boolean(data.legal_gaurdian);
    // data.legal_gaurdian = updatedLegalGaurdian;
    // const stringValue = data.legal_gaurdian;
    console.log(data.legal_guardian);
    // const booleanValue = stringValue === "true" ? true : false;
    // data.legal_gaurdian = booleanValue;
    // console.log("legal_guardian", data.legal_guardian);
    const updatedLegalGaurdian = Boolean(data.legal_guardian);
    data.legal_guardian = updatedLegalGaurdian;
    console.log("a", data.legal_guardian);

    console.log("f:", data);
    console.log(Object.keys(data).length);
    // const accessToken = localStorage.getItem("accessToken");
    // console.log(accessToken);
    fetch("http://127.0.0.1:8000/api/v1/personal-details/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        toast.success("You information successfully submited.");
      })
      .catch((err) => {
        console.log(err);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  return (
    <div className="w-full lg:w-[82%] mx-8 my-5">
      <h2 className="text-xl font-semibold">
        Please fill up your personal information
      </h2>
      <form
        onSubmit={handleSubmit(handlePersonalInfo)}
        className="my-3 p-2 text-sm bg-secondary rounded-md border"
      >
        {/* date */}
        {/* ,{valueAsDate: true,}  */}
        {/* <div className="w-full lg:w-3/4 my-2 flex items-center">
          <label className="w-3/5 p-[6px]">Date</label>
          <input
            type="date"
            defaultValue={new Date().toISOString().substring(0, 10)}
            className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
            {...register("current_date")}
            readOnly
          />
        </div> */}
        {/* date */}

        {/* income year */}
        {/* <div className="w-full lg:w-3/4 my-2 flex items-center">
          <label className="w-3/5 p-[6px]">Income year ended on</label>
          <input
            type="text"
            defaultValue="30-Jun-23"
            className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
            {...register("income_year")}
            readOnly
          />
        </div> */}
        {/* income year */}

        {/* assessment year */}
        {/* <div className="w-full lg:w-3/4 my-2 flex items-cente">
          <label className="w-3/5 p-[6px]">Assessment Year</label>
          <input
            type="text"
            defaultValue="2023-24"
            className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
            {...register("assessment_year")}
            readOnly
          />
        </div> */}
        {/* assessment year */}
        <br />
        {/* assessee name */}
        <TextInput
          item={{
            labelName: "Name of the Assessee",
            registerName: "assess_name",
            requiredStatus: true,
          }}
          register={register}
        ></TextInput>
        {/* assessee name */}

        {/* address */}
        <div className="w-full lg:w-3/4 my-2 flex items-center">
          <label className="w-3/5 p-[6px]">
            Address
            <span className="text-red-500">*</span>
          </label>
          <textarea
            className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
            placeholder="Type here"
            {...register("address", {
              required: true,
            })}
          ></textarea>
        </div>
        {/* address */}

        {/* nid or passport */}
        <NumberInput
          item={{
            labelName: "NID/Passport Number (If no NID)",
            registerName: "nid",
            requiredStatus: true,
            defaultValueNone: true,
          }}
          register={register}
        ></NumberInput>
        {/* nid or passport */}

        {/* dob */}
        {/* <div className="w-full lg:w-3/4 my-2 flex items-center">
          <label className="w-3/5 p-[6px]">
            Date of birth
            <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            // defaultValue={new Date().toISOString().substring(0, 10)}
            className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
            {...register("dob", {
              required: true,
            })}
          />
        </div> */}
        {/* dob */}

        {/* mobile */}
        <NumberInput
          item={{
            labelName: "Phone Number",
            registerName: "phone_number",
            requiredStatus: true,
            defaultValueNone: true,
          }}
          register={register}
        ></NumberInput>
        {/* mobile */}

        {/* email */}
        {/* <div className="w-full lg:w-3/4 my-2 flex items-center">
          <label className="w-3/5 p-[6px]">Email</label>
          <input
            type="email"
            className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
            {...register("email")}
          />
        </div> */}
        {/* email */}

        {/* tin */}
        <NumberInput
          item={{
            labelName: "TIN",
            registerName: "tin",
            requiredStatus: true,
            defaultValueNone: true,
          }}
          register={register}
        ></NumberInput>
        {/* tin */}

        {/* circle */}
        <NumberInput
          item={{
            labelName: "Circle",
            registerName: "circle",
            requiredStatus: true,
            defaultValueNone: true,
          }}
          register={register}
        ></NumberInput>
        {/* circle */}

        {/* tax zone */}
        <TextInput
          item={{
            labelName: "Tax Zone",
            registerName: "tax_zone",
            requiredStatus: true,
          }}
          register={register}
        ></TextInput>
        {/* tax zone */}

        {/* Resident field */}
        <div className="w-full lg:w-3/4 my-2 flex items-center">
          <label className="w-3/5 p-[6px]">
            Resident Status
            <span className="text-red-500">*</span>
          </label>
          <select
            defaultValue="Resident"
            className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
            {...register("resident_status")}
          >
            <option value="Resident">Resident</option>
            <option value="Non-Resident">Non-resident</option>
          </select>
        </div>
        {/* Resident field */}
        <br />
        {/* City Field */}
        <div className="w-full lg:w-3/4 my-2 flex items-center">
          <label className="w-3/5 p-[6px]">
            Select your City
            <span className="text-red-500">*</span>
          </label>
          <div className="w-2/5">
            {/* {cityItems.map((item, i) => (
              <RadioField
                key={i}
                item={item}
                register={register}
                selectedOption={selectedCityOption}
                handleRadioOptionChange={handleRadioOptionChange}
              ></RadioField>
            ))} */}
            <div className="flex items-center">
              <input
                type="radio"
                value="Any Other City Corporation"
                className="radio-xs"
                {...register(`city`, {
                  required: true,
                })}
                checked={selectedCityOption === "Any Other City Corporation"}
                onChange={handleRadioOptionChange}
              />
              <label className="p-1">Any Other City Corporation</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                value="Any Area Other than City Corporation"
                className="radio-xs"
                {...register(`city`, {
                  required: true,
                })}
                checked={
                  selectedCityOption === "Any Area Other than City Corporation"
                }
                onChange={handleRadioOptionChange}
              />
              <label className="p-1">
                Any Area Other than City Corporation
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                value="Dhaka or Chattagram City Corporation"
                className="radio-xs"
                {...register(`city`, {
                  required: true,
                })}
                checked={
                  selectedCityOption === "Dhaka or Chattagram City Corporation"
                }
                onChange={handleRadioOptionChange}
              />
              <label className="p-1">
                Dhaka or Chattagram City Corporation
              </label>
            </div>
          </div>
        </div>
        {/* City Field */}
        <br />
        {/* Are you field */}
        <div className="w-full lg:w-3/4 my-2 flex items-center">
          <label className="w-3/5 p-[6px]">
            Are you
            <span className="text-red-500">*</span>
          </label>
          <div className="w-2/5">
            {/* {areYouItems.map((item, i) => (
              <RadioField
                key={i}
                item={item}
                register={register}
                selectedOption={selectedAreYouOption}
                handleRadioOptionChange={handleRadioOptionChange}
              ></RadioField>
            ))} */}
            <div className="flex items-center">
              <input
                type="radio"
                value="General - Individuals & Firms"
                className="radio-xs"
                {...register(`are_you`, {
                  required: true,
                })}
                checked={
                  selectedAreYouOption === "General - Individuals & Firms"
                }
                onChange={handleRadioOptionChange}
              />
              <label className="p-1">General - Individuals & Firms</label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                value="Woman and Senior Citizens (65+)"
                className="radio-xs"
                {...register(`are_you`, {
                  required: true,
                })}
                checked={
                  selectedAreYouOption === "Woman and Senior Citizens (65+)"
                }
                onChange={handleRadioOptionChange}
              />
              <label className="p-1">Woman and Senior Citizens (65+)</label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                value="Third Gender"
                className="radio-xs"
                {...register(`are_you`, {
                  required: true,
                })}
                checked={selectedAreYouOption === "Third Gender"}
                onChange={handleRadioOptionChange}
              />
              <label className="p-1">Third Gender</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                value="Physically challenged persons"
                className="radio-xs"
                {...register(`are_you`, {
                  required: true,
                })}
                checked={
                  selectedAreYouOption === "Physically challenged persons"
                }
                onChange={handleRadioOptionChange}
              />
              <label className="p-1">Physically challenged persons</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                value="War wounded gazetted freedom fighters"
                className="radio-xs"
                {...register(`are_you`, {
                  required: true,
                })}
                checked={
                  selectedAreYouOption ===
                  "War wounded gazetted freedom fighters"
                }
                onChange={handleRadioOptionChange}
              />
              <label className="p-1">
                War wounded gazetted freedom fighters
              </label>
            </div>
          </div>
        </div>
        {/* Are you field */}
        <br />
        {/* Guardian Field */}
        <div className="w-full lg:w-3/4 my-2 flex items-center">
          <label className="w-3/5 p-[6px]">
            Are you a parent or legal guardian of a person with disability
            <span className="text-red-500">*</span>
          </label>
          <div className="w-2/5">
            {/* {gaurdianItems.map((item, i) => (
              <RadioField
                key={i}
                item={item}
                register={register}
                selectedOption={selectedGaurdianOption}
                handleRadioOptionChange={handleRadioOptionChange}
              ></RadioField>
            ))} */}
            <div className="flex items-center">
              <input
                type="radio"
                value="true"
                className="radio-xs"
                {...register("legal_guardian", {
                  required: true,
                })}
                checked={selectedGaurdianOption === "true"}
                onChange={handleRadioOptionChange}
              />
              <label className="p-1">True</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                value="false"
                className="radio-xs"
                {...register("legal_guardian", {
                  required: true,
                })}
                checked={selectedGaurdianOption === "false"}
                onChange={handleRadioOptionChange}
              />
              <label className="p-1">False</label>
            </div>
          </div>
        </div>
        {/* Guardian Field */}
        <br />
        <SubmitBtn btnText={"Submit"}></SubmitBtn>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default PersonalInfo;
