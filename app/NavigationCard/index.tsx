"use client";
import Card from "@/components/Card";

import React from "react";
import AboutCard from "./components/AboutCard";
import ContactCard from "./components/ContactCard";
import MainCard from "./components/MainCard";
import WorkCard from "./components/WorkCard";

const NavigationCard = () => {
  return (
    <div className="py-5 mx-5">
      <div className="flex flex-col gap-2 md:flex-row">
        <a href="#whatIdo" className="flex-1 ">
          <MainCard />
        </a>
        <div className="flex flex-col flex-1 gap-2">
          <div className="flex gap-2">
            <a href="#Projects" className="w-full h-full">
              <WorkCard />
            </a>
            <a href="#About" className="w-full h-full">
              <AboutCard />
            </a>
          </div>
          <a href="#Contact">
            <ContactCard />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavigationCard;
