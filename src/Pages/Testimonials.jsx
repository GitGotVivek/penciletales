import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../Images/user-01.png'
import img2 from '../Images/user-02.png'
import img3 from '../Images/user-03.png'
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
const Testimonials = () => {
    const userData = [
        { img: img1, name: "John Doe", socialLinks: { linkedin: "#", twitter: "#", facebook: "#" } },
        { img: img2, name: "Jane Smith", socialLinks: { linkedin: "#", twitter: "#", facebook: "#" } },
        { img: img3, name: "Michael Johnson", socialLinks: { linkedin: "#", twitter: "#", facebook: "#" } },
        { img: img1, name: "Emily Davis", socialLinks: { linkedin: "#", twitter: "#", facebook: "#" } },
        { img: img2, name: "Sarah Brown", socialLinks: { linkedin: "#", twitter: "#", facebook: "#" } },
        { img: img3, name: "David Wilson", socialLinks: { linkedin: "#", twitter: "#", facebook: "#" } }
    ];
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="slider-container bg-gray-200 p-6">
            <Slider {...settings}>

                <div className="flex items-start justify-center bg-white p-4 mx-4 my-2 rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105">
                    <div className="flex-shrink-0 w-1/3 flex items-center justify-center">
                        <img src={img1} alt="..." className="w-24 h-24 rounded-full mb-2 object-cover" />
                    </div>
                    <div className="flex-grow ml-4">
                        <h3 className="text-xl font-semibold mb-2">Jhon Doe</h3>
                        <p className="text-gray-700 mb-2">John is a web developer with 5 years of experience in creating amazing user experiences.</p>
                        <div className="flex space-x-2">
                            <a href="#" className="text-blue-700 hover:text-blue-900"><FaLinkedin /></a>
                            <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter /></a>
                            <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebook /></a>
                        </div>
                    </div>
                </div>

                <div className="flex items-start justify-center bg-white p-4 mx-4 my-2 rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105">
                    <div className="flex-shrink-0 w-1/3 flex items-center justify-center">
                        <img src={img2} alt="..." className="w-24 h-24 rounded-full mb-2 object-cover" />
                    </div>
                    <div className="flex-grow ml-4">
                        <h3 className="text-xl font-semibold mb-2">Emily Davis</h3>
                        <p className="text-gray-700 mb-2">Emily is a product manager with a knack for delivering high-quality products.</p>
                        <div className="flex space-x-2">
                            <a href="#" className="text-blue-700 hover:text-blue-900"><FaLinkedin /></a>
                            <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter /></a>
                            <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebook /></a>
                        </div>
                    </div>
                </div>

                <div className="flex items-start justify-center bg-white p-4 mx-4 my-2 rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105">
                    <div className="flex-shrink-0 w-1/3 flex items-center justify-center">
                        <img src={img3} alt="..." className="w-24 h-24 rounded-full mb-2 object-cover" />
                    </div>
                    <div className="flex-grow ml-4">
                        <h3 className="text-xl font-semibold mb-2">David Wilson</h3>
                        <p className="text-gray-700 mb-2">David is a software engineer with a passion for coding and problem-solving.</p>
                        <div className="flex space-x-2">
                            <a href="#" className="text-blue-700 hover:text-blue-900"><FaLinkedin /></a>
                            <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter /></a>
                            <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebook /></a>
                        </div>
                    </div>
                </div>

            </Slider>
        </div>
    );
}

export default Testimonials;



