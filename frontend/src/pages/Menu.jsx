import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

function Menu() {
  const { products, addToCart } = useContext(StoreContext);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL ;

  return (
    <div className="py-16 min-h-screen bg-gray-100">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-10">
        🍴 Our Menu
      </h1>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col"
          >
            {/* Image */}
            <img
              src={`${BACKEND_URL}/images/${item.image}`}
              alt={item.name}
              className="w-full h-48 object-cover rounded-t-2xl"
            />

            {/* Info */}
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {item.name}
              </h2>
              <p className="text-gray-500 text-sm flex-grow">
                {item.description?.slice(0, 60)}...
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-orange-600 font-bold text-lg">
                  ${item.price}
                </span>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-600 transition"
                >
                  Add +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
