import React from 'react'
import Banner from '../Navigation/Banner'
import Blogpage from '../Components/Blogpage'
import Testimonials from './Testimonials'

const Home = () => {
    return (
        <div>
            <Banner />
            <div className='max-w-7xl mx-auto'>
                <Blogpage />
                <Testimonials />
            </div>
        </div>
    )
}

export default Home