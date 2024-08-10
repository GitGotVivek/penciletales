import React from 'react'
import Blogpage from '../Components/Blogpage'
import Carousal from './Carousal'

const Blogs = () => {
    return (
        <div>
            <Carousal />
            <div className='max-w-7xl mx-auto'>
                <Blogpage />
            </div>
        </div>
    )
}

export default Blogs