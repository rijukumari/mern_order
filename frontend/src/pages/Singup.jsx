import React, { useState } from "react";
import { MdCloudUpload } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
import axios from 'axios'

function Singup() {
   const BACKEND_URL = import.meta.env.VITE_BACKEND_URL ;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    image: null,
  });
  const navigate = useNavigate()
  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const fileHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
    }
  };
  const onSubmitHandler = async(e) => {
    e.preventDefault();
    try{
    const data = new FormData();
    data.append("firstName",formData.firstName)
    data.append("lastName",formData.lastName)
    data.append("email",formData.email)
    data.append("password",formData.password)
    data.append("image",formData.image)

    const res = await axios.post(`${BACKEND_URL}/user/register`,data,{
      headers:{
        'Content-Type':"multipart/form-data"
      }
    })
    if(res.data.success){
      toast.success(res.data.message)
      navigate('/login')
    }

  }catch(error){
    toast.error(error.response.data.message)
  }
}
  return (
    <>
      <div className="bg-[#fdc302] w-full  h-auto flex justify-center  mx-auto">
        <div className="mt-24  w-auto sm:w-[475px]  h-auto bg-white border-none rounded-lg shadow-md">
          <h1 className="text-center text-2xl font-bold mt-6">
            Create Your Account
          </h1>
          <p className="text-center text-base font-semibold mt-4 text-gray-900">
            Fill blow fields to Singup
          </p>
          <form  onSubmit={onSubmitHandler} className="w-full max-w-md max-auto p-4 bg-white">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-gray-900 font-semibold">
                First Name
              </label>
              <input
                className="w-full pl-2 py-2 outline-none border border-gray-300 rounded-md"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={onChangeHandler}
                placeholder="Enter Your First Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-gray-900 font-semibold">
                Last Name
              </label>
              <input
                className="w-full py-2 pl-2 outline-none border border-gray-300 rounded-md"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={onChangeHandler}
                placeholder="Enter Your Last Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-gray-900 font-semibold">
                Email
              </label>
              <input
                className="w-full py-2 pl-2 outline-none border border-gray-300 rounded-md"
                type="email"
                name="email"
                value={formData.email}
                onChange={onChangeHandler}
                placeholder="Enter Your Email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-gray-900 font-semibold">
                Password
              </label>
              <input
                className="w-full py-2 pl-2 outline-none border border-gray-300 rounded-md"
                type="password"
                name="password"
                value={formData.password}
                onChange={onChangeHandler}
                placeholder="Enter Your Password"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-gray-900 font-semibold">Profile</label>
              <div className="relative flex items-center justify-center border border-dashed border-gray-400 rounded-md p-6 cursor-pointer overflow-hidden w-full h-40 ">
                {formData.image ? (
                  <img
                    src={URL.createObjectURL(formData.image)}
                    className="w-full h-full inset-0 absolute object-cover rounded-md"
                    alt=""
                  />
                ) : (
                  <div className="flex flex-col items-center">
                    <MdCloudUpload className="text-4xl text-gray-500" />
                    <p className="text-gray-900 font-semibold">Upload Image</p>
                  </div>
                )}
                <input
                  type="file"
                  onChange={fileHandler}
                  accept="image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
            </div>
            <button
              className="mt-5 bg-[#FEAF00] text-white w-full max-w-md max-auto py-2 px-2 rounded-md cursor-pointer flex items-center justify-center"
            >
              Singup
            </button>
            <p className="font-semibold text-gray-900 text-center justify-center py-3">Already have an account <Link to = {'/login'} className="text-[#FEAF00] font-semibold">Login Here</Link></p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Singup;
