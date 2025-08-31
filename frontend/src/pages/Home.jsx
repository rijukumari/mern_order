import React, { useContext, useState } from "react";
import Hero from "../components/Hero";
import Fruits from "../components/Fruits";
import Filter from "../components/Filter";
import Products from "../components/Products";
import { StoreContext } from "../context/StoreContext";

function Home() {
  const {products} = useContext(StoreContext)
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <>
      <Hero />
      <Fruits />
      <Filter setSelectedCategory = {setSelectedCategory}/>
      <Products products = {filteredProducts}/>
    </>
  );
}

export default Home;
