

// import React from 'react';
// import Carousal from './Carousal';

// const Contact = () => {
//     return (
//         <>
//             <Carousal />

//             <div className="bg-gray-100 py-12">
//                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                         {/* Contact Form */}
//                         <div className="bg-white p-6 rounded-lg shadow-lg">
//                             <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
//                             <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//                             <form className="space-y-6">
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                     <div>
//                                         <label htmlFor="first-name" className="block text-gray-700 font-medium mb-1">First Name</label>
//                                         <input type="text" id="first-name" name="firstName" className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
//                                     </div>
//                                     <div>
//                                         <label htmlFor="last-name" className="block text-gray-700 font-medium mb-1">Last Name</label>
//                                         <input type="text" id="last-name" name="lastName" className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
//                                     </div>
//                                     <div>
//                                         <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
//                                         <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
//                                     </div>
//                                     <div>
//                                         <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone Number</label>
//                                         <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <label htmlFor="message" className="block text-gray-700 font-medium mb-1">What do you have in mind?</label>
//                                     <textarea id="message" name="message" rows="4" placeholder="Please enter your query..." className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
//                                 </div>
//                                 <button type="submit" className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500">Submit</button>
//                             </form>
//                         </div>

//                         {/* Contact Information */}
//                         <div className="bg-white p-6 rounded-lg shadow-lg">
//                             <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
//                             <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//                             <div className="space-y-6">
//                                 <div className="flex items-center">
//                                     <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET21.jpg" alt="Phone Icon" className="w-8 h-8 mr-4" />
//                                     <p className="text-gray-700">+1258 3258 5679</p>
//                                 </div>
//                                 <div className="flex items-center">
//                                     <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET22.jpg" alt="Email Icon" className="w-8 h-8 mr-4" />
//                                     <p className="text-gray-700">hello@workik.com</p>
//                                 </div>
//                                 <div className="flex items-center">
//                                     <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET23.jpg" alt="Address Icon" className="w-8 h-8 mr-4" />
//                                     <p className="text-gray-700">102 street, y cross 485656</p>
//                                 </div>
//                             </div>
//                             <div className="flex gap-4 mt-6">
//                                 <a href="#" className="text-gray-600 hover:text-gray-800"><img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" alt="Mail Icon" className="w-6 h-6" /></a>
//                                 <a href="#" className="text-gray-600 hover:text-gray-800"><img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg" alt="Twitter Icon" className="w-6 h-6" /></a>
//                                 <a href="#" className="text-gray-600 hover:text-gray-800"><img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" alt="Instagram Icon" className="w-6 h-6" /></a>
//                                 <a href="#" className="text-gray-600 hover:text-gray-800"><img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" alt="Facebook Icon" className="w-6 h-6" /></a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Contact;

import React from 'react';
import Carousal from './Carousal';
import { Input, Typography, Button } from '@material-tailwind/react';

const Contact = () => {
    return (
        <>
            <Carousal />

            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Contact Form */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <Typography variant="h2" className="text-2xl font-bold text-gray-800 mb-4">Contact Us</Typography>
                            <Typography variant="body1" className="text-gray-600 mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Typography>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <Typography variant="h6" color="blue-gray" className="block text-gray-700 font-medium mb-1">
                                            First Name
                                        </Typography>
                                        <Input
                                            type="text"
                                            id="first-name"
                                            name="firstName"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter your first name"
                                        />
                                    </div>
                                    <div>
                                        <Typography variant="h6" color="blue-gray" className="block text-gray-700 font-medium mb-1">
                                            Last Name
                                        </Typography>
                                        <Input
                                            type="text"
                                            id="last-name"
                                            name="lastName"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter your last name"
                                        />
                                    </div>
                                    <div>
                                        <Typography variant="h6" color="blue-gray" className="block text-gray-700 font-medium mb-1">
                                            Email
                                        </Typography>
                                        <Input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                    <div>
                                        <Typography variant="h6" color="blue-gray" className="block text-gray-700 font-medium mb-1">
                                            Phone Number
                                        </Typography>
                                        <Input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter your phone number"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <Typography variant="h6" color="blue-gray" className="block text-gray-700 font-medium mb-1">
                                        What do you have in mind?
                                    </Typography>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        placeholder="Please enter your query..."
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    ></textarea>
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                >
                                    Submit
                                </Button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <Typography variant="h2" className="text-2xl font-bold text-gray-800 mb-4">Contact Information</Typography>
                            <Typography variant="body1" className="text-gray-600 mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Typography>
                            <div className="space-y-6">
                                <div className="flex items-center">
                                    <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET21.jpg" alt="Phone Icon" className="w-8 h-8 mr-4" />
                                    <Typography variant="body1" className="text-gray-700">+1258 3258 5679</Typography>
                                </div>
                                <div className="flex items-center">
                                    <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET22.jpg" alt="Email Icon" className="w-8 h-8 mr-4" />
                                    <Typography variant="body1" className="text-gray-700">hello@workik.com</Typography>
                                </div>
                                <div className="flex items-center">
                                    <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET23.jpg" alt="Address Icon" className="w-8 h-8 mr-4 hover:text-orange-500" />
                                    <Typography variant="body1" className="text-gray-700">102 street, y cross 485656</Typography>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-6">
                                <a href="#" className="text-gray-600 hover:text-gray-800"><img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" alt="Mail Icon" className="w-6 h-6" /></a>
                                <a href="#" className="text-gray-600 hover:text-gray-800"><img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg" alt="Twitter Icon" className="w-6 h-6" /></a>
                                <a href="#" className="text-gray-600 hover:text-gray-800"><img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" alt="Instagram Icon" className="w-6 h-6" /></a>
                                <a href="#" className="text-gray-600 hover:text-gray-800"><img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" alt="Facebook Icon" className="w-6 h-6" /></a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;

