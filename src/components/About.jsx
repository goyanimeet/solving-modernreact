// import React, { useRef } from "react";
// import about1 from "../assets/images/image-1.webp";
// import about2 from "../assets/images/image-2.webp";
// import { motion } from "motion/react";
// const About = () => {
//   const draglimit = useRef();
//   const draglimit2 = useRef();
//   console.log(motion);
//   return (
//     <>
//       <div className="container mx-auto">
//         <div class=" w-full border-t-2 leading-10 py-5 ">
//           {/* <div class="marquee-inner flex justify-between *:text-4xl *:font-medium overflow-hidden">
//             <div class="marquee-item ">
//               <span className="px-2 text-4xl">·</span> SELECTED WORK
//             </div>
//             <div class="marquee-item">
//               <span className="px-2  text-4xl">·</span> SELECTED WORK
//             </div>
//             <div class="marquee-item">
//               <span className="px-2 text-4xl">·</span> SELECTED WORK
//             </div>
//             <div class="marquee-item">
//               <span className="px-2 text-4xl">·</span> SELECTED WORK
//             </div>
//             <div class="marquee-item">
//               <span className="px-2  text-4xl">·</span> SELECTED WORK
//             </div>
//             <div class="marquee-item">
//               <span className="px-2  text-4xl">·</span> SELECTED WORK
//             </div>
//             <div class="marquee-item">
//               <span className="px-2 text-4xl">·</span> SELECTED WORK
//             </div>
//             <div class="marquee-item">
//               <span className="px-2  text-4xl">·</span> SELECTED WORK
//             </div>
//           </div> */}
//           <div class="marquee">
//             <div class="marquee-content ">
//               <div class="marquee-item ">
//                 <span>·</span> SELECTED WORK
//               </div>
//               <div class="marquee-item">
//                 <span>·</span> SELECTED WORK
//               </div>
//               <div class="marquee-item">
//                 <span>·</span> SELECTED WORK
//               </div>
//               <div class="marquee-item">
//                 <span>·</span> SELECTED WORK
//               </div>
//             </div>
//             <div class="marquee-content">
//               <div class="marquee-item">
//                 <span>·</span> SELECTED WORK
//               </div>
//               <div class="marquee-item">
//                 <span>·</span> SELECTED WORK
//               </div>
//               <div class="marquee-item">
//                 <span>·</span> SELECTED WORK
//               </div>
//               <div class="marquee-item">
//                 <span>·</span> SELECTED WORK
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="h-auto flex justify-between w-full px-4 py-10">
//           <div className="w-1/2 px-2 relative group">
//             <div className="img1 " ref={draglimit}>
//               <img
//                 src={about1}
//                 alt=""
//                 className="h-auto flex items-center justify-between "
//               />
//               <motion.div
//                 initial={{ scale: 0.1 }}
//                 transition={{ duration: 1.2, ease: "easeInOut" }}
//                 whileInView={{ scale: 0.9, opacity: 1, ease: "easeInOut" }}
//                 onViewportEnter={{ once: true }}
//                 exit={{ scale: 0, opacity: 0, ease: "easeInOut" }}
//                 // animate={{ scale: 1 , opacity: 1 ,ease:"easeInOut"}}
//                 drag
//                 dragConstraints={{
//                   top: -50,
//                   left: -50,
//                   right: 50,
//                   bottom: 50,
//                 }}
//                 className="top-70 left-56 absolute group-hover:flex hidden transition-all    items-center justify-center  w-30 h-30 rounded-full bg-lime-300 z-1 p-10 font-semibold"
//               >
//                 VIEW
//               </motion.div>
//             </div>
//             <p className="text-2xl pt-2 font-stretch-10% font-semibold tracking-widest">
//               VISION BRANDING
//             </p>
//             <p className="text-sm font-medium tracking-widest">LOGO DESIGN</p>
//           </div>
//           <div className="w-1/2 px-2 relative group">
//             <div className="img2 " ref={draglimit2}>
//               <img
//                 src={about2}
//                 alt=""
//                 className="h-auto flex items-center justify-between "
//               />
//               <motion.div
//                 initial={{ scale: 0.1 }}
//                 transition={{ duration: 1.2, ease: "easeInOut" }}
//                 whileInView={{ scale: 0.9, opacity: 1, ease: "easeInOut" }}
//                 onViewportEnter={{ once: true }}
//                 exit={{ scale: 0, opacity: 0, ease: "easeInOut" }}
//                 // animate={{ scale: 1 , opacity: 1 ,ease:"easeInOut"}}
//                 drag
//                 dragConstraints={{
//                   top: -50,
//                   left: -50,
//                   right: 50,
//                   bottom: 50,
//                 }}
//                 className="top-70 left-56 absolute group-hover:flex hidden transition-all    items-center justify-center  w-30 h-30 rounded-full bg-lime-300 z-1 p-10 font-semibold"
//               >
//                 VIEW
//               </motion.div>
//             </div>
//             <p className="text-2xl pt-2 font-stretch-10% font-semibold tracking-widest">
//               BRAND STUDIO
//             </p>
//             <p className="text-sm font-medium tracking-widest"> BRANDING</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;



// 
import React, { useRef } from "react";
import about1 from "../assets/images/image-1.webp";
import about2 from "../assets/images/image-2.webp";
import { motion } from "motion/react";

const About = () => {
  const draglimit = useRef();
  const draglimit2 = useRef();
console.log(motion)
  return (
    <>
      <div className="container mx-auto">
        {/* Marquee Section */}
        <div className="w-full border-t-2 leading-10 py-5 overflow-hidden">
          <div className="marquee">
            <div className="marquee-content">
              <div className="marquee-item">
                <span className="px-1 sm:px-2">·</span> SELECTED WORK
              </div>
              <div className="marquee-item">
                <span className="px-1 sm:px-2">·</span> SELECTED WORK
              </div>
              <div className="marquee-item">
                <span className="px-1 sm:px-2">·</span> SELECTED WORK
              </div>
              <div className="marquee-item">
                <span className="px-1 sm:px-2">·</span> SELECTED WORK
              </div>
            </div>
            <div className="marquee-content">
              <div className="marquee-item">
                <span className="px-1 sm:px-2">·</span> SELECTED WORK
              </div>
              <div className="marquee-item">
                <span className="px-1 sm:px-2">·</span> SELECTED WORK
              </div>
              <div className="marquee-item">
                <span className="px-1 sm:px-2">·</span> SELECTED WORK
              </div>
              <div className="marquee-item">
                <span className="px-1 sm:px-2">·</span> SELECTED WORK
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Items */}
        <div className="h-auto flex flex-col lg:flex-row justify-between w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          {/* First Portfolio Item */}
          <div className="w-full lg:w-1/2 px-2 sm:px-4 mb-8 lg:mb-0 relative group">
            <div className="img1 relative overflow-hidden rounded-lg" ref={draglimit}>
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
                drag
                dragConstraints={draglimit}
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
            <div className="img2 relative overflow-hidden rounded-lg" ref={draglimit2}>
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
                drag
                dragConstraints={draglimit2}
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

      <style jsx>{`
        /* Marquee Animation */
        .marquee {
          display: flex;
          overflow: hidden;
          user-select: none;
          gap: 0;
        }

        .marquee-content {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 0;
          min-width: 100%;
          animation: scroll 20s linear infinite;
        }

        .marquee-content:nth-child(2) {
          animation: scroll2 20s linear infinite;
          animation-delay: -10s;
        }

        .marquee-item {
          display: flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          font-size: clamp(1rem, 2vw, 1.5rem);
          font-weight: 500;
          padding: 0 0.5rem;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        @keyframes scroll2 {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        /* Pause animation on hover */
        .marquee:hover .marquee-content {
          animation-play-state: paused;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .marquee-item {
            font-size: 1rem;
          }
        }

        @media (max-width: 768px) {
          .marquee-content {
            animation-duration: 15s;
          }
          
          .marquee-content:nth-child(2) {
            animation-duration: 15s;
          }
        }
      `}</style>
    </>
  );
};

export default About;