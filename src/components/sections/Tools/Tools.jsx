import "./tools.css";
import TailwindCSS from "../../images/toolsImages/tailwind.png";
import ReactPic from "../../images/toolsImages/react.png";
import VueJs from "../../images/toolsImages/vue.png";
import CSharp from "../../images/toolsImages/csharp.png";
import Node from "../../images/toolsImages/node.png";
import Figma from "../../images/toolsImages/figma.png";
import Wordpress from "../../images/toolsImages/wordpress.png";
import Squarespace from "../../images/toolsImages/squarespace.png";
import Wix from "../../images/toolsImages/wix.png";
import MongoDB from "../../images/toolsImages/mongodb.png";
import Postman from "../../images/toolsImages/postman.png";
import Firebase from "../../images/toolsImages/firebase.png";
import VerticalLine from "../Line/VerticalLine";

const data = [
  {
    id: 0,
    photo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dce29357-31f7-4a01-a737-23e473625162/d49462h-cad148b2-cc15-41dc-88bd-a0121705ae57.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RjZTI5MzU3LTMxZjctNGEwMS1hNzM3LTIzZTQ3MzYyNTE2MlwvZDQ5NDYyaC1jYWQxNDhiMi1jYzE1LTQxZGMtODhiZC1hMDEyMTcwNWFlNTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.p3uszvKRYaQepDc1zptYWz8lNSBQtZZ3x_6rWas-wXY",
    name: "",
  },
  {
    id: 1,
    photo: "https://sujanbyanjankar.com.np/wp-content/uploads/2019/09/javascript.png",
    name: "Javascript",
  },
  {
    id: 2,
    photo: TailwindCSS,
    name: "TailwindCSS",
  },
  {
    id: 3,
    photo: ReactPic,
    name: "React",
  },
  {
    id: 4,
    photo: VueJs,
    name: "Vue.JS",
  },
  {
    id: 5,
    photo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dce29357-31f7-4a01-a737-23e473625162/d49462h-cad148b2-cc15-41dc-88bd-a0121705ae57.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RjZTI5MzU3LTMxZjctNGEwMS1hNzM3LTIzZTQ3MzYyNTE2MlwvZDQ5NDYyaC1jYWQxNDhiMi1jYzE1LTQxZGMtODhiZC1hMDEyMTcwNWFlNTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.p3uszvKRYaQepDc1zptYWz8lNSBQtZZ3x_6rWas-wXY",
    name: "",
  },
  {
    id: 6,
    photo: CSharp,
    name: "C#",
  },
  {
    id: 7,
    photo: Node,
    name: "Node.JS",
  },
  {
    id: 8,
    photo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dce29357-31f7-4a01-a737-23e473625162/d49462h-cad148b2-cc15-41dc-88bd-a0121705ae57.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RjZTI5MzU3LTMxZjctNGEwMS1hNzM3LTIzZTQ3MzYyNTE2MlwvZDQ5NDYyaC1jYWQxNDhiMi1jYzE1LTQxZGMtODhiZC1hMDEyMTcwNWFlNTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.p3uszvKRYaQepDc1zptYWz8lNSBQtZZ3x_6rWas-wXY",
    name: "",
  },
  {
    id: 9,
    photo: Figma,
    name: "Figma",
  },
  {
    id: 10,
    photo: Squarespace,
    name: "Squarespace ",
  },
  {
    id: 11,
    photo: Wordpress,
    name: "Wordpress",
  },
  {
    id: 12,
    photo: Wix,
    name: "Wix",
  },
  {
    id: 13,
    photo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dce29357-31f7-4a01-a737-23e473625162/d49462h-cad148b2-cc15-41dc-88bd-a0121705ae57.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RjZTI5MzU3LTMxZjctNGEwMS1hNzM3LTIzZTQ3MzYyNTE2MlwvZDQ5NDYyaC1jYWQxNDhiMi1jYzE1LTQxZGMtODhiZC1hMDEyMTcwNWFlNTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.p3uszvKRYaQepDc1zptYWz8lNSBQtZZ3x_6rWas-wXY",
    name: "",
  },
  {
    id: 14,
    photo: Postman,
    name: "Postman",
  },
  {
    id: 15,
    photo: MongoDB,
    name: "MongoDB",
  },
  {
    id: 16,
    photo: Firebase,
    name: "Firebase",
  },
];
const Tools = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="w-1/4 flex items-center">
        <h3 className=" w-full text-cardTitle">My Tools</h3>
      </div>
      <VerticalLine />
      <div className="logos-container flex relative">
        <div className="logos-slide flex">
          {data.map(({ id, photo, name }) => {
            return (
              <div
                key={id}
                className="tools__container px-8 flex flex-col justify-center items-center"
              >
                <div className="w-20 h-20">
                  <img className="" src={photo} alt="tool i use" />
                </div>
                <p className="pt-4">{name}</p>
              </div>
            );
          })}
        </div>
        <div className="logos-slide flex">
          {data.map(({ id, photo, name }) => {
            return (
              <div
                key={id}
                className="tools__container px-8 flex flex-col justify-center items-center"
              >
                <div className="w-20 h-20">
                  <img className="" src={photo} alt="tool i use" />
                </div>
                <p className="pt-4">{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tools;
