import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Checkout() {
  const navigate = useNavigate();

  const handleOrder = (e) => {
    e.preventDefault(); // form reload rokta hai
    navigate("/");
    toast.success(" Order placed successfully!");
  };

  return (
    <div className="py-16 min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-8">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-6">
           Enter Your Details
        </h1>

        {/* Checkout Form */}
        <form onSubmit={handleOrder} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              required
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              required
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              required
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Zip Code
            </label>
            <input
              type="text"
              name="zipcode"
              placeholder="Enter your zip code"
              required
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-orange-600 transition"
          >
             Order Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
