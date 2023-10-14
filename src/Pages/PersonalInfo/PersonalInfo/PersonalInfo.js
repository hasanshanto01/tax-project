<<<<<<< HEAD
import React, { useContext, useEffect, useState } from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
import { useForm } from "react-hook-form";
import RadioField from "../../../components/RadioField/RadioField";
import SubmitBtn from "../../../components/SubmitBtn/SubmitBtn";
import TextInput from "../../../components/TextInput/TextInput";
import NumberInput from "../../../components/NumberInput/NumberInput";
import toast, { Toaster } from "react-hot-toast";
import NumberInputAsString from "../../../components/NumberInputAsString/NumberInputAsString";
import { useLoaderData } from "react-router-dom";
<<<<<<< HEAD
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
=======
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649

const PersonalInfo = () => {
  const [selectedCityOption, setSelectedCityOption] = useState(
    "Dhaka or Chattagram City Corporation"
  );
  const [selectedAreYouOption, setSelectedAreYouOption] = useState(
    "General - Individuals & Firms"
  );
  const [selectedGaurdianOption, setSelectedGaurdianOption] = useState("false");

  const personalInfo = useLoaderData();
  console.log("pires:", personalInfo);

<<<<<<< HEAD
  const { baseURL } = useContext(AuthContext);

=======
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
  const { register, handleSubmit, setValue, reset } = useForm({
    defaultValues: personalInfo,
  });

  const regExp = /^0[0-9].*$/; // for start with 0

  const cityItems = [
    {
      labelName: "Any Other City Corporation",
      registerName: "city",
      value: "Any Other City Corporation",
    },
    {
      labelName: "Any Area Other than City Corporation",
      registerName: "city",
      value: "Any Area Other than City Corporation",
    },
    {
      labelName: "Dhaka or Chattagram City Corporation",
      registerName: "city",
      value: "Dhaka or Chattagram City Corporation",
    },
  ];

  const areYouItems = [
    {
      labelName: "General - Individuals & Firms",
      registerName: "are_you",
      value: "General - Individuals & Firms",
    },
    {
      labelName: "Woman and Senior Citizens (65+)",
      registerName: "are_you",
      value: "Woman and Senior Citizens (65+)",
    },
    {
      labelName: "Third Gender",
      registerName: "are_you",
      value: "Third Gender",
    },
    {
      labelName: "Physically challenged persons",
      registerName: "are_you",
      value: "Physically challenged persons",
    },
    {
      labelName: "War wounded gazetted freedom fighters",
      registerName: "are_you",
      value: "War wounded gazetted freedom fighters",
    },
  ];

  const gaurdianItems = [
    {
      labelName: "Yes",
      registerName: "legal_guardian",
      value: "true",
    },
    {
      labelName: "No",
      registerName: "legal_guardian",
      value: "false",
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
    // console.log("pi:", data);

    if (
      data.phone_number.length !== 11 &&
      regExp.test(data.phone_number) === false
    ) {
      return toast.error("Invalid phone number");
    } else {
      const updatedPhone = "+88" + data.phone_number;
      data.phone_number = updatedPhone;
    }

    if (data.tin.length !== 12) {
      return toast.error("Invalid TIN number");
    }

    data.legal_guardian = Boolean(data.legal_guardian);
    // console.log("boolean:", data.legal_guardian);
<<<<<<< HEAD

    // console.log("pi-res:", data);

    const { date, income_year_ended_on, assessment_year, ...updatedData } =
      data;
    console.log("piU", updatedData);

    fetch(`${baseURL}/personal-details/`, {
=======

    // console.log("pi-res:", data);

    const { date, income_year_ended_on, assessment_year, ...updatedData } =
      data;
    console.log("piU", updatedData);

    fetch("http://127.0.0.1:8000/api/v1/personal-details/", {
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((resData) => {
        // console.log(resData);
        if (resData.assess_name) {
          toast.success("You information successfully submited.");
          reset();
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  useEffect(() => {
    if (personalInfo?.assess_name) {
      setValue("phone_number", personalInfo?.phone_number.slice(3));
      setValue("legal_guardian", personalInfo?.legal_guardian.toString());
    }
  }, [setValue]);

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
        {personalInfo?.assess_name && (
          <div className="w-full lg:w-3/4 my-2 flex items-center">
            <label className="w-3/5 p-[6px]">Date</label>
            <input
              type="date"
              className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
              {...register("date")}
              readOnly
            />
          </div>
        )}
        {/* date */}

        {/* income year */}
        {personalInfo?.assess_name && (
          <div className="w-full lg:w-3/4 my-2 flex items-center">
            <label className="w-3/5 p-[6px]">Income year ended on</label>
            <input
              type="date"
              className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
              {...register("income_year_ended_on")}
              readOnly
            />
          </div>
        )}
        {/* income year */}

        {/* assessment year */}
        {personalInfo?.assess_name && (
          <div className="w-full lg:w-3/4 my-2 flex items-cente">
            <label className="w-3/5 p-[6px]">Assessment Year</label>
            <input
              type="text"
              className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
              {...register("assessment_year")}
              readOnly
            />
          </div>
        )}
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
        <NumberInputAsString
          item={{
            labelName: "NID/Passport Number (If no NID)",
            registerName: "nid",
            requiredStatus: true,
          }}
          register={register}
        ></NumberInputAsString>
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
        <NumberInputAsString
          item={{
            labelName: "Phone Number",
            registerName: "phone_number",
            requiredStatus: true,
          }}
          register={register}
        ></NumberInputAsString>
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
        <NumberInputAsString
          item={{
            labelName: "TIN",
            registerName: "tin",
            requiredStatus: true,
          }}
          register={register}
        ></NumberInputAsString>
        {/* tin */}

        {/* circle */}
        <NumberInput
          item={{
            labelName: "Circle",
            registerName: "circle",
            requiredStatus: true,
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
            {cityItems.map((item) => (
              <RadioField
                key={item.labelName}
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
            {areYouItems.map((item) => (
              <RadioField
                key={item.labelName}
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
        {!personalInfo?.assess_name && (
          <SubmitBtn btnText={"Submit"}></SubmitBtn>
        )}
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default PersonalInfo;
