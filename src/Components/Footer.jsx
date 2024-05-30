import {  ButtonGroup, Link, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { CgMail } from "react-icons/cg";

const Footer = () => {

  const date = new Date().getFullYear();

  return (
    <div className="w-full h-max bg-[#1d1160] mt-[30px] p-4">
      <div className="text-center  items-center justify-evenly flex-col  sm:flex-row flex">
        <Text fontFamily="Poppins" color="white" className="text-[14px]">
        &copy; {date} Vedant Birla. All rights reserved 
        </Text>
        <ButtonGroup spacing="6" background="transparent" className="pt-2 sm:pt-0 "   >
          <Link
            as="a"
            target="_blank"
            href="https://github.com/vedantbirla13"
            background="#1d1160"
            _hover="#1d1160"
          >
            <AiFillGithub
              size="32px"
              color="white"

            />
          </Link>
          <Link
            as="a"
            target="_blank"
            href="https://www.linkedin.com/in/vedant-birla-7364b11b7/"
            background="#1d1160"
            _hover="#1d1160"
            rounded="full"
          >
            <AiFillLinkedin
              size="32px"
              color="white"
              className="hover:text-gray-300"
            />
          </Link>
          <Link
            as="a"
            target="_blank"
            href="mailto:vedantbirla2000@gmail.com"
            background="#1d1160"
            _hover="#1d1160"
            rounded="full"
          >
            <CgMail
              size="34px"
              color="white"
              className="hover:text-gray-300"
            />
          </Link>
          
        </ButtonGroup>
        </div>
      </div>
  );
};

export default Footer;
