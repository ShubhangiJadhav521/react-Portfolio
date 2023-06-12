import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Home(props) {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b via-black
        from-black to-gray-800 '>
            <div className='max-w-screen-lg mx-auto flex flex-col
            item-center justify-center h-full px-4 md:flex-row '>
                <div className='flex flex-col justify-center h-full '>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white  '>FrontEnd React Developer</h2>
                    <p className='py-4 max-w-md text-gray-400 text-xl'> Hey, I'M <span className='text-blue-500'>Shubhangi Jadhav</span> . Front-End Software Developer Building smart user Interface
                        and useful interaction, developing rich web applications.</p>

                    <div >
                    <a href='ShubhangiResume.pdf'> <button className='text-white w-fit bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-2 flex items-center rounded-md cursor-pointer'>
                         RESUME<MdOutlineKeyboardArrowRight className='text-white'/> 
                        </button></a>
                        
                        <div className='flex gap-4 mt-4 py-4 lg:hidden'>
                            <div className='py-2 px-2 w-auto rounded-full text-center bg-gray-700 text-white cursor-pointer' >
                              <a href='https://github.com/ShubhangiJadhav521'>  < FaGithub size={30} className='text-white' /></a>
                            </div>
                            <div className=' py-2 px-2 w-auto rounded-full text-center bg-blue-700 text-white cursor-pointer'>
                                <a href='https://www.linkedin.com/in/shubhangi-jadhav-b88b3221b/'><FaLinkedin size={30} /></a>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;