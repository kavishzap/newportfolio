import React from "react";
import { FaWhatsapp, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import dpo from "../../assets/images/dpo.png";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-72 object-cover rounded-lg mb-2"
        src={dpo}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Kavish Mojhoa</h3>
        <p className="text-lg font-normal text-gray-400">
          Web developer / Mobile Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Versatile web and mobile app developer with expertise in React ,
          Next.js, and Vue.js, specializing in dynamic web applications and
          seamless mobile experiences. Skilled in JavaScript, Dart, and Java, I
          focus on performance-driven, cross-platform solutions using JS
          Framework for web, Flutter for mobile, and Android native development
          to deliver impactful results.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+230 59182520</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">Kavish17mojhoa@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
      <a
        href={`https://wa.me/${+23059182520}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bannerIcon"
      >
        <FaWhatsapp />
      </a>
      <a
        href="https://www.instagram.com/kavish.mk?igsh=bHdyeG51dmt3aHpk"
        target="_blank"
        rel="noopener noreferrer"
        className="bannerIcon"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.linkedin.com/in/kavish-mojhoa-b8a05023b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        target="_blank"
        rel="noopener noreferrer"
        className="bannerIcon"
      >
        <FaLinkedinIn />
      </a>
    </div>
      </div>
    </div>
  );
};

export default ContactLeft;
