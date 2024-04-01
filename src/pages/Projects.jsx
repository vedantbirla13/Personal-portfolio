import {
  Container,
  Heading,
  Text,
  Card,
  CardBody,
  Stack,
  Image,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProjectData } from "../utils/Constants/Constants";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowInUpRight } from "react-icons/bs";

const Projects = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <Container maxW="container.xl" id="projects" marginTop="50px">
      <div className="h-screen overflow-hidden  ">
        <div className="text-center mb-10">
          <Heading
            as="h1"
            size="2xl"
            fontFamily="Poppins"
            className=" text-slate-600 mb-3 "
          >
            My <span className="text-[#1d1160]">Projects</span>{" "}
          </Heading>

          <Text
            fontFamily="Poppins"
            className="font-Poppins text-gray-600 tracking-wide"
          >
            Code, Create, Innovate
          </Text>
          {/* <img src={underlinee} alt="" height="0" /> */}
        </div>

        <Slider {...settings}>
          {ProjectData.map((item) => (
            <Card
              maxW="sm"
              maxH="lg"
              variant="outline"
              boxSize="fit-content" // Set the box size to fit its content
              transition="transform 0.3s" // Adding transition for smooth effect
              _hover={{ transform: "scale(1.1)" }} // Scale up by 10% on hover
            >
              <CardBody>
                <Image src={item.image} />
                <Stack mt="6" spacing="3">
                  <Heading
                    fontFamily="Poppins"
                    fontWeight="medium"
                    color="#1d1160"
                    size="md"
                  >
                    {item.title}
                  </Heading>
                  <Text fontFamily="Poppins" fontSize="15px" color="#334155">
                    {item.description}
                  </Text>
                  <Text fontFamily="Poppins" fontSize="15px" color="#334155">
                    {item.tech}
                  </Text>
                </Stack>
                <ButtonGroup spacing="2">
                  <Button as="a" target="_blank" href={item.url}>
                    <AiFillGithub />
                  </Button>
                  <Button as="a" target="_blank" href={item.src}>
                    <BsBoxArrowInUpRight />
                  </Button>
                </ButtonGroup>
              </CardBody>
            </Card>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default Projects;
