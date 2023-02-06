"use client";

import React from "react";
import Card from "@/components/Card";
import ButtonInfo from "./components/ButtonInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const ContactCard = () => {
  return (
    <div className="py-2 mx-5" id="Contact">
      <Card className=" !text-lime-300 bg-lime-400 bg-opacity-10">
        <p>LETS GET IN TOUCH!</p>
        <h3 className="mt-10 text-3xl md:text-7xl md:w-[80%]">
          Feel free to reach out to me for any questions an idea, or a project
          you need help with?
        </h3>
        <div className="mt-10 md:w-[60%] grid grid-cols-3 md:grid-cols-6 gap-2">
          <ButtonInfo className="col-span-3 !px-0 !md:px-5">
            johnlouie.sarraga@gmail.com
          </ButtonInfo>
          <ButtonInfo className="col-span-3 !px-0 !md:px-5">
            +63 961 568 9626
          </ButtonInfo>
          <ButtonInfo
            className="md:col-span-2"
            onClick={() =>
              window.open("https://www.facebook.com/Lopohut", "_blank")
            }
          >
            <p className="hidden md:visible">Facebook</p>
            <FontAwesomeIcon className="visible md:hidden" icon={faFacebook} />
          </ButtonInfo>
          <ButtonInfo
            className="md:col-span-2"
            onClick={() =>
              window.open("https://www.instagram.com/alt_taxxin/", "_blank")
            }
          >
            <p className="hidden md:visible">Instagram</p>
            <FontAwesomeIcon className="visible md:hidden" icon={faInstagram} />
          </ButtonInfo>
          <ButtonInfo
            className="md:col-span-2"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/louie-jay-sarraga-8a941a155",
                "_blank"
              )
            }
          >
            <p className="hidden md:visible">LinkedIn</p>
            <FontAwesomeIcon
              className="visible md:hidden"
              icon={faLinkedinIn}
            />
          </ButtonInfo>
        </div>
      </Card>
    </div>
  );
};

export default ContactCard;
