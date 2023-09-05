import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiHand } from "react-icons/hi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import hello from "../image/waving-hand-people.gif";
import Img from "../image/girlimg.jpg";
import Mernimg from "../image/MERN-Stack.png";

function Home(props) {
  const [text] = useTypewriter({
    words: ["FullStack Developer", "MernStack Developer"],
    loop: {},
    cursorStyle: "_",
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 5000,
  });
  return (
    <div
      id="home"
      className="h-screen w-full bg-gradient-to-b via-black
        from-black to-gray-900 "
    >
      <div
        className="max-w-screen-lg mx-auto 
            item-center justify-center h-full px-8 lg:px-0  grid sm:grid-cols-2  grid-col-1 sm:flex-row-reverse flex-row place-content-center  gap-10"
      >
        <div className="flex h-full  w-full justify-center  ">
          <img
            src={Img}
            alt="girl"
            className="sm:w-[25rem] sm:h-[20rem] w-[20rem] h-[14rem] rounded-3xl"
          />
        </div>
        <div className=" h-full  w-full place-content-center text-center md:text-start ">
          <h2 className="text-[25px] leading-7 lg:text-4xl font-bold text-white  ">
            I'M {text}
          </h2>
          <div >

          <p className="py-4 max-w-md text-gray-400 text-xl  ">
            {" "}
            Hey, I'M <span className="text-green-500 ">Shubhangi Jadhav</span> .
            Full Stack Software Developer Building smart user Interface and
            useful interaction, developing rich web applications.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className=" text-slate-200 w-fit bg-gradient-to-r from-green-400 to-green-900 px-8 py-2  my-4 rounded-full  text-lg">
              Hire Me
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
