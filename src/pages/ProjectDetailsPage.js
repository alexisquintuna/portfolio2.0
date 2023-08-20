import { useParams } from "react-router-dom";
import projectsData from "../components/data/projectsData";
import LineDivider from "../components/sections/Line/line";
import VerticalLine from "../components/sections/Line/VerticalLine";
import ScrollToTop from "../components/animations/ScrollToTop";
const ProjectDetailsPage = () => {
  const { projectId } = useParams();

  const project = projectsData.find((project) => project.id === projectId);

  if (!project) {
    return (
      <div className="h-screen flex justify-center items-center text-title">
        Project Not Found
      </div>
    );
  }

  return (
    <div className="flex md:flex-row flex-col relative h-fit sm:h-screen px-8 md:px-16">
      <ScrollToTop />
      <div className="w-full md:w-1/3 bg-mainColor relative sm:sticky top-20 flex flex-col justify-center">
        <div className="w-full flex flex-col justify-between">
          <h2 className="text-biggerCardTitle text-whiteColor">
            {project.title}
          </h2>
          <p className="text-footer font-semibold">{project.description}</p>
        </div>
        <LineDivider />
        <div className="w-full md:w-1/3 py-6 md:py-0 text-footer flex flex-row justify-between md:flex-col gap-10">
          <div>
            <h4>TOOLS USED</h4>
            {project.tools.map((element) => {
              return <p className="font-semibold">{element}</p>;
            })}
          </div>
          <div>
            <h4>YEAR</h4>
            <p className="text-white font-semibold">{project.year}</p>
          </div>
          <div>
            <h4>WEBSITE</h4>
            {project.website.length !== 0 ? (
              <a
                href={project.website}
                className="text-white font-semibold"
                target="_blank"
                rel="noreferrer"
              >
                {project.websiteTitle}
              </a>
            ) : (
              <p className="text-white font-semibold">not available yet</p>
            )}
            {/* <a href={project.website} target="_blank" rel="noreferrer">
              {project.websiteTitle}
            </a> */}
          </div>
        </div>
      </div>
      <VerticalLine />
      <div className="w-full md:w-2/3 scrollable-element flex flex-col gap-12 overflow-y-scroll">
        {project.imgs.map((img) => {
          return (
            <img src={img} alt="projectImage" className="w-fit rounded-3xl" />
          );
        })}
        {project.longerDescription.length !== 0 ? (
          project.longerDescription.map((desc) => {
            return <p className="text-menuBtn">{desc}</p>;
          })
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
