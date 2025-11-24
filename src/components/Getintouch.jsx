import React from 'react'
import servicestar from "../assets/images/service-star.svg"
import { NavLink } from 'react-router-dom';
const Getintouch = () => {
  return (
    <>
      <div className='container mx-auto'>
        <div className="flex items-center justify-between bg-lime-300  py-2">
            {/* <marquee >Branding · Logo Design · Social MEdia · Branding · Logo Design · Social MEdia · Branding · Logo Design · Social MEdia · Branding · Logo Design · Social MEdia</marquee> */}
            <div class="logo-marquee ">
              <div class="marquee-inner flex font-medium justify-between">
                <div class="marquee-item">
                 · LET'S WORK TO TOGATHER  
                </div>
                <div class="marquee-item">
                · LET'S WORK TO TOGATHER  
                </div>
                <div class="marquee-item">
                 · LET'S WORK TO TOGATHER  
                </div>
                <div class="marquee-item">
                 · LET'S WORK TO TOGATHER  
                </div>
                <div class="marquee-item">
                  · LET'S WORK TO TOGATHER  
                </div>
                <div class="marquee-item">
                 · LET'S WORK TO TOGATHER  
                </div>
                <div class="marquee-item">
                 · LET'S WORK TO TOGATHER  
                </div>
                <div class="marquee-item">
                  · LET'S WORK TO TOGATHER  
                </div>
             
              </div>
            </div>
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
          <img
            src={servicestar}
            alt="Service star"
            className="h-auto object-contain"
            draggable="false"
          />
        </div>

        {/* Headings: use clamp for smooth scaling but cap min/max so layout remains stable */}
        <div className="py-4">
          <h1
            className="font-semibold text-white leading-tight"
            style={{
              fontSize: "clamp(1.6rem, 6vw, 4.5rem)"
            }}
          >
            LET&apos;S CREATE
          </h1>
          <h2
            className="font-semibold text-white leading-tight"
            style={{
              fontSize: "clamp(1.6rem, 6vw, 4.5rem)"
            }}
          >
            YOUR NEW BRAND
          </h2>
        </div>

        {/* CTA: keep a stable core layout using flex and limiting growth */}
        <div className="mt-4">
          <button
            className="inline-flex items-center gap-3 px-6 py-3  bg-lime-400 text-black font-medium group transition-transform transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-300"
            aria-label="Get in touch"
            type="button"
          >
            <div className="w-6 h-px bg-black transition-all group-hover:w-0" />
            <span className="text-sm tracking-wider whitespace-nowrap">
              <NavLink to="contact">
              GET IN TOUCH
              </NavLink>
            </span>
            <div className="w-0 h-px bg-black transition-all group-hover:w-6" />
          </button>
        </div>
      </div>
    </section>
      </div>
    </>
  )
}

export default Getintouch
