import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        {/* Added a wrapper for the vertical line */}
        <div className="relative mt-6 lgl:mt-14 w-full flex flex-col gap-10">
          <div className="absolute left-0 top-0 h-[400px] border-l-[5px] border-l-black border-opacity-30"></div>
          <ResumeCard
            title="Software Developer"
            subTitle="Zapproach Ltd (2024 - Present)"
            result="Mauritius"
            des="Tech Used: React Js, Vue Js, Next Js, Swagger API, React Native (mobile development)"
          />
          <ResumeCard
            title="Technical Consultant"
            subTitle="Nx2Square (1 year)"
            result="Mauritius"
            des="Tech Used: React Js, Oracle Cloud Infrastructure, Oracle Netsuite (ERP system), Suitescripts, Flutter (mobile development)"
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Internship Experience
          </h2>
        </div>
        {/* Added a wrapper for the vertical line */}
        <div className="relative mt-6 lgl:mt-14 w-full flex flex-col gap-10">
          <div className="absolute left-0 top-0 h-[400px] border-l-[5px] border-l-black border-opacity-30"></div>
          <ResumeCard
            title="Full Stack Developer Intern"
            subTitle="SD Worx Mauritius (3 months)"
            result="Mauritius"
            des="Tech Used: Angular Js, ASP.NET, C#, Swagger API"
          />
          <ResumeCard
            title="Automation Engineer Intern"
            subTitle="Grant Thornton Mauritius (3 months)"
            result="Mauritius"
            des="Tech Used: Power Apps, SharePoint, Power Automate, VB Automation"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
