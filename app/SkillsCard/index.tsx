import React from "react";
import Card from "@/components/Card";
3;
import Css3Icon from "@/images/icons/css3_icon.svg";
import Html5Icon from "@/images/icons/html5_icon.svg";
import JSIcon from "@/images/icons/javascript_icon.svg";
import NextJSIcon from "@/images/icons/nextjs_icon.svg";
import NestJsIcon from "@/images/icons/nestjs_icon.svg";
import NodeJsIcon from "@/images/icons/nodejs_icon.svg";
import ReactJsIcon from "@/images/icons/reactjs_icon.svg";
import TailwindCssIcon from "@/images/icons/tailwindcss_icon.svg";

const SkillsCard = () => {
  const skills = [
    {
      skill: "HTML",
      level: "expert",
      icon: <Html5Icon className="w-24 h-24 fill-blue-400" />,
      description:
        "I am focused in improving my proficiency in HTML with 2+ years of hands-on experience in creating dynamic and responsive web pages.",
    },
    {
      skill: "CSS",
      level: "expert",
      icon: <Css3Icon className="w-24 h-24 fill-blue-400" />,
      description:
        "My aim is to utilize my proficiency in CSS to design and develop visually appealing, responsive, and user-friendly websites that meet client requirements and exceed user expectations.",
    },
    {
      skill: "JavaScript",
      level: "expert",
      icon: <JSIcon className="w-24 h-24 fill-blue-400" />,
      description:
        "My aim is to utilize my expertise in JavaScript to build innovative and interactive web applications that provide a seamless user experience. ",
    },
    {
      skill: "Nest Js",
      level: "Intermediate",
      icon: <NestJsIcon className="w-24 h-24 fill-blue-400" />,
      description:
        "I am focused on utilizing the power of NestJS to develop scalable, efficient, and robust server-side applications.",
    },
    {
      skill: "Next Js",
      level: "Intermediate",
      icon: <NextJSIcon className="w-24 h-24 fill-blue-400" />,
      description:
        "My goal is to leverage my expertise in Next.js to create high-performance, scalable, and user-friendly web applications that meet the specific needs of my clients. ",
    },
    {
      skill: "Node Js",
      level: "Intermediate",
      icon: <NodeJsIcon className="w-24 h-24 fill-blue-400" />,
      description:
        "My aim is to utilize the power of Node Js to develop scalable, efficient, and robust server-side applications.",
    },
    {
      skill: "React Js",
      level: "Expert",
      icon: <ReactJsIcon className="w-24 h-24 fill-blue-400" />,
      description:
        "I am commited to create a visually appealing, responsive and user-friendly front end Application using the React Js package.",
    },
    {
      skill: "Tailwind Css",
      level: "Expert",
      icon: <TailwindCssIcon className="w-24 h-24 fill-blue-400" />,
      description:
        "Using my expertise in Tailwind Css, I strive to create a responsive and user-friendly web application.",
    },
  ];

  return (
    <div className="flex flex-col gap-2 py-2 mx-5" id="Skills">
      {skills.map((skill, index) => (
        <Card className="!p-0 flex !bg-gray-800 " key={index}>
          <div className="flex items-center flex-1 gap-5 pr-10 text-blue-400 p-14">
            <div className="w-32">{skill.icon}</div>
            <div>
              <h2 className="mb-10">{skill.skill}</h2>
              <p className="text-sm">{skill.description}</p>
            </div>
          </div>
          <Card className="!bg-blue-400 flex-1 flex items-center flex-col justify-center">
            <p className="mb-5 font-normal">I am {skill.level} in</p>
            <h3 className="text-4xl italic font-bold">{skill.skill}</h3>
          </Card>
        </Card>
      ))}
    </div>
  );
};

export default SkillsCard;
