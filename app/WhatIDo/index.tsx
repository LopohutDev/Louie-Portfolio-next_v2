import Card from "@/components/Card";
import React from "react";

const WhatIDo: React.FC = () => {
  return (
    <div className="mx-5" id="whatIdo">
      <Card className="!text-cyan-400 !bg-gray-800">
        <h1 className="mb-10">WHAT I CAN DO</h1>
        <p className="text-6xl italic font-normal">
          As a full-stack developer skilled in ReactJS, NextJS, Prisma, and
          Tailwind CSS, I can develop modern and dynamic web applications that
          provide an outstanding user experience.
        </p>
      </Card>
    </div>
  );
};

export default WhatIDo;
