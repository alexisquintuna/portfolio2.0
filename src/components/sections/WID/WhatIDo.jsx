import "./whatIDo.css";
import Creative from "../../images/WIDImages/creativity.png";
import UI from "../../images/WIDImages/ux-design.png";
import Software from "../../images/WIDImages/software-development.png";
import Barista from "../../images/WIDImages/barista.png";
import VerticalLine from "../Line/VerticalLine";
import Line from "../Line/line";

const WhatIDo = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/3 text-cardTitle pb-16 md:py-0">
        <h3>What I Do</h3>
      </div>
      <VerticalLine />
      <div className="w-full md:w-2/3 flex flex-col items-center justify-between px-2 md:px-6">
        <div className="flex w-full justify-around flex-col sm:flex-row">
          <article className="w-full sm:w-cardWidth px-4">
            <div className="flex items-center text-cardSubTitle text-whiteColor">
              <img className="w-16 h-16" src={Creative} alt="" />
              <h4>Creative Developer/Designer</h4>
            </div>
            <p className="text-cardParagraph pt-2">
              crafting visual and artistic elements to communicate ideas,
              emotions, or information.
            </p>
          </article>
          <VerticalLine />
          <article className="w-full sm:w-cardWidth pt-4 sm:pt-0 px-4">
            <div className="flex items-center text-cardSubTitle text-whiteColor">
              <img src={UI} alt="" className="w-16 h-16" />
              <h4 className="pl-2">
                UI <span className="inline-block sm:hidden">/</span>{" "}
                <br className="hidden sm:block" /> UX
              </h4>
            </div>
            <p className="text-cardParagraph pt-2">
              enhancing user satisfaction by improving the accessibility,
              usability, and aesthetic appeal of digital products or services
            </p>
          </article>
        </div>
        <div className="hidden w-full sm:block">
          <Line />
        </div>
        <div className="flex w-full justify-around flex-col sm:flex-row">
          <article className="w-full sm:w-cardWidth px-4 pt-4 sm:pt-0">
            <div className="flex items-center text-cardSubTitle text-whiteColor">
              <img className="w-16 h-16" src={Software} alt="" />
              <h4 className="pl-2">Software Development</h4>
            </div>
            <p className="text-cardParagraph pt-2">
              creation, design, and implementation of computer
              programs/applications/systems enabling users to perform specific
              tasks or functions.
            </p>
          </article>
          <VerticalLine />
          <article className="w-full sm:w-cardWidth pt-4 sm:pt-0 px-4">
            <div className="flex items-center text-cardSubTitle text-whiteColor">
              <img src={Barista} alt="" className="w-16 h-16" />
              <h4 className="pl-2">Daytime Bartender</h4>
            </div>
            <p className="text-cardParagraph pt-2">
              Secret therapists in disguise. Customers spill their beans while
              sipping lattes
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
