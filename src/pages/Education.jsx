import React from "react";
import { Container, Heading, Text } from "@chakra-ui/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUserGraduate, FaGraduationCap } from "react-icons/fa"
import { GiSchoolBag } from "react-icons/gi"

const Education = () => {
  return (
    <Container maxW="container.xl" id="education">
      <div className="h-[900px] overflow-hidden">
        <div className="text-center mb-10">
          <Heading
            as="h1"
            size="2xl"
            fontFamily="Poppins"
            className=" text-slate-600 mb-3 "
          >
            My <span className="text-[#1d1160]">Education</span>{" "}
          </Heading>

          <Text
            fontFamily="Poppins"
            className="font-Poppins text-gray-600 tracking-wide"
          >
            Academics & Qualifications
          </Text>
        </div>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#1d1160", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #FACC15" }}
            date="2019 - 2022"
            iconStyle={{ background: "#FACC15", color: "#fff" }}
            icon={<FaUserGraduate />}
          >
            <h3 className="vertical-timeline-element-title font-Poppins">
              Batch of 2019-2022
            </h3>
            <h4 className="vertical-timeline-element-subtitle font-Poppins">SIES Graduate School of Technology</h4>
            <p className="font-Poppins">
              Undergrad in Computer Engineering
            </p>
            <p  className="font-Poppins">
              CGPA: 8.54
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: "7px solid  #FACC15" }}
            iconStyle={{ background: "#FACC15", color: "#fff" }}
            // date="2016 - 2019"
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title font-Poppins text-[#1d1160]">Batch of 2016-2019</h3>
            <h4 className="vertical-timeline-element-subtitle font-Poppins text-[#1d1160]">
             V.E.S Polytechnic
            </h4>
            <p className="text-[#1d1160] font-Poppins">
            Diploma in Computer Engineering
            </p>
            <p className="text-[#1d1160] font-Poppins">
                AVG: 87.50
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015 - 2016"
            contentStyle={{ background: "#1d1160", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #FACC15" }}
            iconStyle={{ background: "#FACC15", color: "#fff" }}
            icon={<GiSchoolBag />}
          >
            <h3 className="vertical-timeline-element-title font-Poppins">Batch of 2015-2016</h3>
            <h4 className="vertical-timeline-element-subtitle font-Poppins">
              S.V.V.H.S
            </h4>
            <p  className="font-Poppins">Secondary School</p>
            <p  className="font-Poppins">AVg: 87.40</p>
          </VerticalTimelineElement>
         
         
        </VerticalTimeline>
      </div>
    </Container>
  );
};

export default Education;
