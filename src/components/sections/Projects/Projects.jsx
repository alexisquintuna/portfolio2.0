import { Link } from "react-router-dom";
import "./projects.css";

import CatCrack from "../../images/ProjectsImages/CatCrack/CatCrackMain.png";
import TrainingGrouns from "../../images/ProjectsImages/TrainingGrounds/TrainingGroundsMain.jpg";
import GenereNatus from "../../images/ProjectsImages/GenereNatus2.0/GenereNatus2Main.jpg";
import LoopStudios from "../../images/ProjectsImages/LoopStudios/LoopStudiosMain.jpg";
import Alexis from "../../images/ProjectsImages/AlexisQuintuna1.0/AlexisQMain.jpg";
import VerticalLine from "../Line/VerticalLine";
import Line from "../Line/line";

const Projects = () => {
  const projects = [
    {
      id: "CatCrack",
    },
    {
      id: "TrainingGrounds",
    },
    {
      id: "PersonalPorfolio2.0",
    },
    {
      id: "LoopStudios",
    },
    {
      id: "GenereNatus",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row w-full relative">
      <div className="stickyPosition w-full h-fit sm:w-1/3 px-2 sm:px-0 pb-24 sm:py-0">
        <h2 className="text-biggerCardTitle">
          What <br />
          I've Done
        </h2>
        <h3 className="text-cardTitle pt-6 pb-16">
          Projects I've been apart of
        </h3>
        <Link
          to="/projects"
          className=" text-whiteColor py-2 px-4 rounded-lg projectBtn text-menuBtn "
        >
          SEE ALL WORK
        </Link>
      </div>
      <VerticalLine />
      <div className="scrollableElement w-full sm:w-2/3 px-2 sm:px-8">
        <article className="w-full pb-8 md:pb-0">
          <Link
            to={`/projects/${projects[0].id}`}
            className="w-full rounded-3xl overflow-hidden"
          >
            <img src={CatCrack} alt="" className="rounded-3xl w-fit" />
          </Link>
          <div className="w-full flex justify-between text-projectsTitle pt-6 ">
            <h4>Cat Crack</h4>
            <h4 className="text-navText">2023</h4>
          </div>
        </article>
        <div className="w-full hidden sm:block">
          <Line />
        </div>
        <div className="flex flex-col md:flex-row w-full justify-between pb-0 md:pb-8">
          <article className="px-0 md:px-8">
            <Link to={`/projects/${projects[1].id}`} className="rounded-3xl">
              <img src={TrainingGrouns} alt="" className="w-fit rounded-3xl" />
            </Link>
            <div className="flex justify-between text-projectsTitle py-6">
              <h4>Training Grounds</h4>
              <h4 className="text-navText">2023</h4>
            </div>
          </article>
          <div className="myTools__verticalLine hidden md:flex"></div>
          <article className="px-0 md:px-8">
            <Link to={`/projects/${projects[2].id}`} className="rounded-3xl">
              <img src={Alexis} alt="" className="w-fit rounded-3xl" />
            </Link>
            <div className="flex justify-between text-projectsTitle py-6">
              <h4>Alexis Quintuna 1.0</h4>
              <h4 className="text-navText">2022</h4>
            </div>
          </article>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-between pt-0 md:pt-8">
          <article className="px-0 md:px-8">
            <Link to={`/projects/${projects[3].id}`} className="rounded-3xl">
              <img src={LoopStudios} alt="" className="w-fit rounded-3xl" />
            </Link>
            <div className="flex justify-between text-projectsTitle py-6">
              <h4>LoopStudios</h4>
              <h4 className="text-navText">2022</h4>
            </div>
          </article>
          <div className="myTools__verticalLine hidden md:flex"></div>
          <article className="px-0 md:px-8">
            <Link to={`/projects/${projects[4].id}`} className="rounded-3xl">
              <img src={GenereNatus} alt="" className="w-fit rounded-3xl" />
            </Link>
            <div className="flex justify-between text-projectsTitle py-6">
              <h4>GenereNatus 2.0</h4>
              <h4 className="text-navText">2022</h4>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Projects;
