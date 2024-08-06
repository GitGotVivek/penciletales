import React from 'react'
import Blogpage from '../Components/Blogpage'
import Carousal from './Carousal'

const Blogs = () => {
    return (
        <div>
            <Carousal />
            {/* <div className='py-40 bg-black text-center text-white px-4'>
                <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Blog Page</h2>
            </div> */}

            <div className='max-w-7xl mx-auto'>
                <Blogpage />
            </div>
        </div>
    )
}

export default Blogs