import Main from "../components/sections/Main/Main"
import LineDivider from "../components/sections/Line/line";
import Tools from "../components/sections/Tools/Tools";
import WhatIDo from "../components/sections/WID/WhatIDo";
import Projects from "../components/sections/Projects/Projects";
import HomeMe from "../components/sections/HomeMe/HomeMe";
import Contact from "../components/sections/Contact/Contact";
import Shoutout from "../components/sections/Shoutout/Shoutout";

const Home = () => {
    return (
        <div className="px-8 md:px-16 overflow-x-hidden" >
        <Main />
        <LineDivider />
        <Tools />
        <LineDivider />
        <WhatIDo />
        <LineDivider />
        <Projects />
        <LineDivider />
        <HomeMe />
        <LineDivider />
        <Contact />
        <LineDivider />
        <Shoutout />
        <LineDivider />
        </div>
    )
}

export default Home;