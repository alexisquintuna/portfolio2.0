import "./about.css";

import flowers from "../../images/AboutMe/Flowers.png";
import BWMe from "../../images/AboutMe/Me.png";
import coding from "../../images/AboutMe/Coding.png";

import ScrollToTop from "../../animations/ScrollToTop";
import { Link } from "react-router-dom";

const data = [
  {
    id: 0,
    siteUrl: "https://studiofreight.com/",
    color: "sF",
  },
  {
    id: 1,
    siteUrl: "https://godly.website/",
    color: "gW",
  },
  {
    id: 2,
    siteUrl: "https://marcd.co/",
    color: "mD",
  },
  {
    id: 3,
    siteUrl: "https://locomotive.ca/en",
    color: "lM",
  },
  {
    id: 4,
    siteUrl: "https://bruno-simon.com/",
    color: "bS",
  },
];

const AboutSection = () => {
  let siteUrlRandom = "";
  let color = "";
  let number = Math.floor(Math.random() * data.length);
  data.forEach((el) => {
    if (el.id === number) {
      siteUrlRandom = el.siteUrl;
      color = el.color;
    }
  });

  return (
    <div className="w-full flex flex-col sm:flex-row justify-end">
      <ScrollToTop />
      <div className="w-full flex flex-col items-center sm:items-start sm:w-1/2 md:w-2/5 relative sm:fixed left-0 sm:left-20 pt-20 sm:pt-40">
        <h3 className="text-biggerCardTitle text-whiteColor">About</h3>
        <div className="flex">
          <img src={flowers} className="w-1/3" alt="" />{" "}
          {/* <h6 className="text-grayColor text-subTitle text-justify">
            I don't define myself for the work I've done, but I will rather be
            defined by the work{" "}
            <span className={color}>
              {" "}
              <a href={siteUrlRandom} target="_blank" rel="noreferrer">
                I want to do
              </a>
            </span>. I prefer to keep learning and challenging myself to do more.
          </h6> */}
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-2/5 text-footer flex flex-col gap-8 py-24 sm:py-56">
        <p className="text-center">
          I'm a self-taught web developer with a passion for creating beautiful,
          functional, and user-friendly websites. I have been developing
          websites for over 3 years, and I have a strong understanding of HTML,
          CSS, Javascript, and React. I am also familiar with a variety of other
          web development technologies, such as Firebase, Node.js, and MySQL.{" "}
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 flex flex-col-reverse gap-4 aboutHover ">
            <img className="filterOn hidden md:block" src={coding} alt="" />
            <p className="text-left text-grayColor sm:text-whiteColor">
              In addition to my techincal skills, I am also a creative thinker
              and a problem solver. I am always looking for new ways to improve
              the user experience, and I am always eager to learn new things. I
              am also a greater communicator and I am able to work effectively
              with both technical and non-technical teams.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4 aboutHover items-end">
            <img className="hidden md:block" src={BWMe} alt="" />
            <p className="text-right">
              In my spare time, I enjoy fine dining, driving with the windows
              down while listening to music, building LEGOS, and making lattes
              at my local coffee shop. I love fashion, cars, and{" "}
              <Link to="/Pebbles" className="text-pink">Pebbles</Link>. I also enjoy sharing
              my knowledge and experiences with others.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row">
          <img
            className="w-1/3 hidden md:block"
            src="https://37.media.tumblr.com/bc36b8a4eeee5a4b367c5679772f20a5/tumblr_n4cidt3LZn1s19oqso1_500.gif"
            alt="ghastly gif"
          />
          <p className="w-full md:w-1/2 text-justify">
            My goal is to continue to grow as a web developer, and make a
            positive impact on the world. I want to use my skills to create
            websites that are both beautiful and functional, and that make a
            difference in people's lives. I am confident that my skills,
            experience, and passion make me a valuable asset to any team.
          </p>
          <img
            className="w-1/3 hidden md:block flipGengar"
            src="https://37.media.tumblr.com/bc36b8a4eeee5a4b367c5679772f20a5/tumblr_n4cidt3LZn1s19oqso1_500.gif"
            alt="ghastly gif"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
