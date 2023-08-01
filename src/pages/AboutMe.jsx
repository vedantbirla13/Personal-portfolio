import {
  Box,
  Container,
  SimpleGrid,
  Text,
  Center,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { KnowMe } from "../Constants/Constants";
import { staggerContainer, textVariant } from "../utils/motion";

const AboutMe = () => {
  return (
    <Container
      maxW="container.xl"
      id="about"
      backgroundColor="#1d1160"
      rounded="15px"
      resize="block"
      padding="30px"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <Box
          className="h-max overflow-hidden "
          display="flex"
          flexDirection="column"
          justifyContent="center"
          paddingY="25px"
        >
          <div className="text-center mb-10">
            <Heading
              as="h1"
              size="2xl"
              fontFamily="Poppins"
              className=" text-white mb-3 "
            >
              My <span className="text-yellow-400">Journey</span>{" "}
            </Heading>

            <Text
              fontFamily="Poppins"
              className="font-Poppins text-white tracking-wide"
            >
              {/* Behind the Screen: Discovering the Developer Within */}
              Get to Know me
            </Text>
          </div>

          <Center>
            <Box>
              <SimpleGrid
                columns={[1, null, 2]}
                spacingX="100px" // Set spacing between columns
                spacingY="20px" // Set spacing between rows

                //
              >
                {KnowMe.map((item) => (
                  <Box key={item.title} justifyContent={"space-between"}>
                    <motion.p
                      variants={textVariant(0.2)}
                    >
                      <Text
                        fontFamily="Poppins"
                        color="#FACC15"
                        fontSize="22px"
                        fontWeight="medium"
                        display="inline-block"
                        minWidth="150px"
                      >
                        {item.title}
                      </Text>
                      <Text
                        fontFamily="Poppins"
                        color="white"
                        fontSize="18px"
                        display="inline-block"
                        minWidth="130px"
                      >
                        {item.description}
                      </Text>
                    </motion.p>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          </Center>
        </Box>
      </motion.div>
    </Container>
  );
};

export default AboutMe;
