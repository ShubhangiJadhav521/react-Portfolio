import React from 'react';
import webdev from '../image/webdev.gif';
function About(props) {
    return (
        <div name='about' className='h-screen  w-full bg-gradient-to-t from bg-gray-800 to-black text-white' >

            <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pb-20  '>
                <div className='p-8 mt-20'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-gray-500 rounded-sm'>About</h2>
                </div>
                {/* <div className=' flex flex-col text-center align-center gap-4 w-full p-8'> */}

                <div className='flex h-full text-justify flex-col px-8'>
                    {/* <div className=''> */}
                        <img src={webdev} alt='image' className=' w-full h-3/5  hover:scale-105 duration-500 
                        shadow-md py-2  rounded-lg text-center shadow-blue-400 mt-5 p-4'  />
                    {/* </div> */}
                    <p className='text-xl w-auto mt-16'>"Hi there! I'm Shubhangi Jadhav, a passionate frontend developer with expertise in React.js, Redux, HTML, CSS, JavaScript, and the Tailwind CSS framework. I have a deep love for web development and enjoy creating beautiful and intuitive user interfaces.
                        My proficiency in React.js allows me to build dynamic and interactive components, while Redux enables me to effectively manage state and data flow within complex applications. <br />
                        Aside from technical skills, I value effective collaboration and teamwork. I enjoy working closely with designers, backend developers, and stakeholders to create seamless and impactful digital experiences. </p>

                </div>


                {/* </div> */}
            </div>




        </div>
    );
}

export default About;