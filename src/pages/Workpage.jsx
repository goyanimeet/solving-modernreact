import React from "react";
import { motion } from "motion/react";
import about1 from "../assets/images/image-1.webp";
import about2 from "../assets/images/image-2.webp";
import about3 from "../assets/images/image-3.webp";
import about4 from "../assets/images/image-4.webp"
import Footer from "../components/Footer";
import Getintouch from "../components/Getintouch";
const   Workpage = () => {
  console.log(motion);
  return (
    <>
      <div className="container mx-auto">
        <div className="py-10 px-4 h-auto">
          <motion.div className="relative flex justify-center overflow-hidden py-12 items-center max-sm:py-8">
            <motion.p
              initial={{
                y: 50,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{ duration: 1, ease: "backInOut" }}
              className="text-8xl absolute top-0 font-semibold text-center tracking-wide max-sm:text-6xl"
            >
              WORK
            </motion.p>
          </motion.div>
        </div>
        <div className="h-auto flex flex-col lg:flex-row justify-between w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          {/* First Portfolio Item */}
          <div className="w-full lg:w-1/2 px-2 sm:px-4 mb-8 lg:mb-0 relative group">
            <div className="img1 relative overflow-hidden ">
              <img
                src={about1}
                alt="Vision Branding Project"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <motion.div
                initial={{ scale: 0.1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                whileInView={{ scale: 1, opacity: 1, ease: "easeInOut" }}
                onViewportEnter={{ once: true }}
                exit={{ scale: 0, opacity: 0, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                 group-hover:flex hidden transition-all items-center justify-center 
                                 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-lime-300 
                                 z-10 p-4 font-semibold cursor-grab active:cursor-grabbing
                                 text-xs sm:text-sm md:text-base"
              >
                VIEW
              </motion.div>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl pt-3 sm:pt-4 font-semibold tracking-wide sm:tracking-widest">
              VISION BRANDING
            </p>
            <p className="text-xs sm:text-sm font-medium tracking-wide sm:tracking-widest text-gray-600">
              LOGO DESIGN
            </p>
          </div>

          {/* Second Portfolio Item */}
          <div className="w-full lg:w-1/2 px-2 sm:px-4 relative group">
            <div className="img2 relative overflow-hidden ">
              <img
                src={about2}
                alt="Brand Studio Project"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <motion.div
                initial={{ scale: 0.1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                whileInView={{ scale: 1, opacity: 1, ease: "easeInOut" }}
                onViewportEnter={{ once: true }}
                exit={{ scale: 0, opacity: 0, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                 group-hover:flex hidden transition-all items-center justify-center 
                                 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-lime-300 
                                 z-10 p-4 font-semibold cursor-grab active:cursor-grabbing
                                 text-xs sm:text-sm md:text-base"
              >
                VIEW
              </motion.div>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl pt-3 sm:pt-4 font-semibold tracking-wide sm:tracking-widest">
              BRAND STUDIO
            </p>
            <p className="text-xs sm:text-sm font-medium tracking-wide sm:tracking-widest text-gray-600">
              BRANDING
            </p>
          </div>
        </div>
        <div className="h-auto flex flex-col lg:flex-row justify-between w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          {/* First Portfolio Item */}
          <div className="w-full lg:w-1/2 px-2 sm:px-4 mb-8 lg:mb-0 relative group">
            <div className="img1 relative overflow-hidden ">
              <img
                src={about3}
                alt="Vision Branding Project"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <motion.div
                initial={{ scale: 0.1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                whileInView={{ scale: 1, opacity: 1, ease: "easeInOut" }}
                onViewportEnter={{ once: true }}
                exit={{ scale: 0, opacity: 0, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                         group-hover:flex hidden transition-all items-center justify-center 
                                         w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-lime-300 
                                         z-10 p-4 font-semibold cursor-grab active:cursor-grabbing
                                         text-xs sm:text-sm md:text-base"
              >
                VIEW
              </motion.div>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl pt-3 sm:pt-4 font-semibold tracking-wide sm:tracking-widest">
              VISION BRANDING
            </p>
            <p className="text-xs sm:text-sm font-medium tracking-wide sm:tracking-widest text-gray-600">
              LOGO DESIGN
            </p>
          </div>

          {/* Second Portfolio Item */}
          <div className="w-full lg:w-1/2 px-2 sm:px-4 relative group">
            <div className="img2 relative overflow-hidden ">
              <img
                src={about4}
                alt="Brand Studio Project"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <motion.div
                initial={{ scale: 0.1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                whileInView={{ scale: 1, opacity: 1, ease: "easeInOut" }}
                onViewportEnter={{ once: true }}
                exit={{ scale: 0, opacity: 0, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                         group-hover:flex hidden transition-all items-center justify-center 
                                         w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-lime-300 
                                         z-10 p-4 font-semibold cursor-grab active:cursor-grabbing
                                         text-xs sm:text-sm md:text-base"
              >
                VIEW
              </motion.div>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl pt-3 sm:pt-4 font-semibold tracking-wide sm:tracking-widest">
              BRAND STUDIO
            </p>
            <p className="text-xs sm:text-sm font-medium tracking-wide sm:tracking-widest text-gray-600">
              BRANDING
            </p>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Workpage;
