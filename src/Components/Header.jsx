import React, { useEffect, useState } from "react";
import { HeaderData } from "../Constants/Constants";
import { IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";


const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sidebar = {
    open: () => ({
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <div id="header" className="mb-250">
      <div
        className={` fixed top-0 left-0 w-full z-90 ${
          scrolling
            ? "shadow-md bg-[#1d1160] fixed top-0 left-0  z-10 w-full transition-all ease-out duration-300"
            : "bg-white transition-all ease-in z-10"
        } hidden md:block`}
      >
        <ul
          className={`  flex justify-center items-center gap-10 h-20 tracking-wide ${
            scrolling ? "text-white" : "text-[#1d1160] font-medium"
          }  font-Poppins text-[16px]`}
        >
          {HeaderData.map((item) => (
            <li className="">
              <a className="underline_tag" href={item.href}>
                {item.title}
              </a>{" "}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div
        onClick={() => setOpen(!open)}
        className={`flex justify-end items-end p-3 rounded-full 
        w-max m-2 ${
          open && scrolling ? "bg-white" : "bg-[#1d1160]"
        }  cursor-pointer fixed top-0 left-0 z-50 md:hidden`}
      >
        {open ? (
          <RxCross2
            size={25}
            className={`${open && scrolling ? "text-black" : "text-white"}`}
          />
        ) : (
          <IoMenuSharp
            size={25}
            className={`${open && scrolling ? "text-black" : "text-white"}`}
          />
        )}
      </div>
      {open && (
        <div
          className={`${
            scrolling
              ? "shadow-md bg-[#1d1160] fixed top-0 left-0 z-10 w-full transition-all ease-out duration-300"
              : "bg-white transition-all ease-in z-10"
          }  md:hidden`}
        >
          <ul
            className={`  flex flex-col justify-center place-items-center gap-2  tracking-wide ${
              scrolling ? "text-white" : "text-[#1d1160] font-medium"
            }  font-Poppins text-[16px] h-60`}
          >
            {HeaderData.map((item) => (
              <li className="">
                <a className="underline_tag" href={item.href}>
                  {item.title}
                </a>{" "}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* <ButtonGroup
        spacing="6"
        background="transparent"
        className="pt-2 sm:pt-0"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Link
          as="a"
          target="_blank"
          href="https://github.com/vedantbirla13"
          _hover="#1d1160"
        >
          <AiFillGithub size="32px" />
        </Link>
        <Link
          as="a"
          target="_blank"
          href="https://www.linkedin.com/in/vedant-birla-7364b11b7/"
          _hover="#1d1160"
          rounded="full"
        >
          <AiFillLinkedin
            size="32px"
            className="hover:text-gray-300"
          />
        </Link>
        <Link
          as="a"
          target="_blank"
          href="mailto:vedantbirla2000@gmail.com"
          _hover="#1d1160"
          rounded="full"
        >
          <CgMail size="34px" className="hover:text-gray-300" />
        </Link>
      </ButtonGroup> */}
    </div>
  );
};

export default Header;
