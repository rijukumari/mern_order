
import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { assets } from "../assets/assets.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Hero() {
  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 px-6">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Delicious Food,
            </span>{" "}
            Delivered Fast! 
          </h1>

          <p className="my-5 text-base md:text-lg text-gray-700 max-w-md mx-auto md:mx-0">
            Craving something tasty? Order your favorite meals from top
            restaurants and get them delivered hot & fresh to your doorstep.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
            <div className="flex items-center gap-2 bg-white shadow px-4 py-2 rounded-full">
              <FaRegCircleCheck className="text-orange-500" />
              <p className="text-sm font-semibold">30-Min Delivery</p>
            </div>
            <div className="flex items-center gap-2 bg-white shadow px-4 py-2 rounded-full">
              <FaRegCircleCheck className="text-orange-500" />
              <p className="text-sm font-semibold">Free Delivery</p>
            </div>
            <div className="flex items-center gap-2 bg-white shadow px-4 py-2 rounded-full">
              <FaRegCircleCheck className="text-orange-500" />
              <p className="text-sm font-semibold">Easy Ordering</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center md:justify-start gap-4 mt-8">
            <Link to="/checkout">
              <button className="px-6 py-3 rounded-full bg-orange-500 text-white font-semibold shadow-md hover:bg-orange-600 transition">
                Order Now
              </button>
            </Link>
            <Link to="/menu">
              <button className="px-6 py-3 rounded-full border-2 border-orange-500 text-orange-500 font-semibold hover:bg-orange-50 transition">
                View Menu
              </button>
            </Link>
          </div>
        </div>

        {/* Right Swiper Section */}
        <div className="w-full md:w-1/2 mt-9">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="rounded-2xl shadow-lg"
          >
            <SwiperSlide>
              <img
                src={assets.hero}
                alt="Hero Food"
                className="w-full h-96 object-cover rounded-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={assets.c4}
                alt="Hero Food"
                className="w-full h-96 object-cover rounded-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={assets.f4}
                alt="Hero Food"
                className="w-full h-96 object-cover rounded-2xl"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Hero;
