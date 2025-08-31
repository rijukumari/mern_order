import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, grandTotal } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="py-16 w-full min-h-screen bg-gray-100 flex flex-col items-center ">
      <h1 className="text-center text-3xl font-bold text-gray-900 mb-8 mt-9">
         Your Shopping Cart
      </h1>

      <div className="max-w-5xl w-full mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        {cart.length === 0 ? (
          <div className="p-10 text-center text-gray-500">
            <p className="text-lg">Your cart is empty </p>
            <button
              onClick={() => navigate("/")}
              className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-orange-600 transition"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Table Section */}
            <table className="w-full border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-4 text-left text-gray-700">Image</th>
                  <th className="p-4 text-left text-gray-700">Name</th>
                  <th className="p-4 text-center text-gray-700">Price</th>
                  <th className="p-4 text-center text-gray-700">Qty</th>
                  <th className="p-4 text-center text-gray-700">Total</th>
                  <th className="p-4 text-center text-gray-700">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr
                    key={item.id}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="p-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 object-cover rounded-lg shadow-sm"
                      />
                    </td>
                    <td className="p-4 font-medium text-gray-800">
                      {item.name}
                    </td>
                    <td className="p-4 text-center text-gray-700">
                      ${item.price}
                    </td>
                    <td className="p-4 text-center text-gray-700">
                      {item.qty}
                    </td>
                    <td className="p-4 text-center font-semibold text-gray-900">
                      ${item.qty * item.price}
                    </td>
                    <td className="p-4 text-center">
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded-lg shadow hover:bg-red-600 transition"
                        onClick={() => removeFromCart(item.id)}
                      >
                        ✕
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Checkout Section */}
            <div className="flex justify-between items-center px-6 py-4 border-t bg-gray-50">
              <p className="text-lg font-semibold text-gray-800">
                Grand Total:{" "}
                <span className="text-orange-600">${grandTotal}</span>
              </p>
              <button
                onClick={() => navigate("/checkout")}
                className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-orange-600 transition"
              >
                Proceed to Checkout →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
