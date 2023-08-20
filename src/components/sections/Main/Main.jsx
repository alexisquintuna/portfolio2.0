
import { Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <div className="flex flex-col pt-24 sm:pt-0 sm: justify-center h-fit sm:h-screen">
      <h2 className="text-mobileTitle md:text-title text-greyColor">
        <span className="text-whiteColor">ALEX</span>IS QUINTUÑA
      </h2>
      <div className="flex w-full justify-between py-6 items-cente">
        <div className="w-1/2 flex justify-center items-center">
          <img
            className="h-fit"
            src="https://64.media.tumblr.com/01ec261cb72e669de2e350b1c7a07db7/tumblr_ncwdlgeNKh1scncwdo1_500.gif"
            alt="Gastly Gif"
          />
        </div>
          <p className="text-mobileSubTitle md:text-subTitle text-right inline-block text-greyColor w-1/2">
          <span className="font-bold text-whiteColor">
            Full Stack Developer, Front-end Feen, and Dad to{" "}
            <Link to="/pebbles" className="text-pink">
              Pebbles
            </Link>
          </span>
          .<br /> I specialize in web development while adding my own{" "}
          <i className="font-bold">flavor</i> to the sauce, Keen eye for detail
          and a passion for creative development, I strive to enhance user
          experiences on the web.
        </p>
      </div>
    </div>
  );
};

export default Main;
