import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";
import logocode from "../image/images.png";
function Navbar(props) {
  const [nav, setnav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "contact",
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center  align-center w-full h-20 text-white bg-black fixed z-[1] ">
        <div className="mx-5 text-white animate-bounce ">
          {/* Shubhangi */}
          <img src={logocode} alt="logo" className="w-12 h-12 bg-black " />
        </div>
        <ul className="md:flex hidden   mr-2 place-content-center">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4  capitalize font-medium text-gray-400  text-lg cursor-pointer items-center mt-3"
            >
              <Link
                to={link}
                smooth
                scrolling="500"
                className="mr-4 hover:border-b-2 border-blue-100  transition duration-600 "
              >
                {link}
              </Link>
            </li>
          ))}
           <button className="text-white  bg-gradient-to-b from-green-900 to-green-500 px-6 py-2 flex items-center rounded-3xl hover:text-black">
              say hello
            </button>
        </ul>
        <div
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden  "
          onClick={() => setnav(!nav)}
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute opacity-100 top-0 left-0 w-full h-screen bg-black ">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-3xl "
              >
                <Link
                  to={link}
                  smooth
                  duration={500}
                  className=" hover:border-b-2 border-blue-50  "
                  onClick={() => setnav(false)}
                >
                  {link}
                </Link>
              </li>
            ))}
           
          </ul>
        )}
      </div>
    </>
  );
}

export default Navbar;
