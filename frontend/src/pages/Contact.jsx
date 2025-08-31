import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      {/* Heading */}
      <div className="text-center mb-10 mt-10">
        <h1 className="text-4xl font-extrabold text-gray-900">Contact Us</h1>
        <p className="text-lg text-gray-700 mt-3">
          Have questions or need assistance? We’re here to help!
        </p>
      </div>

      {/* Contact Info */}
      <div className="grid md:grid-cols-3 gap-6 text-center mb-12">
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <FaEnvelope className="text-3xl text-blue-600 mx-auto mb-3" />
          <h2 className="text-lg font-semibold">Email</h2>
          <p className="text-gray-600 mt-1">rijukumari193@gmail.com</p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <FaPhoneAlt className="text-3xl text-green-500 mx-auto mb-3" />
          <h2 className="text-lg font-semibold">Phone</h2>
          <p className="text-gray-600 mt-1">+91 98765 43210</p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <FaMapMarkerAlt className="text-3xl text-red-500 mx-auto mb-3" />
          <h2 className="text-lg font-semibold">Address</h2>
          <p className="text-gray-600 mt-1">Patna, Bihar, India</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white shadow-md rounded-2xl p-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          Send Us a Message
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
