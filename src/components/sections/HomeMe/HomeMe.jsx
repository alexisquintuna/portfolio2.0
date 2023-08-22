import VerticalLine from "../Line/VerticalLine";
import "./homeMe.css";

const HomeMe = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/3 text-cardTitle pb-4 md:py-0">
        <h3>Who am I</h3>
      </div>
      <VerticalLine />
      <div className="horizontal-line flex md:hidden"></div>
      <div className="w-full md:w-2/3 text-projectsTitle px-2 md:px-6">
        <div className="w-full flex flex-col md:flex-row justify-evenly">
          <p className="h-full pr-0 md:pr-10 text-whiteColor">
            I am a self-taught web developer with 3 years of experience in full
            stack development. I am passionate about creating unique user
            experiences and telling a company's story through the art of motion
            and design. I am currently freelancing for various studios, but
            always looking for other opportunities. I am also a graduate of a
            coding bootcamp, where I learned the skills I needed to pursue my
            passion for development.
          </p>
          <p className="text-right h-full pt-8 md:pt-0 pl-0 md:pl-10">
            When I'm not working, I enjoy getting lost in music, building LEGOs,
            fine dining, and making lattes (especially matcha ones). I also love
            having conversations about all sorts of things, from the latest tech
            trends to the best way to fold a fitted sheet. I'm always up for a
            new challenge, and I'm always looking for ways to learn and grow.
          </p>
        </div>
        <div className="w-full flex justify-between pt-4">
          <img
            className="w-52 h-52 flipGengar"
            src="https://www.icegif.com/wp-content/uploads/2022/12/icegif-1696.gif"
            alt=""
          />
          <img
            className="w-52 h-52"
            src="https://www.icegif.com/wp-content/uploads/2022/12/icegif-1696.gif"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomeMe;
