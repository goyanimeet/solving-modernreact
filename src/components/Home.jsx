import React from "react";
import heroimg from "../assets/images/home-text.svg";
import homeimg from "../assets/images/home-image.webp";
import { motion } from "motion/react";
import LocomotiveScroll from "locomotive-scroll";
const Home = () => {
  console.log(motion);
   const scroll = new LocomotiveScroll();
    console.log(scroll)
  return (
    <>
      <div data-scroll data-scroll-speed="1"  className="mx-auto container">
        <div className="h-auto  w-full px-4">
          <div className="relative overflow-hidden py-35 max-lg:py-25 max-md:py-18 max-sm:py-16  ">
            <motion.img
              initial={{
                y: 100,
                opacity: 0,
              }}
                    viewport={{once:true}}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{ duration: 1, ease: "backInOut" }}
              src={heroimg}
              alt=""
              className=" absolute top-0 h-auto pt-8 px-4"
            />
          </div>

          <div className="relative overflow-hidden py-10 max-lg:py-10 max-md:py-8  max-sm:py-7">
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
              className="text-6xl absolute top-0  pb-10 pt-2 tracking-tight font-extrabold px-4 max-lg:text-5xl max-md:text-4xl max-sm:text-xl"
            >
              {" "}
              BRAND DESIGNER FROM BERLIN
            </motion.p>
          </div>

          <div className="flex items-center justify-between bg-lime-300  py-2">
            {/* <marquee >Branding · Logo Design · Social MEdia · Branding · Logo Design · Social MEdia · Branding · Logo Design · Social MEdia · Branding · Logo Design · Social MEdia</marquee> */}
            <div class="logo-marquee ">
              <div class="marquee-inner flex font-medium justify-between">
                <div class="marquee-item">
                  BRANDING · LOGO DESIGN · SOCIAL MEDIA
                </div>
                <div class="marquee-item">
                  BRANDING · LOGO DESIGN · SOCIAL MEDIA
                </div>
                <div class="marquee-item">
                  BRANDING · LOGO DESIGN · SOCIAL MEDIA
                </div>
                <div class="marquee-item">
                  BRANDING · LOGO DESIGN · SOCIAL MEDIA
                </div>
                <div class="marquee-item">
                  BRANDING · LOGO DESIGN · SOCIAL MEDIA
                </div>
                <div class="marquee-item">
                  BRANDING · LOGO DESIGN · SOCIAL MEDIA
                </div>
                <div class="marquee-item">
                  BRANDING · LOGO DESIGN · SOCIAL MEDIA
                </div>
                <div class="marquee-item">
                  BRANDING · LOGO DESIGN · SOCIAL MEDIA
                </div>
                   <div class="marquee-item">
                  BRANDING · LOGO DESIGN · SOCIAL MEDIA
                </div>
                <div class="marquee-item">
                  BRANDING · LOGO DESIGN · SOCIAL MEDIA
                </div>
               
              </div>
            </div>
          </div>
          <div className="  h-auto w-full ">
            <img src={homeimg} alt="" className=" h-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
