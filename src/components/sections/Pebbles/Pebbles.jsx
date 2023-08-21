import Pebbles1 from "../../images/AboutMe/Pebbles1.png";
import Pebbles2 from "../../images/AboutMe/Pebbles2.png";

const Pebbles = () => {
  return (
    <div className="flex flex-col pt-40">
      <h2 className="text-whiteColor text-title fixed top-96">Pebbles</h2>
      <div className="flex flex-col text-title  h-full w-full">
        <h5 className="">Hello, this is</h5>
        <div className="w-full flex flex-col items-end justify-end">
          <div className="w-1/2">
            <img src={Pebbles1} alt="pebbles 1" />
          </div>
          <div className="w-full flex py-44 justify-end">
            <p className="text-subTitle text-right w-1/2">
              Pebbles is my cat, my daughter, my baby. She's now 5 years 28 days
              old. I got her in November 2018.
            </p>
          </div>
          <div className="w-1/4 pb-20">
            <img src={Pebbles2} alt="pebbles 2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pebbles;
