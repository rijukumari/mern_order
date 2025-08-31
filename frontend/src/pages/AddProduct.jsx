import React, { useState } from "react";
import { MdCloudUpload } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function AddProduct() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL ;
  const [formData, setFormData] = useState({
 name: "",
   category: "",
   price: "",
  description: "",
    image: null,
  });
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
      data.append("name",formData.name)
      data.append("category",formData.category)
      data.append("price",formData.price)
      data.append("description",formData.description)
      data.append("image",formData.image)

      
  
      const res = await axios.post(`${BACKEND_URL}/product/create`,data,{
        headers:{
          'Content-Type':"multipart/form-data"
        }
      })
      console.log('RESt',res)

      if(res.data.success){
        toast.success(res.data.message)
        formData.name = "";
        formData.category = "";
        formData.price = "";
        formData.description = "";
        formData.image = null;
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
           Add New Product
          </h1>
         
          <form  onSubmit={onSubmitHandler} className="w-full max-w-md max-auto p-4 bg-white">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-gray-900 font-semibold">
                 Name
              </label>
              <input
                className="w-full pl-2 py-2 outline-none border border-gray-300 rounded-md"
                type="text"
                name="name"
                value={formData.name}
                onChange={onChangeHandler}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-gray-900 font-semibold">
             Category
              </label>
              <input
                className="w-full py-2 pl-2 outline-none border border-gray-300 rounded-md"
                type="text"
                name="category"
                value={formData.category}
                onChange={onChangeHandler}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-gray-900 font-semibold">
                Price
              </label>
              <input
                className="w-full py-2 pl-2 outline-none border border-gray-300 rounded-md"
                type="number"
                name="price"
                value={formData.price}
                onChange={onChangeHandler}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-gray-900 font-semibold">
                Description
              </label>
              <textarea
                className="w-full py-2 pl-2 outline-none border border-gray-300 rounded-md"
                name="description"
                value={formData.description}
                onChange={onChangeHandler}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-gray-900 font-semibold">Product Image</label>
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
              Add Product
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
