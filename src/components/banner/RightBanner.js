import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev); // Toggle flip state every 3 seconds
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <motion.img
        className="w-[300px] h-[300px] lgl:w-[500px] lgl:h-[500px] z-10"
        src={bannerImg}
        alt="bannerImg"
        animate={{ rotateY: isFlipped ? 360 : 0 }} // Rotate based on flip state
        transition={{
          duration: 1, // Duration of the flip
          ease: "easeInOut",
        }}
        style={{ transformStyle: "preserve-3d" }}
      />
    </div>
  );
};

export default RightBanner;
