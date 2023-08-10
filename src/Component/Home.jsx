import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiHand } from "react-icons/hi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import hello from "../image/waving-hand-people.gif";

function Home(props) {
  const [text] = useTypewriter({
    words: ["Frontend Developer", "FullStack Developer", "MernStack Developer"],
    loop: {},
    cursorStyle: "_",
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b via-black
        from-black to-gray-800 "
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col
            item-center justify-center h-full px-4 md:flex-row "
      >
        <div className="flex flex-col justify-center h-full lg:w-4/6 md:w-4/6 w-full">
          <div>
            <h2 className="text-[25px] leading-7 lg:text-5xl font-bold text-white ">
              I'M a <span className="text-white">{text}</span>
              
            </h2>
          </div>
          <p className="py-4 max-w-md text-gray-400 text-xl  ">
            {" "}
            Hey, I'M <span className="text-blue-500">Shubhangi Jadhav</span> .
            Front-End Software Developer Building smart user Interface and
            useful interaction, developing rich web applications.
          </p>

          <div>
            <button className="text-white w-fit bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-2 hover:px-8 my-2 flex items-center rounded-md cursor-pointer">
              say hello
              <img src={hello} alt="hi" className="w-10 h-10" />
            </button>

            <div className="flex gap-4 mt-4 py-4 lg:hidden">
              <div className="py-2 px-2 w-auto rounded-full text-center bg-gray-700 text-white cursor-pointer">
                <a href="https://github.com/ShubhangiJadhav521">
                  {" "}
                  <FaGithub size={30} className="text-white" />
                </a>
              </div>
              <div className=" py-2 px-2 w-auto rounded-full text-center bg-blue-700 text-white cursor-pointer">
                <a href="https://www.linkedin.com/in/shubhangi-jadhav-b88b3221b/">
                  <FaLinkedin size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
