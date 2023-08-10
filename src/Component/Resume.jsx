import React from 'react';
import { FaBriefcase, FaBook } from 'react-icons/fa'

function Resume(props) {
    return (
        <div name="Experience" className=' w-full bg-gradient-to-b via-black
        from-black to-gray-800 text-white h-auto'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='w-full  py-8 px-12 sm:px-0 mt-9'>
                    <div >

                        <p className='text-2xl flex p-3'><FaBriefcase className='mr-4 text-gray-500' />Working Experience</p>
                        <div className=' ml-4 border-l-2 border-gray-500 mt-4 w-full h-full'>

                            <div className='ml-4 '>
                                <p>Jan-2023-Jun-2023</p>
                                <p className='text-2xl text-blue-500 my-3'>Software Engineer Intern</p>
                                <p className='text-xl'>CSP INDIA NETWORK PTV.LTD</p>
                                <p>Responsibility</p>
                                <ul className='text-gray-400'>
                                    <li>Developed and modiﬁed front-end, and custom components utilizing react Js.</li>
                                    <li>Collaborated with design teams to integrate external API's into web pages and applications.</li>
                                    <li>Experience in using Redux to manage the application state</li>
                                    <li>Documented technical speciﬁcations and dependencies of applications.</li>
                                    {/* <li>Developed and modiﬁed the API's using Python and Flask framework.</li> */}
                                </ul>
                            </div>
                        </div>

                    </div>


                </div>
                <div className='w-full  py-8 px-12 sm:px-0'>
                    <div >

                        <p className='text-2xl flex p-3'><FaBook className='mr-4 text-gray-500' />Education</p>
                        <div className=' ml-4 border-l-2 border-gray-500 mt-4 w-full h-full'>

                            <div className='ml-4 '>
                                <p>2021-2023</p>
                                <p className='text-2xl text-blue-500 my-3'>Master of Computer Application (MCA)</p>
                                <p className='text-xl'>Kavayitri Bahinabai Chaudhari North Maharashtra University, Jalgaon, Maharashtra.</p>
                                <p>CGPA- 8.75</p>
                            </div>

                        </div>
                        <div className=' ml-4 border-l-2 border-gray-500 mt-9 w-full h-full'>
                            <div className='ml-4 '>
                                <p>2018-2021</p>
                                <p className='text-2xl text-blue-500 my-3'>Bachelor of Science in Computer Science (Bsc)</p>
                                <p className='text-xl'>Shri Shivaji Vidya Prasarak Sanstha's
                                    Late Karmaveer Dr. P. R. Ghogrey Science College,
                                    Dhule, Maharashtra</p>
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