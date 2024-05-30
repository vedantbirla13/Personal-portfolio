import React from "react";
import { Button, Container, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import resume from "../images/VEDANT_BIRLA_RESUME.pdf"
import Coding_svg from "../Components/Coding_gif";

const Home = () => {
  return (
    <Container
      maxW="container.xl"
      id="home"
      marginBottom="140px"
      paddingTop="120px"
    >
      <SimpleGrid
        columns={{ sm: 1, md: 1, lg: 2 }}
        className="h-max"
        placeItems="center"
      >
        <div className="">
          <h1 className="text-[50px]  font-bold font-Poppins text-slate-700 mb-5 ">
            Hi, I am <span className="text-yellow-500">Vedant Birla.</span>{" "}
          </h1>
          <Text
            fontFamily="Poppins"
            className=" text-[16px]  text-slate-700 mb-10  break-normal"
          >
            Passionate Software Engineer with a strong dedication to coding and
            crafting scalable, high performance applications.I consider myself
            as a motivated, diligent, and technically competent professional
            with sound experience in Object-Oriented programming, including
            development, testing, and debugging code. My journey as a software
            professional has nurtured a keen ability to quickly grasp and master
            diverse technologies. As a tech enthusiast, I find great
            satisfaction in exploring new frontiers, constantly expanding my
            skill set to remain at the forefront of innovation in software
            development.
          </Text>

          <motion.button
            whileHover={{ offset: "1.2" }}
            whileTap={{
              scale: 0.9,
            }}
          >
            <Button
              as="a"
              target="_blank"
              href={resume}
              size="lg"
              minH="16"
              fontWeight="normal"
              backgroundColor="#1d1180"
              className="p-4"
              fontFamily="Poppins"
              paddingY="20px"
              download
              _hover={{
                backgroundColor: "#1f3993",
                transition: "background 0.5s SlideFade",
              }}
              color="white"
              _focus={{ outline: "none" }}
            >
              Download Resume
            </Button>
          </motion.button>
        </div>

        <div className=" ">
          <Coding_svg />
        </div>
      </SimpleGrid>
    </Container>
  );
};

export default Home;


