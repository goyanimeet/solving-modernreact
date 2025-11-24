import React from "react";
import logo from "../assets/images/icon.svg";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="bg-black w-full pb-10 flex max-sm:block justify-between ">
          <div className="logo w-fit p-4">
            <img src={logo} alt="" />
          </div>
          <div className="pages w-fit p-4 *:text-white">
            <p className="text-2xl pb-5">PAGES</p>
            <NavLink to="/home" className="block py-1 group">
              <p className="text-gray-300 group-hover:text-white"> HOME</p>
              <div className="w-0 group-hover:w-10 bg-white h-px transition-all"></div>
            </NavLink>
            <NavLink to="/work" className="block py-1 group">
              <p className="text-gray-300 group-hover:text-white">WORK</p>
              <div className="w-0 group-hover:w-10 bg-white h-px transition-all"></div>
            </NavLink>
            <NavLink to="/work" className="block py-1 group">
              <p className="text-gray-300 group-hover:text-white">
                WORK SINGLE
              </p>
              <div className="w-0 group-hover:w-full bg-white h-px transition-all"></div>
            </NavLink>
          </div>
          <div className="utilitypages   w-fit p-4 *:text-white">
            <p className="text-2xl pb-5">UTILITY PAGES</p>
              <NavLink to="/pagenotfound" className="block py-1 group">
              <p className="text-gray-300 group-hover:text-white"> 404 ERROR PAGE</p>
              <div className="w-0 group-hover:w-26 bg-white h-px transition-all"></div>
            </NavLink>
            <NavLink to="/#" className="block py-1 group">
              <p className="text-gray-300 group-hover:text-white">PASSWORD PROTECTED</p>
              <div className="w-0 group-hover:w-34 bg-white h-px transition-all"></div>
            </NavLink>
            <NavLink to="/#" className="block py-1 group">
              <p className="text-gray-300 group-hover:text-white">
                STYLE GUIDE
              </p>
              <div className="w-0 group-hover:w-20 bg-white h-px transition-all"></div>
            </NavLink>
               <NavLink to="/#" className="block py-1 group">
              <p className="text-gray-300 group-hover:text-white">
                LIECENSNG
              </p>
              <div className="w-0 group-hover:w-18 bg-white h-px transition-all"></div>
            </NavLink>
          </div>
        </div>   
      </div>
    </>
  );
};

export default Footer;


