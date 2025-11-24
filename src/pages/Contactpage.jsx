// import React from "react";
// import emp from "../assets/images/worker.webp";

// const Contactpage = () => {
//   return (
//     <>
//       <div className="mx-auto container">
//         {/* original code don't change */}
//         {/* <div className="px-4 py-10">
//             <div className="w-full flex h-auto">
//                 <div className="w-1/2">
//                 <div className="flex  items-center">
//                     <div className="w-6 bg-black h-0.5 "></div>{" "}
//                     <p className="text-2xl px-2 tracking-wider py-4 ">CONTACT</p>
//                 </div>
//                 <div className="text-8xl tracking-wide  font-semibold">
//                     GET IN{" "}
//                 </div>
//                 <div className="text-8xl tracking-wide font-semibold">
//                     TOUCH.{" "}
//                 </div>
//                 <div className="emp py-8 flex items-end gap-4">
//                     <div className="h-12 w-12 md:h-20 md:w-20">
//                     <img
//                         src={emp}
//                         alt="Employee"
//                         className="w-full h-auto object-cover "
//                     />
//                     </div>
//                     <div className="px-2 ">
//                     <p className="text-lg md:text-2xl font-bold">FINN SOLVING</p>
//                     <p className="text-xs md:text-sm">BRAND DESIGNER</p>
//                     </div>
//                 </div>
//                 </div>
//                 <div className="w-1/2">
//                 <div className="  flex w-full justify-center items-center">
//                     <form action="" className="w-full  ">
//                     <div className=" py-2">
//                         <input
//                         type="text"
//                         className="font-blod border-2 w-full outline-none border-black py-4 px-5"
//                         placeholder="Your Name"
//                         required
//                         />
//                     </div>
//                     <div className=" py-2">
//                         <input
//                         type="text"
//                         className="font-blod border-2 w-full outline-none border-black py-4 px-5"
//                         placeholder="Your Email"
//                         required
//                         />
//                     </div>
//                     <div className=" py-2">
//                         <textarea
//                         type="textarea"
//                         className="font-blod border-2 w-full outline-none border-black py-10 px-5"
//                         placeholder="Your Message"
//                         required
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         className="text-white bg-black tracking-widest py-3 px-10"
//                     >
//                         SEND MESSAGE{" "}
//                     </button>
//                     </form>
//                 </div>
//                 </div>
//             </div>

//             <div className="p-10 flex  justify-between bg-lime-300 ">
//                 <div className="">
//                 <p className="text-3xl  tracking-widest">FOLLOW ME</p>
//                 </div>
//                 <div className="flex items-center justify-between">
//                 <div className="flex items-center px-2">
//                     <div className="w-5 bg-black h-0.5 "></div>{" "}
//                     <p className="text-sm px-1  tracking-widest ">INSTAGRAM</p>
//                 </div>
//                 <div className="flex items-center px-2">
//                     <div className="w-5 bg-black h-0.5 "></div>{" "}
//                     <p className="text-sm px-1  tracking-widest ">TWITTER</p>
//                 </div>
//                 <div className="flex items-center px-2">
//                     {" "}
//                     <div className="w-5 bg-black h-0.5 "></div>{" "}
//                     <p className="text-sm px-1  tracking-widest ">DRIBBLE</p>
//                 </div>
//                 </div>
//             </div>
//             </div>   */}

//         <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
//           <div className="w-full flex flex-col lg:flex-row h-auto">
//             {/* Left Section - Contact Info */}
//             <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
//               <div className="flex items-center">
//                 <div className="w-6 bg-black h-0.5"></div>
//                 <p className="text-xl sm:text-2xl px-2 tracking-wider py-4">
//                   CONTACT
//                 </p>
//               </div>

//               <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wide font-semibold leading-tight">
//                 GET IN
//               </div>
//               <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wide font-semibold leading-tight">
//                 TOUCH.
//               </div>

//               <div className="emp py-6 sm:py-8 flex items-end gap-4">
//                 <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 shrink-0">
//                   <img
//                     src={emp}
//                     alt="Employee"
//                     className="w-full h-auto object-cover "
//                   />
//                 </div>
//                 <div className="px-2">
//                   <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
//                     FINN SOLVING
//                   </p>
//                   <p className="text-xs sm:text-sm md:text-base text-gray-600">
//                     BRAND DESIGNER
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Right Section - Contact Form */}
//             <div className="w-full lg:w-1/2">
//               <div className="flex w-full justify-center items-center">
//                 <form action="" className="w-full max-w-lg lg:max-w-full">
//                   <div className="py-2 sm:py-3">
//                     <input
//                       type="text"
//                       className="font-bold border-2 w-full outline-none border-black py-3 sm:py-4 px-4 sm:px-5 text-sm sm:text-base rounded-none"
//                       placeholder="Your Name"
//                       required
//                     />
//                   </div>
//                   <div className="py-2 sm:py-3">
//                     <input
//                       type="email"
//                       className="font-bold border-2 w-full outline-none border-black py-3 sm:py-4 px-4 sm:px-5 text-sm sm:text-base rounded-none"
//                       placeholder="Your Email"
//                       required
//                     />
//                   </div>
//                   <div className="py-2 sm:py-3">
//                     <textarea
//                       className="font-bold border-2 w-full outline-none border-black py-6 sm:py-8 px-4 sm:px-5 text-sm sm:text-base rounded-none resize-vertical min-h-[120px] sm:min-h-[150px]"
//                       placeholder="Your Message"
//                       required
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     className="text-white bg-black tracking-widest py-3 sm:py-4 px-6 sm:px-10 text-sm sm:text-base w-full sm:w-auto hover:bg-gray-800 transition-colors duration-300"
//                   >
//                     SEND MESSAGE
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>

//           {/* Follow Me Section */}
//           <div className="p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row justify-between items-center bg-lime-300 mt-8 sm:mt-10 gap-4 sm:gap-0">
//             <div className="text-center sm:text-left">
//               <p className="text-xl sm:text-2xl lg:text-3xl tracking-widest font-semibold">
//                 FOLLOW ME
//               </p>
//             </div>
//             <div className="flex flex-wrap justify-center sm:justify-between gap-3 sm:gap-4">
//               <div className="flex items-center px-2">
//                 <div className="w-4 sm:w-5 bg-black h-0.5"></div>
//                 <p className="text-xs sm:text-sm px-1 sm:px-2 tracking-widest cursor-pointer hover:underline">
//                   INSTAGRAM
//                 </p>
//               </div>
//               <div className="flex items-center px-2">
//                 <div className="w-4 sm:w-5 bg-black h-0.5"></div>
//                 <p className="text-xs sm:text-sm px-1 sm:px-2 tracking-widest cursor-pointer hover:underline">
//                   TWITTER
//                 </p>
//               </div>
//               <div className="flex items-center px-2">
//                 <div className="w-4 sm:w-5 bg-black h-0.5"></div>
//                 <p className="text-xs sm:text-sm px-1 sm:px-2 tracking-widest cursor-pointer hover:underline">
//                   DRIBBLE
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contactpage;




// chatgpt 
import React, { useState, useEffect } from "react";
import emp from "../assets/images/worker.webp";

const Contactpage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prevState => ({
        ...prevState,
        [name]: ""
      }));
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent browser reload
    
    if (validateForm()) {
      console.log("Form submitted successfully!");
      console.log("Form Data:", formData);
      
      // Simulate form submission
      setIsSubmitted(true);
      
      // You can add API call here instead of console.log
      // Example: 
      // fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } else {
      console.log("Form validation failed:", errors);
    }
  };

  // Reset success message after 5 seconds
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  // Log form data changes (optional - for debugging)
  useEffect(() => {
    console.log("Form data updated:", formData);
  }, [formData]);

  return (
    <>
      <div className="mx-auto container">
        <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
          <div className="w-full flex flex-col lg:flex-row h-auto">
            {/* Left Section - Contact Info */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
              <div className="flex items-center">
                <div className="w-6 bg-black h-0.5"></div>
                <p className="text-xl sm:text-2xl px-2 tracking-wider py-4">
                  CONTACT
                </p>
              </div>

              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wide font-semibold leading-tight">
                GET IN
              </div>
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wide font-semibold leading-tight">
                TOUCH.
              </div>

              <div className="emp py-6 sm:py-8 flex items-end gap-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 shrink-0">
                  <img
                    src={emp}
                    alt="Employee"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="px-2">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
                    FINN SOLVING
                  </p>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">
                    BRAND DESIGNER
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="w-full lg:w-1/2">
              <div className="flex w-full justify-center items-center">
                <form onSubmit={handleSubmit} className="w-full max-w-lg lg:max-w-full">
                  {/* Success Message */}
                  {isSubmitted && (
                    <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                      Thank you for your message! We'll get back to you soon.
                    </div>
                  )}

                  <div className="py-2 sm:py-3">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`font-bold border-2 w-full outline-none py-3 sm:py-4 px-4 sm:px-5 text-sm sm:text-base rounded-none ${
                        errors.name ? 'border-red-500' : 'border-black'
                      }`}
                      placeholder="Your Name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  
                  <div className="py-2 sm:py-3">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`font-bold border-2 w-full outline-none py-3 sm:py-4 px-4 sm:px-5 text-sm sm:text-base rounded-none ${
                        errors.email ? 'border-red-500' : 'border-black'
                      }`}
                      placeholder="Your Email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                  
                  <div className="py-2 sm:py-3">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`font-bold border-2 w-full outline-none py-6 sm:py-8 px-4 sm:px-5 text-sm sm:text-base rounded-none resize-vertical min-h-[120px] sm:min-h-[150px] ${
                        errors.message ? 'border-red-500' : 'border-black'
                      }`}
                      placeholder="Your Message"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    className="text-white bg-black tracking-widest py-3 sm:py-4 px-6 sm:px-10 text-sm sm:text-base w-full sm:w-auto hover:bg-gray-800 transition-colors duration-300"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Follow Me Section */}
          <div className="p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row justify-between items-center bg-lime-300 mt-8 sm:mt-10 gap-4 sm:gap-0">
            <div className="text-center sm:text-left">
              <p className="text-xl sm:text-2xl lg:text-3xl tracking-widest font-semibold">
                FOLLOW ME
              </p>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-between gap-3 sm:gap-4">
              <div className="flex items-center px-2">
                <div className="w-4 sm:w-5 bg-black h-0.5"></div>
                <p className="text-xs sm:text-sm px-1 sm:px-2 tracking-widest cursor-pointer ">
                  INSTAGRAM
                </p>
              </div>
              <div className="flex items-center px-2">
                <div className="w-4 sm:w-5 bg-black h-0.5 "></div>
                <p className="text-xs  sm:text-sm px-1 sm:px-2 tracking-widest cursor-pointer ">
                  TWITTER
                </p>
              </div>
              <div className="flex items-center px-2">
                <div className="w-4 sm:w-5 bg-black h-0.5"></div>
                <p className="text-xs sm:text-sm px-1 sm:px-2 tracking-widest cursor-pointer ">
                  DRIBBLE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactpage;