"use client";

import Card from "@/components/Card";
import Image from "next/image";
import React from "react";
import LouiePhoto from "@/images/Louie.jpg";
import LouiePhotoNoBG from "@/images/Louie_noBG.png";

const AboutCard = () => {
  return (
    <div className="mx-5 my-2" id="About">
      <Card className="h-screen overflow-hidden !text-green-400 !bg-gray-800">
        <p className="animate-[infiniteTextScroll_20s_linear_infinite] text-5xl md:text-9xl  w-[2000px]">
          Who are Louie Jay Sarraga?
        </p>
        <div className="flex flex-col gap-10 mt-20 md:flex-row">
          <p className="flex-1 text-xl font-normal md:text-3xl">
            I am a freelance full stack developer, skillful in using HTML,
            tailwindcss, React Js, Next Js, Nest Js, React Redux, Prisma,
            PosgreSql and React Router. I am also skillful in using Git Bash
            Terminal and I also know Agile and Waterfall development cycle.
          </p>
          <div className="relative overflow-hidden bg-white w-72 h-72 rounded-3xl">
            <Image
              fill
              src={LouiePhoto}
              alt="LouiePhoto"
              className="object-cover object-bottom opacity-60"
            />
            <Image
              fill
              src={LouiePhotoNoBG}
              alt="LouiePhotoNoBG"
              className="object-cover object-bottom "
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AboutCard;
