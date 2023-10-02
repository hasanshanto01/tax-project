import React from "react";
import logo from "../../Asstes/logo.jpg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignupPage = () => {
  const { register, handleSubmit } = useForm();

  const handleLoginForm = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="card w-[70%] md:w-1/2 lg:w-[30%] mx-auto my-32 bg-secondary shadow-xl relative">
        <div className="w-24 p-2 rounded-md bg-white absolute -top-9 left-24 md:left-36 lg:left-44">
          <img src={logo} alt="" className="rounded-md"></img>
        </div>
        <form
          onSubmit={handleSubmit(handleLoginForm)}
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
              {...register("phone", {
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
