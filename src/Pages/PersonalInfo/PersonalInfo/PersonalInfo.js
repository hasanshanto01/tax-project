import React from "react";
import { useForm } from "react-hook-form";
import "./PersonalInfo";

const PersonalInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlePersonalInfo = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full lg:w-[82%] mx-6 my-5">
      <h2 className="text-2xl font-semibold">
        Please fill up your personal information
      </h2>
      <form onSubmit={handleSubmit(handlePersonalInfo)} className="my-3">
        {/* date */}
        <div className="flex items-center my-1 p-1 rounded-md bg-gray-50">
          <label className="w-[50%] p-3">Date</label>
          <input
            type="date"
            defaultValue={new Date().toISOString().substring(0, 10)}
            className="w-[30%] input input-bordered bg-gray-50 "
            {...register("date", {
              valueAsDate: true,
            })}
            readOnly
          />
        </div>
        {/* date */}

        {/* income year */}
        <div className="flex items-center my-1 p-1 rounded-md bg-gray-50">
          <label className="w-[50%] p-3">Income year ended on</label>
          <input
            type="text"
            defaultValue="30-Jun-23"
            className="w-[30%] input input-bordered bg-gray-50 "
            {...register("incomeYear")}
            readOnly
          />
        </div>
        {/* income year */}

        {/* assessment year */}
        <div className="flex items-center my-1 p-1 rounded-md bg-gray-50">
          <label className="w-[50%] p-3">Assessment Year</label>
          <input
            type="text"
            defaultValue="2023-24"
            className="w-[30%] input input-bordered bg-gray-50 "
            {...register("assessmentYear")}
            readOnly
          />
        </div>
        {/* assessment year */}
        <br />
        {/* assessee name */}
        <div className="flex items-center my-1 p-1 rounded-md bg-gray-50">
          <label className="w-[50%] p-3">
            Name of the Assessee
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="w-[30%] input input-bordered bg-gray-50 "
            {...register("assesseeName", {
              required: "Name of the Assessee is required",
            })}
          />
        </div>
        {errors.assesseeName && (
          <p className="text-red-500 text-right mr-5">
            <small>{errors.assesseeName.message}</small>
          </p>
        )}
        {/* assessee name */}

        {/* address */}
        <div className="flex items-center my-1 p-1 rounded-md bg-gray-50">
          <label className="w-[50%] p-3">Address</label>
          <textarea
            className="textarea textarea-bordered w-[30%] bg-gray-50"
            placeholder="Type here"
            {...register("address", {
              required: "Address is required",
            })}
          ></textarea>
        </div>
        {errors.address && (
          <p className="text-red-500 text-right mr-5">
            <small>{errors.address.message}</small>
          </p>
        )}
        {/* address */}

        {/* nid or passport */}
        <div className="flex items-center my-1 p-1 rounded-md bg-gray-50">
          <label className="w-[50%] p-3">NID/Passport Number (If no NID)</label>
          <input
            type="number"
            min="0"
            placeholder="Type here"
            className="w-[30%] input input-bordered bg-gray-50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            {...register("nidOrPassport", {
              required: "NID or Passport number is required",
            })}
          />
        </div>
        {errors.nidOrPassport && (
          <p className="text-red-500 text-right mr-5">
            <small>{errors.nidOrPassport.message}</small>
          </p>
        )}
        {/* nid or passport */}

        {/* dob */}
        <div className="flex items-center my-1 p-1 rounded-md bg-gray-50">
          <label className="w-[50%] p-3">Date of birth</label>
          <input
            type="date"
            // defaultValue={new Date().toISOString().substring(0, 10)}
            className="w-[30%] input input-bordered bg-gray-50"
            {...register("dob", {
              required: "Date of birth is required",
            })}
          />
        </div>
        {errors.dob && (
          <p className="text-red-500 text-right mr-5">
            <small>{errors.dob.message}</small>
          </p>
        )}
        {/* dob */}

        {/* mobile */}
        <div className="flex items-center my-1 p-1 rounded-md bg-gray-50">
          <label className="w-[50%] p-3">Mobile</label>
          <input
            type="number"
            // defaultValue={new Date().toISOString().substring(0, 10)}
            className="w-[30%] input input-bordered bg-gray-50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            {...register("mobile", {
              required: "Mobile is required",
            })}
          />
        </div>
        {errors.mobile && (
          <p className="text-red-500 text-right mr-5">
            <small>{errors.mobile.message}</small>
          </p>
        )}
        {/* mobile */}

        {/* email */}
        <div className="flex items-center my-1 p-1 rounded-md bg-gray-50">
          <label className="w-[50%] p-3">Email</label>
          <input
            type="email"
            // defaultValue={new Date().toISOString().substring(0, 10)}
            className="w-[30%] input input-bordered bg-gray-50"
            {...register("email")}
          />
        </div>
        {/* email */}

        {/* tin */}
        <div className="flex items-center my-1 p-1 rounded-md bg-gray-50">
          <label className="w-[50%] p-3">TIN</label>
          <input
            type="number"
            // defaultValue={new Date().toISOString().substring(0, 10)}
            className="w-[30%] input input-bordered bg-gray-50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            {...register("tin", {
              required: "TIN is required",
            })}
          />
        </div>
        {errors.tin && (
          <p className="text-red-500 text-right mr-5">
            <small>{errors.tin.message}</small>
          </p>
        )}
        {/* tin */}

        {/* circle */}
        <div className="flex items-center my-1 p-1 rounded-md bg-gray-50">
          <label className="w-[50%] p-3">Circle</label>
          <input
            type="number"
            // defaultValue={new Date().toISOString().substring(0, 10)}
            className="w-[30%] input input-bordered bg-gray-50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            {...register("circle", {
              required: "Circle is required",
            })}
          />
        </div>
        {errors.circle && (
          <p className="text-red-500 text-right mr-5">
            <small>{errors.circle.message}</small>
          </p>
        )}
        {/* circle */}

        {/* tax zone */}
        <div className="flex items-center my-1 p-1 rounded-md bg-gray-50">
          <label className="w-[50%] p-3">Tax Zone</label>
          <input
            type="text"
            // defaultValue={new Date().toISOString().substring(0, 10)}
            className="w-[30%] input input-bordered bg-gray-50"
            {...register("taxZone", {
              required: "Tax Zone is required",
            })}
          />
        </div>
        {errors.taxZone && (
          <p className="text-red-500 text-right mr-5">
            <small>{errors.taxZone.message}</small>
          </p>
        )}
        {/* tax zone */}

        {/* Resident field */}
        <div className="flex items-center my-1 p-1 rounded-md bg-gray-50">
          <label className="w-[50%] p-3">Resident Status</label>
          <select
            className="select select-bordered w-[15%] bg-gray-50"
            {...register("residentStatus", {
              required: "Resident status is required",
            })}
          >
            <option selected value="resident">
              Resident
            </option>
            <option value="nonResident">Non-resident</option>
          </select>
        </div>
        {errors.residentStatus && (
          <p className="text-red-500 text-right mr-5">
            <small>{errors.residentStatus.message}</small>
          </p>
        )}
        {/* Resident field */}

        {/* City Field */}
        <div className="flex items-center my-1 p-1 rounded-md bg-gray-50">
          <label className="w-[50%] p-3">Select your City</label>
          <div className="w-[40%]">
            <div className="flex items-center">
              <input
                type="radio"
                value="Any other City Corporation"
                name="city"
                className="radio"
                {...register("city", {
                  required: "City is required",
                })}
              />
              <label className="p-1">Any other City Corporation</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                value="Any area other than City Corporation"
                name="city"
                className="radio"
                {...register("city", {
                  required: "City is required",
                })}
              />
              <label className="p-1">
                Any area other than City Corporation
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                checked
                value="Dhaka or Chattogram City Corporation"
                name="city"
                className="radio"
                {...register("city", {
                  required: "City is required",
                })}
              />
              <label className="p-1">
                Dhaka or Chattogram City Corporation
              </label>
            </div>
          </div>
        </div>
        {errors.city && (
          <p className="text-red-500 text-right mr-5">
            <small>{errors.city.message}</small>
          </p>
        )}
        {/* City Field */}

        {/* Are you field */}
        <div className="flex items-center my-1 p-1 rounded-md bg-gray-50">
          <label className="w-[50%] p-3">Are you</label>
          <div className="w-[40%]">
            <div className="flex items-center">
              <input
                type="radio"
                checked
                value="General – Individuals & Firms"
                name="areYou"
                className="radio"
                {...register("areYou", {
                  required: "This field is required",
                })}
              />
              <label className="p-1">General – Individuals & Firms</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                value="Women,and senior citizens (65+)"
                name="areYou"
                className="radio"
                {...register("areYou", {
                  required: "This field is required",
                })}
              />
              <label className="p-1">Women,and senior citizens (65+)</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                value="Third gender"
                name="areYou"
                className="radio"
                {...register("areYou", {
                  required: "This field is required",
                })}
              />
              <label className="p-1">Third gender</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                value="Third gender"
                name="areYou"
                className="radio"
                {...register("areYou", {
                  required: "This field is required",
                })}
              />
              <label className="p-1">Third gender</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                value="Physically challenged persons"
                name="areYou"
                className="radio"
                {...register("areYou", {
                  required: "This field is required",
                })}
              />
              <label className="p-1">Physically challenged persons</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                value="War-wounded gazetted freedom  fighters"
                name="areYou"
                className="radio"
                {...register("areYou", {
                  required: "This field is required",
                })}
              />
              <label className="p-1">
                War-wounded gazetted freedom fighters
              </label>
            </div>
          </div>
        </div>
        {errors.areYou && (
          <p className="text-red-500 text-right mr-5">
            <small>{errors.areYou.message}</small>
          </p>
        )}
        {/* Are you field */}

        {/* Guardian Field */}
        <div className="flex items-center my-1 p-1 rounded-md bg-gray-50">
          <label className="w-[50%] p-3">
            Are you a parent or legal guardian of a person with disability
          </label>
          <div className="w-[40%]">
            <div className="flex items-center">
              <input
                type="radio"
                checked
                value="Yes"
                name="gaurdian"
                className="radio"
                {...register("guardian", {
                  required: "This field is required",
                })}
              />
              <label className="p-1">Yes</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                value="No"
                name="gaurdian"
                className="radio"
                {...register("guardian", {
                  required: "This field is required",
                })}
              />
              <label className="p-1">No</label>
            </div>
          </div>
        </div>
        {errors.areYou && (
          <p className="text-red-500 text-right mr-5">
            <small>{errors.areYou.message}</small>
          </p>
        )}
        {/* Guardian Field */}

        <div className="flex justify-center">
          <button className="btn btn-success my-3 w-[150px]">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
