import React from 'react';
import html from "../image/Html.png";
import css from '../image/Css.png';
import javascript from "../image/js.png";
import bootstrap from '../image/Bootstrap.jpeg';
import reactimg from '../image/React.png';
import tailwind from '../image/Tailwind.png';
import sql from '../image/sql2.webp';
import node from '../image/Node.png';
import Resume from './Resume';
import Project1 from '../image/project1.png';
import project2 from '../image/project2.png';


function Experience(props) {
    const techs = [
        {
            id: '1',
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: '2',
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: '3',
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: '4',
            src: bootstrap,
            title: 'BootStrap',
            style: 'shadow-indigo-500'
        },
        {
            id: '5',
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-blue-800'
        },
        {
            id: '6',
            src: reactimg,
            title: 'React JS',
            style: 'shadow-blue-600'
        },
        {
            id: '7',
            src: node,
            title: 'Node',
            style: 'shadow-green-500'
        },
        {
            id: '8',
            src: sql,
            title: 'SQL',
            style: 'shadow-blue-700'
        },

    ]
    const project = [
        {
            id: '1',
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: '2',
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: '3',
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: '4',
            src: bootstrap,
            title: 'BootStrap',
            style: 'shadow-indigo-500'
        },
        
       

    ]
    return (
        <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-auto min-h-fit  pb-10'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div className='py-10'>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>MY SKILLS</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>
                    {techs.map(({ id, src, title, style }) => (

                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>

                            <img src={src} alt="skill" className='w-20 mx-auto rounded-full' />
                            <p className='mt-4'>{title}</p>
                        </div>


                    ))}

                </div>
                <div className=' py-10'>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Projects</p>
                </div>

                <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-8  py-8 px-12 sm:px-0'>
                        <div  className={`shadow-md hover:scale-105 duration-500 py-2 w-auto rounded-lg text-center shadow-amber-700`}>
                        <p className='text-2xl m-4'>Project 1</p>
                        <div className='flex flex-col sm:flex-col mx-auto px-8'>
                            <img src={Project1} alt="skill" className=' w-auto h-auto m-4 sm:w-full  '  />
                            <div className='mt-4 text-left'>
                                <p> Project :<span className='text-xl text-amber-500 font-semibold'>&nbsp; Book Search App</span></p>
                                <p>Tech :&nbsp; CSS, ReactJs </p>
                           
                            </div>
                            </div>
                        </div>
                        <div  className={`shadow-md hover:scale-105 duration-500 py-2 w-auto rounded-lg text-center shadow-green-500`}>
                        <p className='text-2xl m-4'>Project 2</p>
                        <div className='flex flex-col sm:flex-col  mx-auto px-8'>
                            <img src={project2} alt="skill" className=' w-auto h-auto m-4 sm:w-full '  />
                            <div className='mt-4 text-left'>
                                <p>Project :<span className='text-xl text-red-300  font-semibold'>&nbsp; Specs-Shop</span> (E-commerce)</p>
                                <p>Tech :&nbsp; ReactJs, CSS, Bootstrap , Node , SQL</p>
                           
                            </div>
                            </div>
                        </div>
                </div>
            </div>

        </div>

    );
}

export default Experience;