import React, { useContext, useState } from "react";
import logo from "../../Assets/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const SignupPage = () => {
  const { user, setUser, setIsUserVerified, baseURL } = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const regExp = /^0[0-9].*$/; // for start with 0
  const passRegExp = /^.{8,}$/;

  const handleSignupForm = (signupData) => {
    // console.log(signupData);

    if (
      signupData.phone_number.toString().length !== 11 ||
      regExp.test(signupData.phone_number) === false
    ) {
      return toast.error("Invalid phone number");
    } else {
      const phone = signupData.phone_number.toString();
      const updatedPhone = "+88" + phone;
      signupData.phone_number = updatedPhone;
    }

    if (passRegExp.test(signupData.password) === false) {
      return toast.error("Password must have at least 8 characters");
    }

    console.log("form:", signupData);

    fetch(`${baseURL}/signup/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("sr:", data);
        setUser(data);
        toast.success("User created successfully. Please, verify user.");
        document.getElementById("otp_modal").showModal();
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  const handleOTP = (e) => {
    e.preventDefault();

    const otpToken = e.target.otpToken.value;
    // console.log(otpToken);

    if (otpToken.toString().length > 5) {
      toast.error("OTP must be 5 digit");
    }

    fetch(`${baseURL}/verify-otp/${user.username}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ otp_token: otpToken }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("after otp:", data);
        if ((data.message = "Account activated successfully")) {
          setIsUserVerified(true);
          toast.success("Successfully verified user.");
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  const handleOTPResend = (e) => {
    e.preventDefault();

    fetch(`${baseURL}/resend-otp/${user?.id}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // toast.success(data);
      })
      .catch((error) => console.log("error", error));
  };

  const handleModalClose = () => {
    // console.log("close");
    toast("User not verified.");
    navigate("/login");
  };

  const handleModal = () => document.getElementById("otp_modal").showModal();

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
              <span className="text-red-500">
                Password must have at least 8 characters
              </span>
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

      <dialog id="otp_modal" className="modal">
        <div className="modal-box bg-secondary">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={handleModalClose}
            >
              ✕
            </button>
          </form>
          <p className="py-4">
            Please, check you email and enter <strong>OTP</strong> for
            verification.
          </p>
          <form onSubmit={handleOTP} className="text-center">
            <input
              type="number"
              name="otpToken"
              className=" p-1 border border-primary rounded-sm focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <div className="my-2 flex justify-center gap-2">
              <button
                className="btn btn-sm btn-error text-secondary"
                onClick={handleOTPResend}
              >
                Resend
              </button>
              <button className="btn btn-sm btn-primary text-secondary">
                Verify
              </button>
            </div>
          </form>
        </div>
      </dialog>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default SignupPage;
