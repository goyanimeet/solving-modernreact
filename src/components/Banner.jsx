import React from "react";
import logo1 from "../assets/images/marlogo1.svg";
import logo2 from "../assets/images/marlogo2.svg";
import logo3 from "../assets/images/marlogo3.svg";
import logo4 from "../assets/images/marlogo4.svg";
import logo5 from "../assets/images/marlogo5.svg";
import { motion } from "motion/react";
import LocomotiveScroll from "locomotive-scroll";
import CountUp from "./CountUp";
const Banner = () => {
  console.log(motion);
  const scroll = new LocomotiveScroll();
  console.log(scroll);
  return (
    <>
      {/* <div className="flex justify-between pt-10 px-4 ">
        <div className="flex items-center justify-between flex-col">
          <div className="h-0.5 w-full bg-black"></div>
          <p className="py-2 text-sm tracking-wide text-start">CLIENTS </p>
          <p className="text-6xl font-bold text-start flex items-center justify-center ">
            200 <span className="text-lime-300 font-bold text-6xl mon">+</span>
          </p>
        </div>
        <div className="flex items-center justify-between flex-col">
          <div className="h-0.5 w-full bg-black"></div>
          <p className="py-2 text-sm tracking-wide text-start ">PROJECTS </p>
          <p className="text-6xl font-bold text-start  flex items-center justify-center">
            300 <span className="text-lime-300 font-bold text-6xl">+</span>
          </p>
        </div>
        <div className="flex items-center justify-between flex-col">
          <div className="h-0.5 w-full bg-black"></div>
          <p className="py-2 text-sm tracking-wide text-start">FOLLOWER </p>
          <p className="text-6xl font-bold text-start  flex items-center justify-center">
            90 <span className="text-lime-300 font-bold text-6xl mon">K</span>
          </p>
        </div>
        <div className="flex items-center justify-between flex-col">
          <div className="h-0.5 w-full bg-black"></div>
          <p className="py-2 text-sm tracking-wide text-start">HAPPY CUSTOMER </p>
          <p className="text-6xl font-bold text-start  flex items-center justify-center">
            100 <span className="text-lime-300 font-bold text-6xl mon">%</span>
          </p>
        </div>
      </div> */}
      <div data-scroll data-scroll-speed="1" className="container mx-auto">
        <div className="flex flex-wrap justify-between py-15 px-4  max-md:py-10 md:px-8 lg:px-4">
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: "easeIn",
            }}
            className="w-full px-3 sm:w-1/4 md:w-1/4 flex flex-col items-start "
          >
            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: "100%",
              }}
              transition={{
                duration: 1,
                ease: "linear",
              }}
              viewport={{ once: true }}
              className="h-0.5 w-full bg-black"
            ></motion.div>
            <p className="py-2 text-xs sm:text-sm tracking-wide">CLIENTS</p>
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold flex items-center">
              <CountUp
                from={0}
                to={200}
                separator=","
                direction="up"
                duration={1}
                
                className="count-up-text"
              />{" "}
              <span className="text-lime-300 ml-1">+</span>
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: "easeIn",
            }}
            className="w-full px-3 sm:w-1/4 md:w-1/4 flex flex-col items-start "
          >
            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: "100%",
              }}
              transition={{
                duration: 1,
                ease: "linear",
              }}
              viewport={{ once: true }}
              className="h-0.5 w-full bg-black"
            ></motion.div>
            <p className="py-2 text-xs sm:text-sm tracking-wide">PROJECTS</p>
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold flex items-center">
              <CountUp
                from={0}
                to={300}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />{" "}
              <span className="text-lime-300 ml-1">+</span>
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: "easeIn",
            }}
            className="w-full px-3 sm:w-1/4 md:w-1/4 flex flex-col items-start "
          >
            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: "100%",
              }}
              transition={{
                duration: 1,
                ease: "linear",
              }}
              viewport={{ once: true }}
              className="h-0.5 w-full bg-black"
            ></motion.div>
            <p className="py-2 text-xs sm:text-sm tracking-wide">FOLLOWER</p>
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold flex items-center">
              <CountUp
                from={0}
                to={90}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />{" "}
              <span className="text-lime-300 ml-1">K</span>
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: "easeIn",
            }}
            className="w-full px-3 sm:w-1/4 md:w-1/4 flex flex-col items-start "
          >
            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: "100%",
              }}
              transition={{
                duration: 1,
                ease: "linear",
              }}
              viewport={{ once: true }}
              className="h-0.5 w-full bg-black"
            ></motion.div>
            <p className="py-2 text-xs sm:text-sm tracking-wide">
              HAPPY CUSTOMER
            </p>
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold flex items-center">
              <CountUp
                from={0}
                to={100}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />{" "}
              <span className="text-lime-300 ml-1">%</span>
            </p>
          </motion.div>
        </div>

        {/* my client */}
        <div className=" w-full flex  items-center justify-center py-2  max-md:py-0 max-sm:inline-flex  ">
          <div className="flex items-center  w-[30%]  px-4 max-sm:px-6">
            <div className="h-0.5 w-10 bg-black"></div>
            <p className="px-2">MY CLINETS</p>
          </div>
          <div className="py-2 w-full max-sm:py-0.5 overflow-hidden">
            <div className="logo-marquee flex">
              <div className="marquee-inner  flex font-medium justify-between items-center ">
                <div className="marquee-item">
                  <img src={logo1} alt="" className="h-auto " />
                </div>
                <div className="marquee-item">
                  <img src={logo2} alt="" className="h-auto " />
                </div>
                <div className="marquee-item">
                  <img src={logo3} alt="" className="h-auto " />
                </div>
                <div className="marquee-item">
                  <img src={logo4} alt="" className="h-auto " />
                </div>
                <div className="marquee-item">
                  <img src={logo5} alt="" className="h-auto " />
                </div>
                <div className="marquee-item">
                  <img src={logo1} alt="" className="h-auto  " />
                </div>
                <div className="marquee-item">
                  <img src={logo2} alt="" className="h-auto " />
                </div>
                <div className="marquee-item">
                  <img src={logo3} alt="" className="h-auto " />
                </div>
                <div className="marquee-item">
                  <img src={logo4} alt="" className="h-auto " />
                </div>
                <div className="marquee-item">
                  <img src={logo5} alt="" className="h-auto " />
                </div>
                <div className="marquee-item">
                  <img src={logo1} alt="" className="h-auto  " />
                </div>
                <div className="marquee-item">
                  <img src={logo2} alt="" className="h-auto " />
                </div>
                <div className="marquee-item">
                  <img src={logo3} alt="" className="h-auto " />
                </div>
                <div className="marquee-item">
                  <img src={logo4} alt="" className="h-auto " />
                </div>
                <div className="marquee-item">
                  <img src={logo5} alt="" className="h-auto " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
