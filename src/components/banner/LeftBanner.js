import React from "react";
// import { useTypewriter } from "react-simple-typewriter";
import {
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiAndroid, SiFlutter, SiVuedotjs} from "react-icons/si";

const LeftBanner = () => {
  // const [text] = useTypewriter({
  //   words: ["Front End Developer.", "Mobile Application Developer."],
  //   loop: true,
  //   typeSpeed: 20,
  //   deleteSpeed: 10,
  //   delaySpeed: 2000,
  // });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">kavish Mojhoa</span>
        </h1>
        {/* <h2 className="text-4xl font-bold text-white">
          Specialized in <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2> */}
        <h2 className="text-4xl font-bold text-white">
          Specialized in
          Front End Developer / Mobile Application Developer
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Versatile web and mobile app developer with expertise in React ,
          Next.js, and Vue.js, specializing in dynamic web applications and
          seamless mobile experiences. Skilled in JavaScript, Dart, and Java, I
          focus on performance-driven, cross-platform solutions using JS
          Framework for web, Flutter for mobile, and Android native development
          to deliver impactful results.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiVuedotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiAndroid />
            </span>
            <span className="bannerIcon">
              <SiFlutter />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
