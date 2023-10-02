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
      <div className="card w-[70%] md:w-1/2 lg:w-[30%] mx-auto my-20 bg-gray-50 shadow-xl relative">
        <div className="w-24 p-2 rounded-md bg-gray-200 absolute -top-8 left-24 md:left-36 lg:left-44">
          <img src={logo} className="rounded-md"></img>
        </div>
        <form
          onSubmit={handleSubmit(handleLoginForm)}
          className="w-3/4 mx-auto mt-20 mb-3 p-2 text-sm"
        >
          <div className="my-2">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-[6px] border border-success rounded-md focus:outline-none"
              {...register("username", {
                required: true,
              })}
            />
          </div>
          <div className="my-2">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-[6px] border border-success rounded-md focus:outline-none"
              {...register("email", {
                required: true,
              })}
            />
          </div>
          <div className="400 my-2">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-[6px] border border-success rounded-md focus:outline-none"
              {...register("password", {
                required: true,
              })}
            />
          </div>

          <Link to="" className="text-red-500 hover:underline">
            Forget Password?
          </Link>

          <div className="flex justify-center my-2">
            <button className="btn btn-sm btn-success my-3 w-24">
              Sign Up
            </button>
          </div>

          <p className="text-center font-semibold">
            Already have?
            <Link to="/login" className="ml-2">
              <strong className="text-success">Login</strong>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
