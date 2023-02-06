"use client";

import Card from "@/components/Card";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";

const AboutCard = () => {
  const [hover, setHover] = useState(false);

  function handleMouseEvent(event: React.MouseEvent<HTMLDivElement>) {
    if (event.type === "mouseenter") {
      setHover(true);
    } else if (event.type === "mouseleave") {
      setHover(false);
    }
  }

  return (
    <Card
      className="w-full h-full !bg-gray-800 overflow-hidden hover:scale-95 transition-all duration-200 p-10 !text-white"
      onMouseEnter={handleMouseEvent}
      onMouseLeave={handleMouseEvent}
    >
      <div className="relative w-full h-full">
        <div
          className={` flex items-center absolute top-0 bottom-0 transition-all duration-200 opacity-0 ${
            hover && "opacity-100"
          }`}
        >
          <p className="animate-[infiniteTextScroll_6s_linear_infinite] text-5xl w-[500px]">
            Learn More About Me .
          </p>
        </div>
        <div className="relative z-10 flex flex-col justify-end h-full">
          <div className="flex items-center justify-between">
            <p className="font-semibold ">About</p>
            <FontAwesomeIcon icon={faAddressCard} className="px-5 " />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AboutCard;
