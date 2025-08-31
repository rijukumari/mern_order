import React, { useContext } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SingleItem from "./SingleItem.jsx";
import { StoreContext } from "../context/StoreContext.jsx";

function Fruits() {
  const {products} = useContext(StoreContext)
  console.log('Products',products)
  const iceCreams = products.filter((item) => item.category == "Burger");
  console.log("IceCreams:", iceCreams);

  return (
    <div className="py-6">
      <h1 className="text-3xl text-center  text-gray-800 font-bold ">
        Grab Your Favourite Ice Cream
      </h1>
      <div className="my-9  md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 max-w-6xl w-full mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }} 
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 6 },
          }}
        >
          {iceCreams.map((item) => (
            <SwiperSlide key={item.id}>
              <SingleItem
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
                category={item.category}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Fruits;
