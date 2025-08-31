import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { StoreContext } from "../context/StoreContext.jsx";

function Navbar() {
  const { cartCount, user, logoutUser } = useContext(StoreContext);
  const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL ;
  console.log("Admin Email",adminEmail)
  console.log("USER",user)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onClose = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <>
      <nav className="fixed shadow-md w-full h-16 px-2 md:px-4 bg-[#171d3b] text-white z-50">
        <div className="flex items-center justify-between h-full">
          <Link to={"/"} className="flex items-center px-4 py-2">
            <div className="h-14 w-auto">
              <img
                src={assets.logo}
                alt=""
                className="h-full  w-auto max-w-[200px] object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          </Link>
          <div className="flex  items-center gap-4 md:gap-7 ">
            <ul className="hidden md:flex text-base md:text-lg gap-4">
              <Link to={"/"} className="hover:text-[#FEAF00] duration-300">
                Home
              </Link>
              <Link to={"/menu"} className="hover:text-[#FEAF00] duration-300">
                Menu
              </Link>
              <Link to={"/about"} className="hover:text-[#FEAF00] duration-300">
                About
              </Link>
              <Link
                to={"/contact"}
                className="hover:text-[#FEAF00] duration-300"
              >
                Contact
              </Link>
            </ul>
            <div>
              <Link to={"cart"} className="text-2xl text-slate-600 relative">
                <FiShoppingCart className="text-white size-7" />
                <div className="absolute -top-2 -right-2 text-white bg-orange-700 h-4 w-4 rounded-full text-sm text-center">
                  {cartCount ? cartCount : 0}
                </div>
              </Link>
            </div>
            <div className="relative text-slate-600">
              <div
                className="text-3xl cursor-pointer w-8 h-8 rounded-full drop-shadow-md  overflow-hidden"
                onClick={toggleMenu}
              >
                {user && user ? (
                  <img src={`${BACKEND_URL}/images/${user.image}`} alt="user image" className="size-9 "/>
                ) : (
                  <FaRegCircleUser className="size-8 text-[#cad2c5] cursor-pointer" />
                )}
              </div>

              {isMenuOpen && (
                <div className="absolute right-2 bg-white py-2  shadow drop-shadow-md flex flex-col min-w-[120px] px-2 text-center rounded-md">
                  <div className="flex flex-col gap-2">
                    { user && user.email === adminEmail ? (
                    <Link
                      onClick={onClose}
                      to={"/add-product"}
                      className="whitespace-nowrap cursor-pointer px-2"
                    >
                      Add Product
                    </Link>
                    ) : (
                      " "

                    )}
                    {user ? (
                      <Link
                        onClick={logoutUser}
                        to={"/"}
                        className="cursor-pointer px-2 text-white bg-red-500"
                      >
                        Logout
                      </Link>
                    ) : (
                      <Link
                        onClick={onClose}
                        to={"/login"}
                        className="cursor-pointer px-2 text-white bg-orange-500"
                      >
                        Login
                      </Link>
                    )}
                  </div>
                  {/* mobail device */}
                  <ul className="md:hidden flex flex-col text-base md:text-lg gap-2">
                    <Link
                      onClick={onClose}
                      to={"/"}
                      className="hover:text-[#FEAF00] duration-300"
                    >
                      Home
                    </Link>
                    <Link
                      onClick={onClose}
                      to={"/menu"}
                      className="hover:text-[#FEAF00] duration-300"
                    >
                      Menu
                    </Link>
                    <Link
                      onClick={onClose}
                      to={"/about"}
                      className="hover:text-[#FEAF00] duration-300"
                    >
                      About
                    </Link>
                    <Link
                      onClick={onClose}
                      to={"/contact"}
                      className="hover:text-[#FEAF00] duration-300"
                    >
                      Contact
                    </Link>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
