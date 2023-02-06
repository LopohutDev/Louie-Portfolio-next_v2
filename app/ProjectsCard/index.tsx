"use client";

import Card from "@/components/Card";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import TicketnationLogo from "@/images/Ticketnation_Logo.png";

const ProjectsCard = () => {
  return (
    <div className="grid grid-cols-2 gap-2 mx-5 my-2" id="Projects">
      <Card className="relative col-span-2 h-80">
        <button
          className="absolute top-0 bottom-0 left-0 right-0 z-20"
          onClick={() => window.open("https://www.ticketnation.ph", "_blank")}
        ></button>
        <Image
          src={TicketnationLogo}
          alt="TicketnationLogo"
          fill
          className="absolute object-contain"
        />
        <div className="flex flex-col justify-between h-full text-lg">
          <div className="flex justify-between">
            <p>1</p>
            <p>Featured</p>
          </div>{" "}
          <div className="flex items-center justify-between">
            <p>Launch Project</p>
            <p>
              <FontAwesomeIcon icon={faMaximize} />
            </p>
          </div>
        </div>
      </Card>
      {/* <Card>TEst</Card>
      <Card>TEst</Card>
      <Card>TEst</Card>
      <Card>TEst</Card> */}
    </div>
  );
};

export default ProjectsCard;
