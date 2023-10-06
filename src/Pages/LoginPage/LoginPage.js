import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.jpg";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const LoginPage = () => {
  // const { setAccessToken } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { register, handleSubmit } = useForm();

  const handleLoginForm = (loginData) => {
    console.log(loginData);
    fetch("http://127.0.0.1:8000/api/v1/signin/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("lr:", data);
        const accessToken = data.access;
        const refreshToken = data.refresh;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
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
              type="email"
              placeholder="Email"
              className="w-full p-[6px] border border-primary rounded-md focus:outline-none"
              {...register("email", {
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

          <Link to="" className="text-red-500 hover:underline">
            Forget Password?
          </Link>

          <div className="flex justify-center my-2">
            <button className="btn btn-sm btn-primary text-secondary my-3 w-24">
              Login
            </button>
          </div>

          <p className="text-center font-semibold">
            New to this site?
            <Link to="/signup" className="ml-2">
              <strong className="text-primary hover:underline">Sign Up</strong>
            </Link>
          </p>
        </form>
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default LoginPage;
