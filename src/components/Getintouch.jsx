import React from "react";
import servicestar from "../assets/images/service-star.svg";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
const Getintouch = () => {
  console.log(motion);
  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center justify-between bg-lime-300  py-2">
          {/* <marquee >Branding · Logo Design · Social MEdia · Branding · Logo Design · Social MEdia · Branding · Logo Design · Social MEdia · Branding · Logo Design · Social MEdia</marquee> */}

          <marquee
            behavior=""
            loop
            direction="left"
            className="text-sm tracking-widest"
          >
            {" "}
            <span className="px-2">· </span>LET'S WORK TO TOGATHER{" "}
            <span className="px-2">· </span>LET'S WORK TO TOGATHER{" "}
            <span className="px-2">· </span>LET'S WORK TO TOGATHER{" "}
            <span className="px-2">· </span> LET'S WORK TO TOGATHER{" "}
            <span className="px-2">· </span> LET'S WORK TO TOGATHER{" "}
            <span className="px-2">· </span> LET'S WORK TO TOGATHER{" "}
            <span className="px-2">· </span> LET'S WORK TO TOGATHER{" "}
            <span className="px-2">· </span>LET'S WORK TO TOGATHER{" "}
            <span className="px-2">· </span>LET'S WORK TO TOGATHER{" "}
          </marquee>
        </div>

        {/* my own created */}
        {/* <div className='bg-black flex flex-col py-25 items-center justify-center'>
            <div className=''>
                <img src={servicestar} alt="" />
            </div>
            <div className='py-4'>
                <p className='text-7xl font-semibold text-white text-center font-stretch-100% '>LET'S CREATE</p>
                <p className='text-7xl font-semibold text-white text-center  font-stretch-100%'>YOUR NEW BRAND </p>
            </div>
            <div>
                 <button className=" bg-lime-400 flex justify-center items-center group  text-black px-8 py-3">
              <div className="w-6 transition-all h-px bg-black mr-2   group-hover:w-0"></div>
              <span className="text-sm tracking-wider">
                {" "}
                GET IN TOUCH
              </span>
              <div className="w-0 transition-all h-px bg-black ml-2  group-hover:w-6"></div>
            </button>
            </div>
        </div> */}

        {/* apply the change with chatgpt */}
        <section className="bg-black flex items-center justify-center py-12 sm:py-16 md:py-24">
          {/* outer container keeps padding and centers */}
          <div className="w-full max-w-4xl px-4 flex flex-col items-center text-center">
            {/* Logo / image */}
            <div className="">
              <motion.img
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "backInOut" }}
                viewport={{ once: true }}
                src={servicestar}
                alt="Service star"
                className="h-auto object-contain"
                draggable="false"
              />
            </div>

            {/* Headings: use clamp for smooth scaling but cap min/max so layout remains stable */}
            <div className="py-4">
              <div className="relative overflow-hidden flex justify-center items-center max-sm:pb-5 ">
                <motion.h1
                  initial={{
                    y: 50,
                    opacity: 0,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "backInOut" }}
                  className="font-semibold  sticky top-0  text-white leading-tight"
                  style={{
                    fontSize: "clamp(1.6rem, 6vw, 4.5rem)",
                  }}
                >
                  LET'S CREATE
                </motion.h1>
              </div>
              <div className="relative  overflow-hidden flex justify-center items-center max-sm:pb-5 ">
                <motion.h2
                  initial={{
                    y: 50,
                    opacity: 0,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "backInOut" }}
                  className="font-semibold  sticky top-0 text-white leading-tight"
                  style={{
                    fontSize: "clamp(1.6rem, 6vw, 4.5rem)",
                  }}
                >
                  YOUR NEW BRAND
                </motion.h2>
              </div>
            </div>

            {/* CTA: keep a stable core layout using flex and limiting growth */}
            <div className="mt-4">
              <motion.button
                initial={{
                  y: 50,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "backInOut" }}
                className="inline-flex items-center gap-3 px-6 py-3  bg-lime-400 text-black font-medium group transition-transform transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-300"
                aria-label="Get in touch"
                type="button"
              >
                <div className="w-6 h-px bg-black transition-all group-hover:w-0" />
                <span className="text-sm tracking-wider whitespace-nowrap">
                  <NavLink to="contact">GET IN TOUCH</NavLink>
                </span>
                <div className="w-0 h-px bg-black transition-all group-hover:w-6" />
              </motion.button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Getintouch;
