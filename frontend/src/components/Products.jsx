import React from "react";
import SingleItem from "./SingleItem";

function Products({products}) {
  return (
    <div>
      <h1 className="text-3xl font-bold ml12 mt-12 ml-28 my-6">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 max-w-6xl w-full mx-auto">
        {products.map((item) => (
          <SingleItem
            key={item.id}
            id={item._id}
            name={item.name}
            category={item.category}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
