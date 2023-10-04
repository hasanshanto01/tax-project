import React from "react";
import logo from "../../Assets/logo.jpg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const regExp = /^0[0-9].*$/; // for start with 0
  const passRegExp = /^.{8,}$/;

  const handleSignupForm = (formData) => {
    console.log(formData);
    if (
      formData.phone_number.length !== 11 ||
      regExp.test(formData.phone_number) === false
    ) {
      return alert("Invalid phone number");
    } else {
      const phone = formData.phone_number.toString();
      const updatedPhone = "+88" + phone;
      formData.phone_number = updatedPhone;
    }
    if (passRegExp.test(formData.password) === false) {
      return alert("Password must have at least 8 characters");
    }
    console.log(formData);
    // fetch("http://127.0.0.1:8000/api/v1/signup/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("res:", data);
    //   });
    fetch("http://127.0.0.1:8000/api/v1/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <div className="card w-[70%] md:w-1/2 lg:w-[30%] mx-auto my-32 bg-secondary shadow-xl relative">
        <div className="w-24 p-2 rounded-md bg-white absolute -top-9 left-24 md:left-36 lg:left-44">
          <img src={logo} alt="" className="rounded-md"></img>
        </div>
        <form
          onSubmit={handleSubmit(handleSignupForm)}
          className="w-3/4 mx-auto mt-20 mb-3 p-2 text-sm"
        >
          <div className="my-2">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-[6px] border border-primary rounded-md focus:outline-none"
              {...register("username", {
                required: true,
              })}
            />
          </div>
          <div className="my-2">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-[6px] border border-primary rounded-md focus:outline-none"
              {...register("email", {
                required: true,
              })}
            />
          </div>
          <div className="my-2">
            <input
              type="number"
              placeholder="Phone"
              className="w-full p-[6px] border border-primary rounded-md focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              {...register("phone_number", {
                required: true,
              })}
            />
          </div>
          <div className="400 my-2">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-[6px] border border-primary rounded-md focus:outline-none"
              {...register("password", {
                required: true,
              })}
            />
            {errors.password && (
              <span>Password must have at least 8 characters</span>
            )}
          </div>

          <div className="flex justify-center my-2">
            <button className="btn btn-sm btn-primary text-secondary my-3 w-24">
              Sign Up
            </button>
          </div>

          <p className="text-center font-semibold">
            Already have?
            <Link to="/login" className="ml-2">
              <strong className="text-primary hover:underline">Login</strong>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
