import React from "react";
import { PiForkKnifeBold } from "react-icons/pi";

function Filter({ setSelectedCategory }) {
  const categories = [
    { id: 1, name: "Fruit" }, // match "Fruit"
    { id: 2, name: "Vegetable" }, // match "Vegetable"
    { id: 3, name: "Pizza" }, // match "Pizza"
    { id: 4, name: "All" }, // special case
    { id: 5, name: "Cake" }, // match "Cake"
    { id: 6, name: "Chicken" }, // spelling fix
    { id: 7, name: "Burger" }, // extra category
    { id: 8, name: "Ice Cream" }, // extra category
  ];

  return (
    <div>
      <h1 className="text-center  font-bold ml-12 text-gray-900 md:text-3xl text-lg">
        Filter Product by Category  
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-3 mt-9">
        {categories.map((item) => (
          <div
            key={item.id}
            className="justify-center items-center flex flex-col gap-2 max-w-[100px] cursor-pointer w-full border border-gray-300 hover:bg-orange-600 text-white bg-orange-400 rounded-full p-4 duration-300"
            onClick={() => setSelectedCategory(item.name)} // ✅ fix
          >
            <PiForkKnifeBold className="size-9" />
            <p className="text-sm">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filter;
