"use client";

import React from "react";
import Card from "@/components/Card";
import ButtonInfo from "./components/ButtonInfo";

const ContactCard = () => {
  return (
    <div className="py-2 mx-5" id="Contact">
      <Card className=" !text-lime-300 bg-lime-400 bg-opacity-10">
        <p>LETS GET IN TOUCH!</p>
        <h3 className="mt-10 text-7xl w-[80%]">
          Feel free to reach out to me for any questions an idea, or a project
          you need help with?
        </h3>
        <div className="mt-10 w-[60%] grid grid-cols-6 gap-2">
          <ButtonInfo className="col-span-3">
            johnlouie.sarraga@gmail.com
          </ButtonInfo>
          <ButtonInfo className="col-span-3">+63 961 568 9626</ButtonInfo>
          <ButtonInfo
            className="col-span-2"
            onClick={() =>
              window.open("https://www.facebook.com/Lopohut", "_blank")
            }
          >
            Facebook
          </ButtonInfo>
          <ButtonInfo
            className="col-span-2"
            onClick={() =>
              window.open("https://www.instagram.com/alt_taxxin/", "_blank")
            }
          >
            Instagram
          </ButtonInfo>
          <ButtonInfo
            className="col-span-2"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/louie-jay-sarraga-8a941a155",
                "_blank"
              )
            }
          >
            LinkedIn
          </ButtonInfo>
        </div>
      </Card>
    </div>
  );
};

export default ContactCard;
