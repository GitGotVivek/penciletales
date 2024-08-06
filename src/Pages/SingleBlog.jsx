
import React from 'react'
import { FaClock, FaUser } from 'react-icons/fa6';
import { useLocation } from 'react-router-dom'
import Sidebar from '../Components/Sidebar';
import Carousal from './Carousal';

const SingleBlog = () => {
    const location = useLocation();
    const locationState = location.state;
    const { title, image, category, author, published_date, reading_time, content } = locationState;

    return (
        <div className='bg-gray-100'>
            {/* <div className='py-16 bg-black text-center text-white px-4 md:px-8 lg:px-16'>
                <h2 className='text-4xl sm:text-5xl lg:text-6xl leading-snug font-bold mb-4 md:mb-6'>Single Blog Page</h2>
            </div> */}
            <Carousal />

            <div className='max-w-7xl mx-auto my-8 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col lg:flex-row gap-8 lg:gap-12'>
                <div className='lg:w-3/4'>
                    <div className='mb-6'>
                        <img src={image} alt="" className='w-full rounded-lg shadow-md' />
                    </div>
                    <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold mt-6 mb-4 text-blue-500'>{title}</h2>
                    <p className='mb-3 text-gray-700'><FaUser className='inline-flex items-center mr-2' />{author} | {published_date}</p>
                    <p className='mb-3 text-gray-700'><FaClock className='inline-flex items-center mr-2' />{reading_time}</p>

                    <div className='text-base text-gray-600'>
                        <p className='mb-6'>{content}</p>
                        {/* You may want to split content into paragraphs or sections if it’s too long */}
                    </div>
                </div>

                <div className='lg:w-1/4'>
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}

export default SingleBlog
