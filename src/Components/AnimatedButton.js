import { Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionButton = motion(Button);

function AnimatedButton() {
  const slideInVariant = {
    initial: {
      backgroundColor:"#1d1190",
      x: "-100%"
    },
    animate: {
      x: '0%',
      backgroundColor:"indigo",
      transition: {
        duration: 0.5,
        ease: "easeIn"
      },
    },
  };

  return (
    <MotionButton
      as="a"
      target="_blank"
      href="#"
      size="lg"
      minH="16"
      fontWeight="normal"
      backgroundColor="#1d1160"
      className="p-4"
      fontFamily="Poppins"
      paddingY="20px"
      color="white"
      _focus={{ outline: "none" }}
      variants={slideInVariant}
      whileHover="animate"
    >
      Download Resume
    </MotionButton>
  );
}

export default AnimatedButton;
