import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { StoreContext } from "../context/StoreContext";

function Login() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const { loginUser } = useContext(StoreContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      console.log("Backend URL 👉", BACKEND_URL);

      const res = await axios.post(
        `${BACKEND_URL}/user/login`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("Login Response 👉", res);

      if (res && res.data && res.data.success) {
        loginUser(res.data.user);
        toast.success(res.data.message || "Login successful!");
        navigate("/");
      } else {
        toast.error(res?.data?.message || "Unexpected response from server");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="bg-[#fdc302] w-full h-[100vh] flex justify-center mx-auto">
      <div className="mt-24 w-auto sm:w-[475px] h-[400px] bg-white border-none rounded-lg shadow-md">
        <h1 className="text-center text-2xl font-bold mt-6">
          Login into Your Account
        </h1>
        <p className="text-center text-base font-semibold mt-4 text-gray-900">
          Fill below fields to Login
        </p>

        <form
          onSubmit={onSubmitHandler}
          className="w-full max-w-md mx-auto p-4 bg-white"
        >
          <div className="flex flex-col gap-2">
            <label className="text-gray-900 font-semibold">Email</label>
            <input
              className="w-full py-2 pl-2 outline-none border border-gray-300 rounded-md"
              type="email"
              name="email"
              value={formData.email}
              onChange={onChangeHandler}
              placeholder="Enter Your Email"
              required
            />
          </div>

          <div className="flex flex-col gap-2 mt-3">
            <label className="text-gray-900 font-semibold">Password</label>
            <input
              className="w-full py-2 pl-2 outline-none border border-gray-300 rounded-md"
              type="password"
              name="password"
              value={formData.password}
              onChange={onChangeHandler}
              placeholder="Enter Your Password"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-5 bg-[#FEAF00] text-white w-full py-2 px-2 rounded-md cursor-pointer flex items-center justify-center"
          >
            Login
          </button>

          <p className="font-semibold text-gray-900 text-center justify-center py-3">
            Don't have an account?{" "}
            <Link to={"/signup"} className="text-[#FEAF00] font-semibold">
              Register Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
