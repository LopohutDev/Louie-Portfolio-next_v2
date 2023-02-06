"use client";

import Card from "@/components/Card";
import Image from "next/image";
import React, { useState } from "react";
import SLogo from "@/images/SLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const MainCard = () => {
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
      className="w-full md:h-full h-[500px] !bg-blue-600 overflow-hidden hover:scale-[.98] transition-all duration-200"
      onMouseEnter={handleMouseEvent}
      onMouseLeave={handleMouseEvent}
    >
      <div className="relative w-full h-full">
        <div
          className={`text-white flex items-center absolute top-0 bottom-0 transition-all duration-200 ${
            hover && "opacity-0"
          }`}
        >
          <p className="animate-[infiniteTextScroll_20s_linear_infinite] text-6xl w-[3000px]">
            I am a Full Stack Web Developer. - Skilled in Next Js - Tailwind CSS
            - React JS - Node JS - Nest JS - Prisma.
          </p>
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
          <motion.div
            className="!w-[100px] h-[100px] bg-gray-100 bg-opacity-50"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["0%", "0%", "50px", "50px", "0%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        </div>
        <div className="relative z-10 flex flex-col justify-between h-full text-white">
          <div className="flex justify-between">
            <p className="text-2xl font-semibold">Louie.Dev</p>
            <Image
              src={SLogo}
              alt="SLogo"
              className="object-cover object-bottom bg-white rounded-full w-14 h-14 opacity-90"
            />
          </div>
          <div className="flex justify-between">
            <p className="font-semibold ">See My About Info</p>
            <FontAwesomeIcon
              icon={faArrowDown}
              className="px-5 text-lg text-white "
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MainCard;
