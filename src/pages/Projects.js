import React from "react";

import ProjectsPage from "../components/sections/Projects/ProjectsPage";
import Line from "../components/sections/Line/line";
import ScrollToTop from "../components/animations/ScrollToTop";

const Projects = () => {

  return (
    <div className="flex flex-col justify-center items-center px-8 md:px-16">
      <Line />
      <ProjectsPage />
      <ScrollToTop />
    </div>
  );
};

export default Projects;
