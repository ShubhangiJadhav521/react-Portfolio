import React from "react";
import webdev from "../image/webdev.gif";
import { HiDocumentDownload } from "react-icons/hi";

function About(props) {
  return (
    <div
      name="about"
      className="h-auto  w-full bg-gradient-to-t from bg-gray-800 to-black "
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pb-20  ">
        <div className="p-8 mt-20">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500 rounded-sm text-white">
            About
          </h2>
        </div>

        <div className="flex h-full text-justify lg:flex-row  flex-col px-8 gap-8 text-gray-400">
          {/* <div className=''> */}
          <img
            src={webdev}
            alt="image"
            className=" lg:w-1/2 w-auto h-2/4 lg:h-96  hover:scale-105 duration-500 
                         py-2  rounded-lg text-center  mt-5 p-4"
          />
          {/* </div> */}
          <p className="text-lg w-auto mt-2">
            <span className="text-white">Hi there! I'm Shubhangi Jadhav</span>,
            a passionate frontend developer with expertise in React.js, Redux,
            HTML, CSS, JavaScript, and the Tailwind CSS framework. I want to
            grow my career in the IT sector. I am interested in problem-solving
            and building new products. I enjoy writing code daily and improving
            my knowledge. I am passionate about Full Stack Development. <br />I
            am currently learning frameworks and becoming a MERN Stack
            Developer. I love to build products that can be used by millions of
            people. <br />
            Aside from technical skills, I value effective collaboration and
            teamwork. I enjoy working closely with designers, backend
            developers, and stakeholders to create seamless and impactful
            digital experiences.{" "}
            <a href="ShubhangiResume2.pdf">
              <button className="text-white w-fit bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-2 hover:px-8 my-4 flex items-center rounded-md cursor-pointer ">
                Resume
                <HiDocumentDownload className="text-white" />
              </button>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
