import React from "react";
import { FaBriefcase, FaBook } from "react-icons/fa";

function Resume(props) {
  return (
    <div
      id="experience"
      name="experience"
      className=" w-full bg-gradient-to-b via-black
        from-black to-gray-800 text-white h-auto"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="w-full  py-8 px-12 sm:px-0 mt-9">
          <div>
            <p className="text-2xl flex p-3">
              <FaBriefcase className="mr-4 text-gray-500" />
              Working Experience
            </p>
            <div className=" ml-4 border-l-2 border-gray-500 mt-4 w-full h-full">
              <div className="ml-4 ">
                <p>Jun-2022- Present</p>
                <p className="text-2xl text-blue-500 my-3">
                  Full Stack Developer
                </p>
                <p className="text-xl">Aximtech IT Solution PVT. LTD.</p>
                <p>Responsibility</p>
                <ul className="text-gray-400">
                  <li>
                    {" "}
                    Developed web applications using a variety of technologies
                    including JavaScript, React, Node.js, Express JS and
                    MongoDB.
                  </li>
                  <li>
                    Designing and developing scalable and efficient APIs and
                    backend systems.
                  </li>
                  <li>
                    Participated in code reviews, unit testing, and integration
                    testing to ensure code quality and application performance.
                  </li>
                  <li>
                    Stayed up-to-date with software development trends and
                    technologies.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  py-8 px-12 sm:px-0">
          <div>
            <p className="text-2xl flex p-3">
              <FaBook className="mr-4 text-gray-500" />
              Education
            </p>
            <div className=" ml-4 border-l-2 border-gray-500 mt-4 w-full h-full">
              <div className="ml-4 ">
                <p>2021-2023</p>
                <p className="text-2xl text-blue-500 my-3">
                  Master of Computer Application (MCA)
                </p>
                <p className="text-xl">
                  Kavayitri Bahinabai Chaudhari North Maharashtra University,
                  Jalgaon, Maharashtra.
                </p>
                <p>CGPA- 8.75</p>
              </div>
            </div>
            <div className=" ml-4 border-l-2 border-gray-500 mt-9 w-full h-full">
              <div className="ml-4 ">
                <p>2018-2021</p>
                <p className="text-2xl text-blue-500 my-3">
                  Bachelor of Science in Computer Science (Bsc)
                </p>
                <p className="text-xl">
                  Shri Shivaji Vidya Prasarak Sanstha's Late Karmaveer Dr. P. R.
                  Ghogrey Science College, Dhule, Maharashtra
                </p>
                <p>CGPA- 9.82</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
