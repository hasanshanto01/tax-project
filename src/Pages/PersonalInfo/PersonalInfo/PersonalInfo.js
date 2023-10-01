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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlePersonalInfo = (data) => {
    console.log(data);
  };

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
      registerName: "areYou",
      value: "General – Individuals & Firms",
    },
    {
      lableName: "Women,and senior citizens (65+)",
      registerName: "areYou",
      value: "Women,and senior citizens (65+)",
    },
    {
      lableName: "Third gender",
      registerName: "areYou",
      value: "Third gender",
    },
    {
      lableName: "Physically challenged persons",
      registerName: "areYou",
      value: "Physically challenged persons",
    },
    {
      lableName: "War-wounded gazetted freedom fighters",
      registerName: "areYou",
      value: "War-wounded gazetted freedom fighters",
    },
  ];

  const gaurdianItems = [
    {
      lableName: "Yes",
      registerName: "gaurdian",
      value: "Yes",
    },
    {
      lableName: "No",
      registerName: "gaurdian",
      value: "No",
    },
  ];

  const handleRadioOptionChange = (e) => {
    // console.log(e.target.name);
    if (e.target.name === "city") {
      setSelectedCityOption(e.target.value);
    } else if (e.target.name === "areYou") {
      setSelectedAreYouOption(e.target.value);
    } else if (e.target.name === "gaurdian") {
      setSelectedGaurdianOption(e.target.value);
    }
  };

  return (
    <div className="w-full lg:w-[82%] mx-8 my-5">
      <h2 className="text-xl font-semibold">
        Please fill up your personal information
      </h2>
      <form
        onSubmit={handleSubmit(handlePersonalInfo)}
        className="my-3 p-2 text-sm bg-gray-50 rounded-md"
      >
        {/* date */}
        <div className="w-full lg:w-3/4 my-2 flex items-center">
          <label className="w-3/5 p-[6px]">Date</label>
          <input
            type="date"
            defaultValue={new Date().toISOString().substring(0, 10)}
            className="w-2/5 p-1 border border-success rounded-sm focus:outline-none"
            {...register("date")} /* ,{valueAsDate: true,} */
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
            className="w-2/5 p-1 border border-success rounded-sm focus:outline-none"
            {...register("incomeYear")}
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
            className="w-2/5 p-1 border border-success rounded-sm focus:outline-none"
            {...register("assessmentYear")}
            readOnly
          />
        </div>
        {/* assessment year */}
        <br />
        {/* assessee name */}
        <InputFieldItem
          item={{
            labelName: "Name of the Assessee",
            registerName: "assesseeName",
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
            className="w-2/5 p-1 border border-success rounded-sm focus:outline-none"
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
            registerName: "nidOrPassport",
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
            className="w-2/5 p-1 border border-success rounded-sm focus:outline-none"
            {...register("dob", {
              required: true,
            })}
          />
        </div>
        {/* dob */}

        {/* mobile */}
        <InputFieldItem
          item={{
            labelName: "Mobile",
            registerName: "mobile",
            type: "number",
            requiredStatus: true,
            defaultValueNone: true,
          }}
          register={register}
        ></InputFieldItem>
        {/* mobile */}

        {/* email */}
        <div className="w-full lg:w-3/4 my-2 flex items-center">
          <label className="w-3/5 p-[6px]">Email</label>
          <input
            type="email"
            // defaultValue={new Date().toISOString().substring(0, 10)}
            className="w-2/5 p-1 border border-success rounded-sm focus:outline-none"
            {...register("email")}
          />
        </div>
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
            registerName: "taxZone",
            type: "text",
            requiredStatus: true,
          }}
          register={register}
        ></InputFieldItem>
        {/* tax zone */}

        {/* Resident field */}
        <div className="w-full lg:w-3/4 my-2 flex items-center">
          <label className="w-3/5 p-[6px]">Resident Status</label>
          <select
            defaultValue="resident"
            className="w-2/5 p-1 border border-success rounded-sm focus:outline-none"
            {...register("residentStatus", {
              required: "Resident status is required",
            })}
          >
            <option value="resident">Resident</option>
            <option value="nonResident">Non-resident</option>
          </select>
        </div>
        {errors.residentStatus && (
          <p className="text-red-500 text-right mr-5">
            <small>{errors.residentStatus.message}</small>
          </p>
        )}
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
        <SubmitBtn></SubmitBtn>
      </form>
    </div>
  );
};

export default PersonalInfo;
