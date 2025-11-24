import React, { useState } from "react";
import logo from "../assets/images/icon.svg";
import { NavLink } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="flex  justify-between py-2 px-4 items-center    ">
        <div className="flex  w-full justify-between py-4 px-4 item-center mx-auto  bg-black container  max-md:hidden">
          <div className="">
            <NavLink to="/">
              <img src={logo} alt="" className="text-white" />
            </NavLink>
          </div>
          <div className="navlink flex">
            <NavLink
              to="/work"
              className="text-white group relative mx-4 my-2 "
            >
              Work
              <div className=" w-0 group-hover:w-full bg-white h-px  absolute mb-2 transition-all"></div>
            </NavLink>

            <NavLink to="/contact" className="group text-white mx-4 my-2 ">
              Contact
              <div className="w-0 group-hover:w-full bg-white h-px transition-all"></div>
            </NavLink>
            <button className=" bg-lime-400 flex justify-center items-center group  text-white px-5 py-2">
              <div className="w-6 transition-all h-px bg-white mr-2   group-hover:w-0"></div>
              <span className="text-sm tracking-wider">
                {" "}
                GET FREE TEMPLATES
              </span>
              <div className="w-0 transition-all h-px bg-white ml-2  group-hover:w-6"></div>
            </button>
          </div>
        </div>
        <div className="bg-black w-full flex justify-between items-center md:hidden">
          <div className="">
            <img src={logo} alt="" className="text-white" />
          </div>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color="white"
            className="hidden md:flex"
          />
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden   md:w-full bg-black absolute   w-full text-center shadow-md border-t z-10 ">
          <div className="lg:hidden px-4 flex flex-col items-center justify-center pt-2 pb-4 space-y-1">
             <NavLink
              to="/"
              //   onClick={toggleMenu}
              className=" block px-4 py-2 text-white hover:text-lime-400 font-medium tracking-wider"
            >
              HOME
            </NavLink>
            <NavLink
              to="/work"
              //   onClick={toggleMenu}
              className=" block px-4 py-2 text-white hover:text-lime-400 font-medium tracking-wider"
            >
              WORK
            </NavLink>
            <NavLink
              to="/contact"
              //   onClick={toggleMenu}
              className=" block px-4 py-2 text-white hover:text-lime-400 font-medium tracking-wider"
            >
              CONTACT
            </NavLink>
            {/* <NavLink
              to="/products"
            //   onClick={toggleMenu}
              className={({ isActive }) =>
                `block px-4 py-2 text-gray-600 hover:text-gray-800 font-medium ${
                  isActive ? "text-blue-600" : ""
                }`
              }
            >
              Products
            </NavLink> */}
            <button className=" bg-lime-400 flex justify-center items-center group  text-white px-5 py-2">
              <div className="w-6 transition-all h-0.5 bg-white mr-2   group-hover:w-0"></div>
              <span className="text-sm tracking-wider">
                {" "}
                GET FREE TEMPLATES
              </span>
              <div className="w-0 transition-all h-0.5 bg-white ml-2  group-hover:w-6"></div>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
