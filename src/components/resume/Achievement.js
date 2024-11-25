import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import cel1 from "../../assets/images/1.png";
import cel2 from "../../assets/images/2.png";
import cel3 from "../../assets/images/3.png";
import cel4 from "../../assets/images/4.png";
import cel5 from "../../assets/images/5.png";
import cel6 from "../../assets/images/6.png";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20"
    >
        
      {/* First Column */}
      <div className="flex-1">
        <div className="mt-6 lg:mt-14 w-full flex flex-col gap-10 border-l-[6px] border-l-black border-opacity-30">
          <ResumeCard
            title="One of the Delegates of Mauritius For UNESCO Hackathon 2022"
            subTitle="Built A Mobile App to detect Plan Diseases"
            result="India"
            image={cel4}
          />
          <ResumeCard
            title="1st Runner up of Unesco Indian African Hackathon"
            subTitle="Built A Mobile App to detect Plan Diseases"
            result="India"
            image={cel1}
          />
          <ResumeCard
            title="1st Runner up of Hackathon organised by Ministry of Mauritius"
            subTitle="Built an Expense Manger Website"
            result="Mauritius"
            image={cel2}
          />
        </div>
      </div>

      {/* Second Column */}
      <div className="flex-1">
        <div className="mt-6 lg:mt-14 w-full flex flex-col gap-10 border-l-[6px] border-l-black border-opacity-30">
          <ResumeCard
            title="1st up of Hackathon organised by University of Mauritius"
            subTitle="Built a mobile App for Chemical substance in trash Detection"
            result="Mauritius"
            image={cel3}
          />
          <ResumeCard
            title="Popularity Award at App cup Organised by University of Mauritius"
            subTitle="Built a mobile App for Chemical substance in trash Detection"
            result="Mauritius"
            image={cel6}
          />
          <ResumeCard
            title="2nd Runner up of the PwC(MRU) Code of Duty Competition"
            subTitle="Built an anti money laundering/fraud detection website with AI"
            result="Mauritius"
            image={cel5}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
