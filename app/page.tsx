import React from "react";
import { Lato } from "@next/font/google";
import NavigationCard from "./NavigationCard";
import WhatIDo from "./WhatIDo";
import Css3Icon from "@/images/icons/css3_icon.svg";
import Card from "@/components/Card";
import SkillsCard from "./SkillsCard";
import ProjectsCard from "./ProjectsCard";
import AboutCard from "./AboutCard";
import ContactCard from "./ContactCard";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

const App = () => {
  return (
    <div className={`bg-black text-white ${lato.variable}`}>
      <div className="flex flex-col items-center justify-center p-28">
        <div>
          <p
            className={` leading-none px-[25px] tracking-tighter my-[-12px] uppercase font-semibold`}
          >
            Louie Jay
          </p>
          <h1 className="text-5xl font-['Lexend_Deca'] tracking-tight">
            Sarraga
          </h1>
        </div>
      </div>
      <NavigationCard />
      <WhatIDo />
      <SkillsCard />
      <ProjectsCard />
      <AboutCard />
      <ContactCard />
    </div>
  );
};

export default App;
