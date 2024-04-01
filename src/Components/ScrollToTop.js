import React, { useState, useEffect } from 'react'
import { Button } from '@chakra-ui/react';
import { IoIosArrowUp } from 'react-icons/io';

const ScrollToTop = () => {

    const [show, setShow] = useState(false)

    const goToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth",
      });
  };  
    
    useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.scrollY > 600) {
              setShow(true);
          } else {
              setShow(false);
          }
      });
  }, []);

  return (
    <div className='relative'>
        {
        show && (
          <Button 
          position="fixed" 
          bottom="3" 
          right="5" 
          rounded="lg"
          backgroundColor="#EAB308"
          fontWeight="medium"
          paddingY="22px"
          zIndex="10"
          onClick={goToTop}
          _hover={{
            backgroundColor: "#FCD12A", transition: "background 0.5s SlideFade"
        }}
        >
          <IoIosArrowUp size="23" color="white" />
        </Button>
        ) 
      }
    </div>
  )
}

export default ScrollToTop