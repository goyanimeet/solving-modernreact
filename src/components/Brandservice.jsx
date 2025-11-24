import React from "react";
import servicestar from "../assets/images/service-star.svg";
import emp from '../assets/images/worker.webp'

const Brandservice = () => {
  return (
    <>
      {/* <div className="container mx-auto">
        <div className="px-4 flex py-20 w-full">
          <div className="w-1/2">
            <img src={servicestar} alt="" />
            <p className="font-semibold text-7xl tracking-wide lending-4">
              BRAND
            </p>
            <p className="font-semibold text-7xl tracking-wide lending-4">
              SERVICES
            </p>
            <div className="emp py-5 flex items-center">
                <div className="h-20 w-20">
              <img src={emp} alt="" className="h-auto" />

              </div>
              <div className="px-2 ">
                <p className="text-2xl font-bold   font-stretch-100%">FINN SOLVING</p>
                <p className="text-sm  font-stretch-100%">BRAND DESIGNER</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-auto py-3 relative *:my-4 ">
            <div className="card1 sticky top-1 bg-gray-100 p-10">
              <div className="flex items-center py-4 ">
                <img src={servicestar} alt="image not found" />
                <p className="font-medium text-4xl px-2">BRAND DESIGN</p>
              </div>
              <p className="font-light text-xl leading-8 tracking-wide">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et
                ligula. Massa tempor nec feugiat nisl.
              </p>
            </div>
            <div className="card2 sticky top-1 leading-8 bg-gray-100 p-10">
              <div className="flex items-center py-4 ">
                <img src={servicestar} alt="image not found" />
                <p className="font-medium text-4xl px-2">LOGO DESIGN</p>
              </div>
              <p className="font-light text-xl tracking-wide">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et
                ligula. Massa tempor nec feugiat nisl.
              </p>
            </div>
            <div className="card3 sticky top-1 leading-8  bg-gray-100 p-10">
              <div className="flex items-center py-4 ">
                <img src={servicestar} alt="image not found" />
                <p className="font-medium text-4xl px-2">SOCIAL MEDIA</p>
              </div>
              <p className="font-light text-xl tracking-wide">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et
                ligula. Massa tempor nec feugiat nisl.
              </p>
            </div>
          </div>
          
        </div>
      </div> */}
    {/* <div className="container mx-auto">
      <div className="px-4 flex flex-col md:flex-row py-12 md:py-20 w-full">
        <div className="w-full md:w-1/2">
          <img
            src={servicestar}
            alt="Service star"
            className="w-full max-w-[520px] h-auto object-contain"
          />
          <p className="font-semibold text-4xl md:text-6xl lg:text-7xl tracking-wide leading-tight">
            BRAND
          </p>
          <p className="font-semibold text-4xl md:text-6xl lg:text-7xl tracking-wide leading-tight">
            SERVICES
          </p>
          <div className="emp py-5 flex items-center gap-4">
            <div className="h-12 w-12 md:h-20 md:w-20">
              <img
                src={emp}
                alt="Employee"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
            <div className="px-2 ">
              <p className="text-lg md:text-2xl font-bold">FINN SOLVING</p>
              <p className="text-xs md:text-sm">BRAND DESIGNER</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-auto py-3 relative md:my-4">
          <div className="card1 bg-gray-100 p-6 md:p-10 md:sticky md:top-20 rounded-lg">
            <div className="flex items-center py-4 ">
              <img src={servicestar} alt="Service star" className="w-10 h-10 object-contain" />
              <p className="font-medium text-xl md:text-4xl px-2">BRAND DESIGN</p>
            </div>
            <p className="font-light text-sm md:text-base lg:text-xl leading-6 md:leading-8 tracking-wide text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo
              quis imperdiet massa tincidunt nunc pulvinar sapien et ligula.
              Massa tempor nec feugiat nisl.
            </p>
          </div>

          <div className="card2 bg-gray-100 p-6 md:p-10 md:sticky md:top-36 md:leading-8 rounded-lg mt-6">
            <div className="flex items-center py-4 ">
              <img src={servicestar} alt="Service star" className="w-10 h-10 object-contain" />
              <p className="font-medium text-xl md:text-4xl px-2">LOGO DESIGN</p>
            </div>
            <p className="font-light text-sm md:text-base leading-6 md:leading-8 tracking-wide text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo
              quis imperdiet massa tincidunt nunc pulvinar sapien et ligula.
              Massa tempor nec feugiat nisl.
            </p>
          </div>

          <div className="card3 bg-gray-100 p-6 md:p-10 md:sticky md:top-52 md:leading-8 rounded-lg mt-6">
            <div className="flex items-center py-4 ">
              <img src={servicestar} alt="Service star" className="w-10 h-10 object-contain" />
              <p className="font-medium text-xl md:text-4xl px-2">SOCIAL MEDIA</p>
            </div>
            <p className="font-light text-sm md:text-base leading-6 md:leading-8 tracking-wide text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo
              quis imperdiet massa tincidunt nunc pulvinar sapien et ligula.
              Massa tempor nec feugiat nisl.
            </p>
          </div>
        </div>
      </div>
    </div> */}
      <div className="container mx-auto">
      <div className="px-4 flex relative flex-col items-start md:flex-row py-12 md:py-20 w-full">
        <div className="w-full sticky top-0  md:w-1/2">
          <img
            src={servicestar}
            alt="Service star"
            className="h-auto"
          />
          <p className="font-semibold text-4xl md:text-6xl lg:text-7xl tracking-wide leading-tight">
            BRAND
          </p>
          <p className="font-semibold text-4xl md:text-6xl lg:text-7xl tracking-wide leading-tight">
            SERVICES
          </p>
          <div className="emp py-5 flex items-end gap-4">
            <div className="h-12 w-12 md:h-20 md:w-20">
              <img
                src={emp}
                alt="Employee"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
            <div className="px-2 ">
              <p className="text-lg md:text-2xl font-bold">FINN SOLVING</p>
              <p className="text-xs md:text-sm">BRAND DESIGNER</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-auto py-3 relative md:my-4">
          {/* Sticky on ALL devices now (no md: prefix). */}
          <div className="card1 bg-gray-100 p-6 md:p-10 sticky top-1 rounded-lg">
            <div className="flex items-center py-4 ">
              <img
                src={servicestar}
                alt="Service star"
                className="w-10 h-10 object-contain"
              />
              <p className="font-medium text-xl md:text-4xl px-2">BRAND DESIGN</p>
            </div>
            <p className="font-light text-sm md:text-base lg:text-xl leading-6 md:leading-8 tracking-wide text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo
              quis imperdiet massa tincidunt nunc pulvinar sapien et ligula.
              Massa tempor nec feugiat nisl.
            </p>
          </div>

          <div className="card2 bg-gray-100 p-6 md:p-10 sticky top-1 leading-8 rounded-lg mt-6">
            <div className="flex items-center py-4 ">
              <img
                src={servicestar}
                alt="Service star"
                className="w-10 h-10 object-contain"
              />
              <p className="font-medium text-xl md:text-4xl px-2">LOGO DESIGN</p>
            </div>
            <p className="font-light text-sm md:text-base leading-6 md:leading-8 tracking-wide text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo
              quis imperdiet massa tincidunt nunc pulvinar sapien et ligula.
              Massa tempor nec feugiat nisl.
            </p>
          </div>

          <div className="card3 bg-gray-100 p-6 md:p-10 sticky -top-10 leading-8 rounded-lg mt-6">
            <div className="flex items-center py-4 ">
              <img
                src={servicestar}
                alt="Service star"
                className="w-10 h-10 object-contain"
              />
              <p className="font-medium text-xl md:text-4xl px-2">SOCIAL MEDIA</p>
            </div>
            <p className="font-light text-sm md:text-base leading-6 md:leading-8 tracking-wide text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo
              quis imperdiet massa tincidunt nunc pulvinar sapien et ligula.
              Massa tempor nec feugiat nisl.
            </p>
          </div>
        </div>
      </div>
    </div>

      
    </>
  );
};

export default Brandservice;
