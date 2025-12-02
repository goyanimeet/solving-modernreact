// import React from 'react'
// import circle from "../assets/images/banner-circle.svg"
// import { motion,scroll  } from "motion/react";
// const Bannercircle = () => {
//     console.log(motion);
//     console.log("on scroll is ",scroll)

//   return (
//     <>
//      <div className='h-auto relative w-full'>
//         <motion.img
//             initial={{ rotate:"45deg" }}

//             transition={{duration:5, ease:"backInOut"}}
//             viewport={{onScroll:true}}
//         src={circle} alt="img not found " className='  fixed  h-auto right-3 z-10 bottom-6' />
//         </div>
//     </>
//   )
// }

// export default Bannercircle

// chatgpt code:-
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform, useSpring } from "motion/react"; // or "framer-motion", depending on your setup
// import circle from "../assets/images/banner-circle.svg";

// const BannerCircle = () => {
//   const ref = useRef(null);
//   console.log(motion);
//   // Get scroll progress (0 to 1) relative to the page
//   const { scrollYProgress } = useScroll(); // tracks page scroll :contentReference[oaicite:3]{index=3}

//   // Map scroll progress to a rotation value, e.g., 0deg → 360deg
//   const rotateRaw = useTransform(scrollYProgress, [0, 1], ["0deg", "360deg"]); // :contentReference[oaicite:4]{index=4}

//   // Smooth the rotation using a spring, so the rotation "lags" a little when scroll stops
//   const rotate = useSpring(rotateRaw, {
//     stiffness: 50,
//     damping: 20,
    
//   });

//   return (
//     <>
//       <div ref={ref} className="h-auto relative w-full">
//         <motion.img
//           style={{
//             rotate: rotate, // bind the motion value
//             transformOrigin: "center center", // ensure the rotation center
//           }}
//           src={circle}
//           alt="img not found"
//           className="fixed h-auto right-3 z-10 bottom-6"
//         />
//       </div>
//     </>
//   );
// };

// export default BannerCircle;


import React, { useEffect, useState } from 'react';
import circle from "../assets/images/banner-circle.svg";
const BannerCircle = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const pageHeight = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollY / pageHeight, 1);
      setRotate(progress * 360);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <img
      src={circle}
      alt="circle"
      style={{
        transform: `rotate(${rotate}deg)`,
        transformOrigin: 'center center',
        position: 'fixed',
        right: '1rem',
        bottom: '1.5rem',
        zIndex: 10,
      }}
    />
  );
};
export default BannerCircle;