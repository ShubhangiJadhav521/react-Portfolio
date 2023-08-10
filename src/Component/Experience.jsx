import React from "react";
import html from "../image/Html.png";
import css from "../image/Css.png";
import javascript from "../image/js.png";
import bootstrap from "../image/Bootstrap.jpeg";
import reactimg from "../image/React.png";
import tailwind from "../image/Tailwind.png";
import mongodb from "../image/mongodb.png";
import node from "../image/Node.png";
import Project1 from "../image/Bookstore.jpeg";
import project2 from "../image/weather.jpeg";
import Portfolioimg from '../image/portfolio.jpeg'
import { FaGithub } from "react-icons/fa";


function Experience(props) {
  const techs = [
    {
      id: "1",
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: "2",
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: "3",
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: "4",
      src: bootstrap,
      title: "BootStrap",
      style: "shadow-indigo-500",
    },
    {
      id: "5",
      src: tailwind,
      title: "Tailwind",
      style: "shadow-blue-800",
    },
    {
      id: "6",
      src: reactimg,
      title: "React JS",
      style: "shadow-blue-600",
    },
    {
      id: "7",
      src: node,
      title: "Node",
      style: "shadow-green-500",
    },
    {
      id: "8",
      src: mongodb,
      title: "MongoDB",
      style: "shadow-white",
    },
  ];
  const project = [
    {
      id: "1",
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: "2",
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: "3",
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: "4",
      src: bootstrap,
      title: "BootStrap",
      style: "shadow-indigo-500",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-auto min-h-fit  pb-10"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white ">
        <div className="p-8 mt-20">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            MY SKILLS
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4  gap-8 text-center py-8 px-12 ">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img
                src={src}
                alt="skill"
                className="w-20 mx-auto rounded-full"
              />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
        <div className=" p-8 mt-20">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Projects
          </p>
        </div>

        <div className="w-full  grid grid-cols-1 sm:grid-cols-2 md:gap-8 gap-11  lg:py-5 py-11 px-10 sm:px-0">
          <div
            className={`  group shadow-md hover:scale-105 duration-500   rounded-lg text-center shadow-pink-500  h-fit `}
          >
            <div className=" mx-auto px-8 pl-2 h-64 items-center flex ">
              <img
                src={Project1}
                alt="skill"
                className=" w-auto  m-4 sm:w-full  "
              />
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-90 bg-pink-700  flex-col">
                <h1 className="font-bold hover:scale-105 text-lg">
                  Book Store Application
                </h1>
                <p class="text-white lg:text-md text-sm lg:font-semibold  justify-normal  justify-items-center py-1 px-1">
                  I developed a Google Book Search app using React JS, Css and
                  integrated the Google Books API to fetch book data. The app
                  allows users to search for any book by entering keywords, and
                  it displays a list of relevant books along with their details.
                </p>

                <a
                  href="https://github.com/ShubhangiJadhav521/BookStoreApplication"
                  className=" text-white font-bold py-2 px-4 rounded "
                >
                  <FaGithub size={30} className="text-black hover:scale-105 " />
                </a>
              </div>
            </div>
          </div>
          <div
            className={`  group shadow-md hover:scale-105 duration-500   rounded-lg text-center shadow-blue-900  h-fit `}
          >
            <div className=" mx-auto px-8 pl-2 h-64 items-center flex ">
              <img
                src={project2}
                alt="skill"
                className=" w-auto  m-4 sm:w-full  "
              />
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-90 bg-blue-900  flex-col">
                <h1 className="lg:font-bold font-semibold hover:scale-105 text-lg ">
                  Weather Application
                </h1>
                <p class="text-white lg:text-md text-sm lg:font-semibold  justify-items-center py-1 px-1">
                  The Weather App is a web application built using React.js,
                  CSS, and fetching data from the OpenWeatherMap API. Its main
                  purpose is to provide real-time weather information for
                  different locations around the world.
                </p>

                <a
                  href="https://github.com/ShubhangiJadhav521/Weather-App/tree/master"
                  className=" text-white font-bold py-2 px-4 rounded hover:scale-105"
                >
                  <FaGithub size={30} className="text-black" />
                </a>
              </div>
            </div>
          </div>
          <div
            className={`  group shadow-md hover:scale-105 duration-500   rounded-lg text-center shadow-gray-800 h-fit `}
          >
            <div className=" mx-auto px-8 pl-2 h-64 items-center flex ">
              <img
                src={Portfolioimg}
                alt="skill"
                className=" w-auto  m-4 sm:w-full  "
              />
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-90 bg-gray-700  flex-col">
                <h1 className="font-bold hover:scale-105 text-lg">
                  Portfolio
                </h1>
                <p class="text-white text-md lg:font-semibold  justify-normal  justify-items-center py-1">
                 This is my personal portfolio website that was built using React JS, Tailwind CSS. 
                 It features an attractive and modern design.
                    
                </p>

                <a
                  href="https://github.com/ShubhangiJadhav521/react-Portfolio"
                  className=" text-white font-bold py-2 px-4 rounded "
                >
                  <FaGithub size={30} className="text-black hover:scale-105 " />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
