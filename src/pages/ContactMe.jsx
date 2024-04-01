import {
    Box,
    Container,
    Text,
    Heading,
  } from "@chakra-ui/react";
  import React, { useEffect, useRef, useState } from "react";
  import emailjs from "@emailjs/browser";
  
  const ContactMe = () => {
    const form = useRef();
    const [success, setSuccess] = useState(false)
  
    const [formData, setFormData] = useState({
      user_name: "",
      user_email: "",
      message: ""
  
    })
  
    const [formErrors, setFormErrors] = useState({
      user_name: "",
      user_email: "",
      message: ""
    })
  
  
    const handleChange = (e) => {
      const { name, value } = e.target
      setFormData((prevFormData) => ({ ...prevFormData, [name]:value }))
      setFormErrors((prevFormErrors) => ({ ...prevFormErrors, [name]: "" }))
    }
  
    const validateEmail = (email) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    }
  
    const validateForm = () => {
      const newFormErros = {...formErrors}
      let isValid = true;
  
      // Validate name
      if(formData.user_name == "") {
        newFormErros.user_name = "Name is required ";
        isValid = false
      }
      if(formData.user_email == "") {
        newFormErros.user_email = "Email is required ";
        isValid = false
      } else if(!validateEmail(formData.user_email)) {
        newFormErros.user_email = "Invalid Email";
        isValid = false
      }
  
      if(formData.message == "") {
          newFormErros.message = "Message is required ";
        
        isValid = false
      }
  
      setFormErrors(newFormErros);
      return isValid;
    }
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      if(validateForm()){
        emailjs
          .sendForm(
            "service_mp4vtt9",
            "template_b7vqzxm",
            form.current,
            "EiSfAu3y6OMgV-mQ7"
          )
          .then(
            (result) => {
              e.target.reset()
              console.log("message sent");
              setSuccess(true)
  
              setTimeout(() => {
                setSuccess(false)
              }, 5000);
            },
            (error) => {
              console.log(error.text);
            }
          );
  
          setFormData({
            user_name: "",
            user_email: "",
            message: ""
          })
      }
    };
  
  
    
  
    
  
    return (
      <Container
        maxW="container.lg"
        id="contact"
        backgroundColor="#1d1160"
        rounded="15px"
        resize="block"
        marginBottom="30px"
        paddingY="30px"
      >
        <Box
          className="h-max overflow-hidden "
          display="flex"
          flexDirection="column"
          alignItems="center"
          paddingTop="20px"
        >
          <div className="text-center mb-10">
            <Heading
              as="h1"
              size="2xl"
              fontFamily="Poppins"
              className=" text-white mb-3 slide_in"
            >
              My <span className="text-yellow-400">Contact</span>{" "}
            </Heading>
  
            <Text
              fontFamily="Poppins"
              className="font-Poppins text-white tracking-wide"
            >
              {/* Behind the Screen: Discovering the Developer Within */}
              Get in Touch
            </Text>
          </div>
  
  
  
          <form
            className={`w-[80%] flex flex-col ${formErrors === "" ? "gap-10" : "gap-5" }`}
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              className="p-2 rounded font-Poppins outline-none focus:border-yellow-400 focus:border-2  focus:outline-none"
              placeholder="Name"
              // required
            />
            {formErrors.user_name && <span className="text-yellow-400 font-Poppins text-[15px]">{formErrors.user_name}</span>}
  
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              className="p-2 rounded font-Poppins outline-none focus:border-yellow-400 focus:border-2  focus:outline-none"
              placeholder="Email"
              // required
            />
            {formErrors.user_email && <span className="text-yellow-400 font-Poppins text-[15px]">{formErrors.user_email}</span>}
  
            <textarea
              name="message"
              id=""
              cols="10"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Leave a message..."
              className="p-3 font-Poppins rounded focus:border-yellow-400 focus:border-2  focus:outline-none"
              // required
            />
            {formErrors.message && <span className="text-yellow-400 font-Poppins text-[15px]">{formErrors.message}</span>}
  
            <button
              type="submit"
              className="pt-4 uppercase bg-[#EAB308] text-white font-medium tracking-wide 
               py-[15px] rounded hover:bg-[#FACC15] transition-all 0.5s duration-500 mb-5 "
            >
              Submit
            </button>
          </form>
        </Box>
        {
          success && (
          <span className="text-white font-Poppins flex justify-center items-center py-3">Message sent successfully!!</span>
          ) 
        }
      </Container>
    );
  };
  
  export default ContactMe;
  