// import React, { useState, useEffect } from "react";
import Resume from "../../images/AlexisQuintunaResume2023.pdf";
import "./Footer.css";
const Footer = () => {
  // const [isFooterVisible, setIsFooterVisible] = useState(true);
  // const [prevScrollY, setPrevScrollY] = useState(0);
  // const scrollThreshold = 300; // Adjust this threshold as needed

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY || document.documentElement.scrollTop;

  //     // Calculate the scroll direction
  //     const scrollDirection = scrollY > prevScrollY ? "down" : "up";

  //     // Toggle footer visibility based on the scroll direction and scroll position
  //     setIsFooterVisible(
  //       scrollDirection === "up" || scrollY <= scrollThreshold
  //     );

  //     // Update the previous scroll position
  //     setPrevScrollY(scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [prevScrollY]);
  return (
    // <div className={isFooterVisible ? "footer-visible footer__container" : "footer-hidden footer__container"}>
    <div className="max-[350px]:hidden text-footer footer__container w-full flex py-4 px-8 md:px-16 justify-between bottom-0 bg-mainColor">
      <p className="hidden md:inline-block">
        ©2023 • Designed & Developed by{" "}
        <a
          href="https://www.alexisquintuna.com/"
          target="_blank"
          rel="noreferrer"
          className="font-semibold line__across relative"
        >
          Alexis Quintuña
        </a>
      </p>
      <a
        className="hidden lg:inline-block line__across relative"
        href="mailto: alexisiquintuna@gmail.com"
      >
        alexisiquintuna@gmail.com
      </a>
      <div className="socials__container w-full flex justify-evenly md:justify-normal md:w-fit text-center">
        <a
          id="linkedIn__footer"
          className="mx-2"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/alexis-quintuna/"
        >
          LinkedIn
        </a>
        <a
          id="Github__footer"
          className="mx-2"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/alexisquintuna"
        >
          GitHub
        </a>
        <a
          id="Codepen__footer"
          target="_blank"
          rel="noreferrer"
          className="mx-2"
          href="https://codepen.io/alexisquintuna"
        >
          CodePen
        </a>
        <a
          id="Dribbble__footer"
          target="_blank"
          rel="noreferrer"
          className="mx-2"
          href="https://dribbble.com/AlexisQuintuna"
        >
          Dribbble
        </a>
        <a
          id="Resume__footer"
          className="mx-2 font-bold line__across relative"
          href={Resume}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Footer;
