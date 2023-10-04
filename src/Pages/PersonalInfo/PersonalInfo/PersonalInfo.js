import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputFieldItem from "../../../components/InputFieldItem/InputFieldItem";
import RadioField from "../../../components/RadioField/RadioField";
import SubmitBtn from "../../../components/SubmitBtn/SubmitBtn";

const PersonalInfo = () => {
  const [selectedCityOption, setSelectedCityOption] = useState(
    "Dhaka or Chattogram City Corporation"
  );
  const [selectedAreYouOption, setSelectedAreYouOption] = useState(
    "General – Individuals & Firms"
  );
  const [selectedGaurdianOption, setSelectedGaurdianOption] = useState("No");

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
      lableName: "Dhaka or Chattogram City Corporation",
      registerName: "city",
      value: "Dhaka or Chattogram City Corporation",
    },
  ];

  const areYouItems = [
    {
      lableName: "General – Individuals & Firms",
      registerName: "are_you",
      value: "General – Individuals & Firms",
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
      value: "Yes",
    },
    {
      lableName: "No",
      registerName: "legal_guardian",
      value: "No",
    },
  ];

  const handleRadioOptionChange = (e) => {
    // console.log(e.target.name);
    if (e.target.name === "city") {
      setSelectedCityOption(e.target.value);
    } else if (e.target.name === "are_you") {
      setSelectedAreYouOption(e.target.value);
    } else if (e.target.name === "legal_guardian") {
      setSelectedGaurdianOption(e.target.value);
    }
  };

  const handlePersonalInfo = (data) => {
    console.log(data);
    console.log(Object.keys(data).length);
    if (
      data.phone_number.length !== 11 &&
      regExp.test(data.phone_number) === false
    ) {
      alert("Invalid phone number");
    } else {
      const phone = data.phone_number.toString();
      const updatedPhone = "+88" + phone;
      data.phone_number = parseInt(updatedPhone);
    }
    if (data.tin.length !== 12) {
      alert("Invalid TIN number");
    }

    fetch("http://127.0.0.1:8000/api/v1/personal-details/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk2NDk0ODk0LCJpYXQiOjE2OTY0MDg0OTQsImp0aSI6IjhiYjgzOGI0ZjA0MzRjNGY5ZTZkOGQxNmI5YjQ2Nzg4IiwidXNlcl9pZCI6MX0.1_dz4nNrCvhvaCBnJ2tktHW90rHFR-L2siE2Tu1saBE",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
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
        <div className="w-full lg:w-3/4 my-2 flex items-center">
          <label className="w-3/5 p-[6px]">Date</label>
          <input
            type="date"
            defaultValue={new Date().toISOString().substring(0, 10)}
            className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
            {...register("current_date")} /* ,{valueAsDate: true,} */
            readOnly
          />
        </div>
        {/* date */}

        {/* income year */}
        <div className="w-full lg:w-3/4 my-2 flex items-center">
          <label className="w-3/5 p-[6px]">Income year ended on</label>
          <input
            type="text"
            defaultValue="30-Jun-23"
            className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
            {...register("income_year")}
            readOnly
          />
        </div>
        {/* income year */}

        {/* assessment year */}
        <div className="w-full lg:w-3/4 my-2 flex items-cente">
          <label className="w-3/5 p-[6px]">Assessment Year</label>
          <input
            type="text"
            defaultValue="2023-24"
            className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
            {...register("assessment_year")}
            readOnly
          />
        </div>
        {/* assessment year */}
        <br />
        {/* assessee name */}
        <InputFieldItem
          item={{
            labelName: "Name of the Assessee",
            registerName: "assess_name",
            type: "text",
            requiredStatus: true,
          }}
          register={register}
        ></InputFieldItem>
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
        <InputFieldItem
          item={{
            labelName: "NID/Passport Number (If no NID)",
            registerName: "nid",
            type: "number",
            requiredStatus: true,
            defaultValueNone: true,
          }}
          register={register}
        ></InputFieldItem>
        {/* nid or passport */}

        {/* dob */}
        <div className="w-full lg:w-3/4 my-2 flex items-center">
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
        </div>
        {/* dob */}

        {/* mobile */}
        <InputFieldItem
          item={{
            labelName: "Phone Number",
            registerName: "phone_number",
            type: "number",
            requiredStatus: true,
            defaultValueNone: true,
          }}
          register={register}
        ></InputFieldItem>
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
        <InputFieldItem
          item={{
            labelName: "TIN",
            registerName: "tin",
            type: "number",
            requiredStatus: true,
            defaultValueNone: true,
          }}
          register={register}
        ></InputFieldItem>
        {/* tin */}

        {/* circle */}
        <InputFieldItem
          item={{
            labelName: "Circle",
            registerName: "circle",
            type: "number",
            requiredStatus: true,
            defaultValueNone: true,
          }}
          register={register}
        ></InputFieldItem>
        {/* circle */}

        {/* tax zone */}
        <InputFieldItem
          item={{
            labelName: "Tax Zone",
            registerName: "tax_zone",
            type: "text",
            requiredStatus: true,
          }}
          register={register}
        ></InputFieldItem>
        {/* tax zone */}

        {/* Resident field */}
        <div className="w-full lg:w-3/4 my-2 flex items-center">
          <label className="w-3/5 p-[6px]">
            Resident Status
            <span className="text-red-500">*</span>
          </label>
          <select
            defaultValue="resident"
            className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
            {...register("resident_status")}
          >
            <option value="resident">Resident</option>
            <option value="nonResident">Non-resident</option>
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
            {cityItems.map((item, i) => (
              <RadioField
                key={i}
                item={item}
                register={register}
                selectedOption={selectedCityOption}
                handleRadioOptionChange={handleRadioOptionChange}
              ></RadioField>
            ))}
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
            {areYouItems.map((item, i) => (
              <RadioField
                key={i}
                item={item}
                register={register}
                selectedOption={selectedAreYouOption}
                handleRadioOptionChange={handleRadioOptionChange}
              ></RadioField>
            ))}
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
            {gaurdianItems.map((item, i) => (
              <RadioField
                key={i}
                item={item}
                register={register}
                selectedOption={selectedGaurdianOption}
                handleRadioOptionChange={handleRadioOptionChange}
              ></RadioField>
            ))}
          </div>
        </div>
        {/* Guardian Field */}
        <br />
        <SubmitBtn btnText={"Submit"}></SubmitBtn>
      </form>
    </div>
  );
};

export default PersonalInfo;
