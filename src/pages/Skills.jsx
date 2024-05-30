import {
  Box,
  Container,
  Divider,
  Heading,
  Progress,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ProgressBar from "../Constants/Progress_bar";

const Skills = () => {
  return (
    <Container maxW="container.lg" id="skills" padding="30px">
      <div className="h-max overflow-hidden py-[30px] animate-slide_in">
        <div className="text-center mb-10">
          <Heading
            as="h1"
            size="2xl"
            fontFamily="Poppins"
            className=" text-slate-600 mb-3 "
          >
            My <span className="text-[#1d1160]">Skills</span>{" "}
          </Heading>

          <Text
            fontFamily="Poppins"
            className="font-Poppins text-gray-600 tracking-wide"
          >
            Proficiency & Expertise
          </Text>
        </div>

        <Tabs outline="1px" outlineColor="#1d1160">
          <TabList>
            <Tab fontFamily="Poppins" fontSize="14px" color="#1d1160" >Programming Languages & frameworks</Tab>
            <Tab fontFamily="Poppins"  fontSize="14px" color="#1d1160">Languages</Tab>
            <Tab fontFamily="Poppins"  fontSize="14px" color="#1d1160">Soft Skills</Tab>
          </TabList>

          <TabPanels padding="10px">
            <TabPanel>
              <Stack direction="column" spacing={5}>
                <Box>
                  <Text color="1d1160" fontFamily="Poppins">
                    HTML
                  </Text>
                  <ProgressBar value={88} max={100} colorScheme="facebook" />
                </Box>
                <Box>
                  <Text color="1d1160" fontFamily="Poppins">
                    CSS
                  </Text>
                  <ProgressBar value={78} max={100} colorScheme="facebook" />
                </Box>
                <Box>
                  <Text color="1d1160" fontFamily="Poppins">
                    JavaScript
                  </Text>
                  <ProgressBar value={78} max={100} colorScheme="facebook" />
                </Box>
                <Box>
                  <Text color="1d1160" fontFamily="Poppins">
                    Java
                  </Text>
                  <ProgressBar value={66} max={100} colorScheme="facebook" />
                </Box>
                <Box>
                  <Text color="1d1160" fontFamily="Poppins">
                    ReactJS
                  </Text>
                  <ProgressBar value={86} max={100} colorScheme="facebook" />
                </Box>
                <Box>
                  <Text color="1d1160" fontFamily="Poppins">
                    NextJS
                  </Text>
                  <ProgressBar value={77} max={100} colorScheme="facebook" />
                </Box>
                <Box>
                  <Text color="1d1160" fontFamily="Poppins">
                    NodeJs
                  </Text>
                  <ProgressBar value={74} max={100} colorScheme="facebook" />
                </Box>
                <Box>
                  <Text color="1d1160" fontFamily="Poppins">
                    MongoDB
                  </Text>
                  <ProgressBar value={78} max={100} colorScheme="facebook" />
                </Box>
                <Box>
                  <Text color="1d1160" fontFamily="Poppins">
                    Tailwind CSS
                  </Text>
                  <ProgressBar value={80} max={100} colorScheme="facebook" />
                </Box>
                <Box>
                  <Text color="1d1160" fontFamily="Poppins">
                    Material UI
                  </Text>
                  <ProgressBar value={84} max={100} colorScheme="facebook" />
                </Box>
                <Box>
                  <Text color="1d1160" fontFamily="Poppins">
                    ShadCn
                  </Text>
                  <ProgressBar value={75} max={100} colorScheme="facebook" />
                </Box>
              </Stack>
            </TabPanel>
            <TabPanel>
              <Stack direction="column" spacing={5}>
                <Box>
                  <Text color="1d1160" fontFamily="Poppins">
                    English
                  </Text>
                  <ProgressBar value={88} max={100} colorScheme="facebook" />
                </Box>
                <Box>
                  <Text color="1d1160" fontFamily="Poppins">
                    Hindi
                  </Text>
                  <ProgressBar value={90} max={100} colorScheme="facebook" />
                </Box>
                <Box>
                  <Text color="1d1160" fontFamily="Poppins">
                    Marathi
                  </Text>
                  <ProgressBar value={87} max={100} colorScheme="facebook" />
                </Box>
              </Stack>
            </TabPanel>
            <TabPanel>
              <Stack direction="column" spacing={5}>
                <Box>
                  <Text color="1d1160" fontFamily="Poppins">
                    Communication
                  </Text>
                  <ProgressBar value={85} max={100} colorScheme="facebook" />
                </Box>
                <Box>
                  <Text color="1d1160" fontFamily="Poppins">
                    Teamwork
                  </Text>
                  <ProgressBar value={86} max={100} colorScheme="facebook" />
                </Box>
                <Box>
                  <Text color="1d1160" fontFamily="Poppins">
                    Problem-Solving
                  </Text>
                  <ProgressBar value={90} max={100} colorScheme="facebook" />
                </Box>
                <Box>
                  <Text color="1d1160" fontFamily="Poppins">
                    Leadership
                  </Text>
                  <ProgressBar value={87} max={100} colorScheme="facebook" />
                </Box>
              </Stack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      <Divider />
    </Container>
  );
};

export default Skills;
