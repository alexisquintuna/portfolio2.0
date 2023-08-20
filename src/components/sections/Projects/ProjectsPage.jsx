import { Link } from "react-router-dom";

import LineDivider from "../Line/line";
import projectsData from "../../data/projectsData";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col w-full relative">
      <LineDivider />
      <div className="w-full h-fit px-2 sm:px-0 pb-4 sm:py-0">
        <h2 className="text-biggerCardTitle text-whiteColor">My Projects</h2>
        <h3 className="text-cardTitle pt-6 pb-16">
          A little bit of everything (personal/professional)
        </h3>
      </div>
      <LineDivider />
      <div>
        {projectsData.map(
          ({ id, title, imgs, tools }) => {
            return (
              <div>
                <div key={id} className="w-full flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 whitespace-normal flex flex-col justify-between overflow-hidden pb-8 md:pb-0">
                    <h2 className="text-biggerCardTitle text-whiteColor">
                      {title}
                    </h2>
                    <div className="flex flex-col gap-4">
                        {tools.map((tool) => {
                            return <h2 className="text-menuBtn">{tool}</h2>;
                        })}
                    </div>
                    <br />
                    <Link
                      className="text-menuBtn rounded-xl text-whiteColor w-fit projectBtn"
                      to={`/projects/${id}`}
                    >
                      SEE PROJECT
                    </Link>
                  </div>
                  <div className="w-full md:w-2/3 px-0 md:px-4">
                    <Link to={`/projects/${id}`} >
                      <img src={imgs[0]} alt="" className="w-fit rounded-3xl" />
                    </Link>
                  </div>
                </div>
                <LineDivider />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
