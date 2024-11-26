import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        {/* Added a wrapper for the vertical line */}
        <div className="relative mt-6 lgl:mt-14 w-full flex flex-col gap-10">
          <div className="absolute left-0 top-0 h-[400px] border-l-[5px] border-l-black border-opacity-30"></div>
          <ResumeCard
            title="BSc (Hons) Software Engineering"
            subTitle="University of Mauritius (2020 - 2023)"
            result="Mauritius"
            des="Completed a comprehensive program focusing on software development, system design, and engineering principles. Gained hands-on experience with modern programming languages, software methodologies, and tools to address real-world challenges in the tech industry."
          />
          <ResumeCard
            title="Higher School Certificate (Cambridge)"
            subTitle="Forest Side SSS Boys"
            result="Mauritius"
            des="Achieved a strong academic foundation in advanced subjects, preparing for higher education and professional development. Emphasized analytical thinking, problem-solving, and a disciplined approach to learning in a competitive academic environment."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
