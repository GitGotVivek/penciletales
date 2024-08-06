
// import React, { useState } from 'react';
// import img1 from "../Images/about.png";
// import img2 from "../Images/contact.png";
// import img3 from "../Images/about.png";
// import { useLocation, useNavigate } from 'react-router-dom';
// import AddAndManageBlogs from './AddAndManageBlogs';
// import Modal from '../Navigation/Modal';
// import Login from '../Auth/Login';

// const Carousal = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const { pathname } = location;
//     const [modal, setModal] = useState(false);
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const openModal = () => {
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//     };
//     let carouselText;

//     if (pathname === "/") {
//         carouselText = {
//             title: "Welcome to Our Blog",
//             description: "Start your blog today and join a community of writers and readers who are passionate about sharing their stories and ideas. We offer everything you need to get started, from helpful tips and tutorials.",
//             buttonText: "Get Log In",
//             buttonText2: "Blogs"
//         };
//     } else if (pathname === "/about") {
//         carouselText = {
//             title: "About Us",
//             description: "Learn more about our mission, values, and team. We are dedicated to providing quality content and a platform for sharing ideas.",
//             buttonText: "Learn More"
//         };
//     } else if (pathname === "/blogs") {
//         carouselText = {
//             title: "Our Blogs",
//             description: "Discover our latest posts and stay updated with the newest trends, tips, and stories from our community of writers. Dive into a variety of topics and find something that interests you.",
//             buttonText: "Add Blogs"
//         };
//     } else if (pathname === "/contact") {
//         carouselText = {
//             title: "Contact Us",
//             description: "Get in touch with us for any inquiries, feedback, or support. We're here to help you and answer any questions you might have.",
//         };
//     } else if (pathname === "/single-blogs") {
//         carouselText = {
//             title: "Single Blog Page",
//             description: "Get in touch with us for any inquiries, feedback, or support. We're here to help you and answer any questions you might have.",
//             buttonText: "Read More"
//         };
//     } else {
//         carouselText = {
//             title: "Welcome",
//             description: "Welcome to our site. Explore our content and learn more about what we have to offer.",
//         };
//     }

//     return (
//         <>
//             <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
//                 <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
//                     <input type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></input>
//                     <input type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></input>
//                     <input type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></input>
//                 </div>
//                 <div className="carousel-inner relative w-full overflow-hidden">
//                     <div className="carousel-item active relative float-left w-full">
//                         <img src={img1} className="block w-full h-[580px] object-cover" alt="..." />
//                         <div className="carousel-caption hidden md:block absolute text-center bg-black/50 backdrop-blur-sm p-4">
//                             <h1 className='text-2xl sm:text-3xl lg:text-5xl font-bold mb-2'>{carouselText.title}</h1>
//                             <p className='text-sm sm:text-base lg:text-lg text-gray-100'>{carouselText.description}</p>

//                             {carouselText?.buttonText && pathname === '/' ?
//                                 (
//                                     <button
//                                         className={`${carouselText?.buttonText2 && "mr-2"} mt-4 px-6 py-2 bg-transparent border-2 border-orange-500 text-white font-semibold rounded hover:bg-orange-500 transition duration-200 w-[200px]`}
//                                         onClick={openModal}
//                                     >
//                                         {carouselText?.buttonText}
//                                     </button>
//                                 )
//                                 :
//                                 (
//                                     <button
//                                         className={`${carouselText?.buttonText2 && "mr-2"} mt-4 px-6 py-2 bg-transparent border-2 border-orange-500 text-white font-semibold rounded hover:bg-orange-500 transition duration-200 w-[200px]`}
//                                         onClick={carouselText?.buttonText === "Add Blogs" ? () => setModal(!modal) : ""}
//                                     >
//                                         {carouselText?.buttonText}
//                                     </button>
//                                 )
//                             }

//                             {carouselText?.buttonText2 &&
//                                 <button className={`${carouselText?.buttonText2 && "mx-2"} mt-4 px-6 py-2 bg-orange-500 border-2 border-orange-500 text-white font-semibold rounded hover:bg-orange-600 hover:border-orange-600 transition duration-200 w-[200px]`} onClick={() => navigate('/blogs')}>{carouselText?.buttonText2}</button>
//                             }
//                         </div>
//                     </div>

//                     <div className="carousel-item relative float-left w-full">
//                         <img src={img2} className="block w-full h-[580px] object-cover" alt="..." />
//                         <div className="carousel-caption hidden md:block absolute text-center bg-black/50 backdrop-blur-sm p-4">
//                             <h1 className='text-2xl sm:text-3xl lg:text-5xl font-bold mb-2'>Share Your Thoughts</h1>
//                             <p className='text-sm sm:text-base lg:text-lg text-gray-100'>Reach out to us for any support or inquiries. Our team is ready to assist you with any questions or feedback.</p>

//                             {pathname === '/blogs' && carouselText?.buttonText &&
//                                 <button
//                                     className=' mt-4 px-6 py-2 bg-transparent border-2 border-orange-500 text-white font-semibold rounded hover:bg-orange-500 transition duration-200 w-[200px]'
//                                     onClick={carouselText?.buttonText === "Add Blogs" ? () => setModal(!modal) : ""}
//                                 >
//                                     {carouselText?.buttonText}
//                                 </button>
//                             }
//                         </div>
//                     </div>

//                     <div className="carousel-item relative float-left w-full">
//                         <img src={img3} className="block w-full h-[580px] object-cover" alt="..." />
//                         <div className="carousel-caption hidden md:block absolute text-center bg-black/50 backdrop-blur-sm p-4">
//                             <h1 className='text-2xl sm:text-3xl lg:text-5xl font-bold mb-2'>Our Category of Blogs</h1>
//                             <p className='text-sm sm:text-base lg:text-lg text-gray-100'>Explore the variety of services we offer. From consultation to implementation, we provide solutions tailored to your needs.</p>
//                             {pathname === '/blogs' && carouselText?.buttonText &&
//                                 <button
//                                     className=' mt-4 px-6 py-2 bg-transparent border-2 border-orange-500 text-white font-semibold rounded hover:bg-orange-500 transition duration-200 w-[200px]'
//                                     onClick={carouselText?.buttonText === "Add Blogs" ? () => setModal(!modal) : ""}
//                                 >
//                                     {carouselText?.buttonText}
//                                 </button>
//                             }
//                         </div>
//                     </div>
//                 </div>
//                 <button className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//                     <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
//                     <span className="visually-hidden">Previous</span>
//                 </button>
//                 <button className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//                     <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
//                     <span className="visually-hidden">Next</span>
//                 </button>
//             </div>

//             <Modal isOpen={isModalOpen} onClose={closeModal}>
//                 <Login />
//             </Modal>
//         </>
//     );
// }

// export default Carousal;


import React, { useState } from 'react';
import img1 from "../Images/about.png";
import img2 from "../Images/contact.png";
import img3 from "../Images/about.png";
import { useLocation, useNavigate } from 'react-router-dom';
import AddAndManageBlogs from './AddAndManageBlogs';
import Modal from '../Navigation/Modal';
import Login from '../Auth/Login';

const Carousal = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;
    const [modal, setModal] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    let carouselText;

    if (pathname === "/") {
        carouselText = {
            title: "Welcome to Our Blog",
            description: "Start your blog today and join a community of writers and readers who are passionate about sharing their stories and ideas. We offer everything you need to get started, from helpful tips and tutorials.",
            buttonText: "Get Log In",
            buttonText2: "Upload Blogs"
        };
    } else if (pathname === "/about") {
        carouselText = {
            title: "About Us",
            description: "Learn more about our mission, values, and team. We are dedicated to providing quality content and a platform for sharing ideas.",
            buttonText: "Learn More"
        };
    } else if (pathname === "/blogs") {
        carouselText = {
            title: "Our Blogs",
            description: "Discover our latest posts and stay updated with the newest trends, tips, and stories from our community of writers. Dive into a variety of topics and find something that interests you.",
            buttonText: "Add Blogs"
        };
    } else if (pathname === "/contact") {
        carouselText = {
            title: "Contact Us",
            description: "Get in touch with us for any inquiries, feedback, or support. We're here to help you and answer any questions you might have.",
        };
    } else if (pathname === "/single-blogs") {
        carouselText = {
            title: "Single Blog Page",
            description: "Get in touch with us for any inquiries, feedback, or support. We're here to help you and answer any questions you might have.",
            buttonText: "Read More"
        };
    } else {
        carouselText = {
            title: "Welcome",
            description: "Welcome to our site. Explore our content and learn more about what we have to offer.",
        };
    }

    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <input type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></input>
                    <input type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></input>
                    <input type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></input>
                </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active relative float-left w-full">
                        <img src={img1} className="block w-full h-[580px] object-cover" alt="..." />
                        <div className="carousel-caption block absolute text-center bg-black/50 backdrop-blur-sm p-4">
                            <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-2'>{carouselText.title}</h1>
                            <p className='text-xs sm:text-sm md:text-base lg:text-lg text-gray-100'>{carouselText.description}</p>

                            {carouselText?.buttonText && pathname === '/' ?
                                (
                                    <button
                                        className={`${carouselText?.buttonText2 && "mr-2"} mt-4 px-6 py-2 bg-transparent border-2 border-orange-500 text-white font-semibold rounded hover:bg-orange-500 transition duration-200 w-[200px]`}
                                        onClick={openModal}
                                    >
                                        {carouselText?.buttonText}
                                    </button>
                                )
                                :
                                (
                                    <button
                                        className={`${carouselText?.buttonText2 && "mr-2"} mt-4 px-6 py-2 bg-transparent border-2 border-orange-500 text-white font-semibold rounded hover:bg-orange-500 transition duration-200 w-[200px]`}
                                        onClick={carouselText?.buttonText === "Add Blogs" ? () => setModal(!modal) : ""}
                                    >
                                        {carouselText?.buttonText}
                                    </button>
                                )
                            }

                            {carouselText?.buttonText2 &&
                                <button className={`${carouselText?.buttonText2 && "mx-2"} mt-4 px-6 py-2 bg-orange-500 border-2 border-orange-500 text-white font-semibold rounded hover:bg-orange-600 hover:border-orange-600 transition duration-200 w-[200px]`} onClick={() => navigate('/blogs')}>{carouselText?.buttonText2}</button>
                            }
                        </div>
                    </div>

                    <div className="carousel-item relative float-left w-full">
                        <img src={img2} className="block w-full h-[580px] object-cover" alt="..." />
                        <div className="carousel-caption block absolute text-center bg-black/50 backdrop-blur-sm p-4">
                            <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-2'>Share Your Thoughts</h1>
                            <p className='text-xs sm:text-sm md:text-base lg:text-lg text-gray-100'>Reach out to us for any support or inquiries. Our team is ready to assist you with any questions or feedback.</p>

                            {pathname === '/blogs' && carouselText?.buttonText &&
                                <button
                                    className='mt-4 px-6 py-2 bg-transparent border-2 border-orange-500 text-white font-semibold rounded hover:bg-orange-500 transition duration-200 w-[200px]'
                                    onClick={carouselText?.buttonText === "Add Blogs" ? () => setModal(!modal) : ""}
                                >
                                    {carouselText?.buttonText}
                                </button>
                            }
                        </div>
                    </div>

                    <div className="carousel-item relative float-left w-full">
                        <img src={img3} className="block w-full h-[580px] object-cover" alt="..." />
                        <div className="carousel-caption block absolute text-center bg-black/50 backdrop-blur-sm p-4">
                            <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-2'>Our Category of Blogs</h1>
                            <p className='text-xs sm:text-sm md:text-base lg:text-lg text-gray-100'>Explore the variety of services we offer. From consultation to implementation, we provide solutions tailored to your needs.</p>
                            {pathname === '/blogs' && carouselText?.buttonText &&
                                <button
                                    className='mt-4 px-6 py-2 bg-transparent border-2 border-orange-500 text-white font-semibold rounded hover:bg-orange-500 transition duration-200 w-[200px]'
                                    onClick={carouselText?.buttonText === "Add Blogs" ? () => setModal(!modal) : ""}
                                >
                                    {carouselText?.buttonText}
                                </button>
                            }
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {isModalOpen && <Login isOpen={isModalOpen} onClose={closeModal} />}

            {modal && <AddAndManageBlogs setModal={setModal} />}
        </>
    );
}

export default Carousal;
