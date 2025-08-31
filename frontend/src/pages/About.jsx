import React from "react";
import { MdEmojiEmotions } from "react-icons/md";
import { FaBullseye, FaRegLightbulb, FaHandshake } from "react-icons/fa";

function About() {
  return (
    <div className="max-w-5xl mx-auto p-8 text-center">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-gray-900 mt-11">
        About <span className="text-blue-600">Us</span>
      </h1>

      {/* Intro */}
      <p className="text-lg text-gray-700 mt-4 leading-relaxed">
        Welcome to our store! We are committed to providing the best quality
        products at affordable prices. Our aim is to deliver a seamless shopping
        experience where{" "}
        <span className="font-semibold">customer satisfaction</span>
        is our top priority.
      </p>

      {/* Mission, Vision, Values */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <FaBullseye className="text-4xl text-blue-600 mx-auto mb-3" />
          <h2 className="text-xl font-semibold text-gray-900">Our Mission</h2>
          <p className="text-gray-600 text-sm mt-2">
            To provide high-quality, affordable products that bring value and
            joy to our customers’ lives.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <FaRegLightbulb className="text-4xl text-yellow-500 mx-auto mb-3" />
          <h2 className="text-xl font-semibold text-gray-900">Our Vision</h2>
          <p className="text-gray-600 text-sm mt-2">
            To become a trusted brand known for innovation, reliability, and
            customer-first service.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <FaHandshake className="text-4xl text-green-500 mx-auto mb-3" />
          <h2 className="text-xl font-semibold text-gray-900">Our Values</h2>
          <p className="text-gray-600 text-sm mt-2">
            Integrity, quality, and customer happiness guide everything we do.
          </p>
        </div>
      </div>

      {/* Ending Note */}
      <p className="text-lg flex items-center justify-center gap-2 text-gray-700 mt-10">
        Thank you for choosing us. Happy shopping!{" "}
        <MdEmojiEmotions className="text-yellow-500 text-2xl" />
      </p>
    </div>
  );
}

export default About;
