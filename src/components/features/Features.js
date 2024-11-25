import React from "react";
import { FaMobile, FaGlobe} from "react-icons/fa";
import { SiSwagger } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Strengths" des="My Expertise" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Web Development"
          des="Crafting responsive and modern web solutions using cutting-edge technologies like React, Next.js, Vue.js, and Tailwind CSS. "
          icon={<FaGlobe />}
        />
        <Card
          title="Mobile Development"
          des="Building seamless and high-performance mobile applications using Flutter for cross-platform development and Android Native for platform-specific solutions."
          icon={<FaMobile />}
        />

        <Card
          title="API Integration"
          des="Expert in integrating and building robust APIs with REST architecture, enabling seamless CRUD operations. Ensuring efficient communication between systems for scalable and reliable solutions."
          icon={<SiSwagger />}
        />
      </div>
    </section>
  );
};

export default Features;
