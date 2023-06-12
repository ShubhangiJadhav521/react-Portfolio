import React from 'react';

function Contact(props) {
    return (
        <div name='contact' className='w-full h-screen bg-gradient-to-t from-black to-gray-800 text-white'>
            <div className='flex flex-col p-4 justify-center h-full max-w-screen-lg mx-auto'>

                <div className='pb-8'>
                    <p className='text-4xl font-bold inline  border-b-4 border-gray-500'>Contact</p>
                    <p className='py-6'>Submit the form below to get in touch with me</p>
                    <div className='flex justify-center items-center'>
                        <form className='flex flex-col w-full md:w-1/2' action='https://getform.io/f/74ad5221-7a7b-42b2-a738-367c384dd666' method='POST'>
                            <input type='text' name='name' placeholder='Enter Name'
                                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                            <input type='email' name='email' placeholder='Enter Email'
                                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4' />



                            <textarea type='text' name='message' rows={10} placeholder='Enter your message'
                                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                                <button className='text-white bg-gradient-to-t from-cyan-500 to-blue-500 px-6 py-3 my-8
                                mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>


                        </form>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Contact;