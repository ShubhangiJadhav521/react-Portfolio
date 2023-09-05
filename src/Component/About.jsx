import React from "react";
import { HiDocumentDownload ,HiArrowUp} from "react-icons/hi";

function About(props) {
  return (
    <div
      id="about"
      name="about"
      className="h-auto  w-full bg-gradient-to-t from bg-gray-800 to-black "
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pb-20  ">
        <div className="p-8 mt-20">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500 rounded-sm text-white">
            About Me
          </h2>
        </div>

        <div className="flex h-full text-justify lg:flex-row  flex-col px-8 gap-8 text-gray-400">
          {/* <div className=''> */}
          {/* <img
            src={webdev}
            alt="image"
            className=" lg:w-1/2 w-auto h-2/4 lg:h-96  hover:scale-105 duration-500 
                         py-2  rounded-lg text-center  mt-5 p-4"
          /> */}
          {/* </div> */}
          <p className="text-lg w-auto mt-2">
            <span className="text-white">👋I'm Shubhangi Jadhav</span>, an
            accomplished <b> Full Stack Developer </b> with expertise in the
            dynamic MERN-stack ecosystem. With over a year of professional
            experience at Axiomtech IT Solutions, I've honed my skills in
            React.js, Node.js, Express.js, and MongoDB to create captivating web
            applications.
            <br />
            <b>M</b>y journey in the tech world is defined by a commitment to
            staying at the forefront of emerging technologies and industry
            trends. My proficiency extends beyond coding – I'm an advocate for
            crafting user-centric, pixel-perfect UIs and designing efficient
            APIs to drive seamless user experiences.
            <br /> <b>A</b>s an MCA graduate from North Maharashtra University,
            I've not only garnered technical prowess but also a deep
            understanding of complex problem-solving and project lifecycle
            management. My enthusiasm for coding is rivaled only by my passion
            for continuous learning.
            <br /> <b>W</b>hen I'm not immersed in code, I find joy in exploring
            new destinations, delving into books, and embracing the
            responsibilities that come with crafting innovative solutions. Feel
            free to reach out at{" "}
            <span className="text-blue-500">
              {" "}
              shubhangisjadhav18@gmail.com{" "}
            </span>
            or connect with me on LinkedIn:
            <span className="text-blue-500">
              {" "}
              <a href="https://www.linkedin.com/in/shubhangi-jadhav18">
              linkedin.com/in/shubhangi-jadhav18
              </a>
              
            </span>{" "}
            🚀 <br />
            Aside from technical skills, I value effective collaboration and
            teamwork. I enjoy working closely with developers, and stakeholders
            to create seamless and impactful digital experiences.{" "}
            <a href="Shubhangi_Jadhav_Resume.pdf">
              <button className="text-white w-fit bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-2 hover:px-8 my-4 flex items-center  rounded-3xl cursor-pointer ">
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
