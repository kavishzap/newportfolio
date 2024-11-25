import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  project4,
  POS,
  ZAc,
  Photo,
  bee,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Please Note That No Backed is Connected to the Websites and this is only for Demo" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Wedding Halls Planner"
          des="Our Hall Finder platform connects you with a wide range of venues for weddings, conferences, parties, and more. Browse through detailed listings, and secure your booking seamlessly—all in one place. 
"
          src={projectOne}
          link="https://eventhubv1.netlify.app/"
        />
        <ProjectsCard
          title="Point of Sales System"
          des="A robust POS system designed for restaurants to streamline order management, payments, and inventory tracking for seamless dining operations. 
"
          src={POS}
          link="https://posdemoresto.netlify.app/"
        />
        <ProjectsCard
          title="Admin Dashboard for Small Businesses"
          des="An all-in-one system for inventory, sales, and expense management with comprehensive reporting to optimize business operations and decision-making."
          src={ZAc}
          link="https://zaccboxv2test.netlify.app/"
        />
        <ProjectsCard
          title="Real Estate Landing Page"
          des="A captivating real estate landing page designed to showcase properties, attract buyers and renters, and drive leads with a seamless user experience."
          src={project4}
          link="https://lacasapropertiesdemoversion1.netlify.app/"
        />
        <ProjectsCard
          title="Photographer Portfolio"
          des="A sleek and dynamic platform to showcase your photography portfolio, highlight your best work, and attract potential clients with ease."
          src={Photo}
          link="https://photographyportfoliodemo.netlify.app/"
        />
        <ProjectsCard
          title="Drink Advertisement page using Three.js (View on Laptop)"
          des="An immersive drink advertisement crafted with Three.js, blending dynamic 3D visuals and animations to captivate audiences and elevate brand appeal."
          src={bee}
          link="https://flambodrink.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
