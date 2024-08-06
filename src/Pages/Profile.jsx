// import React from 'react'
// import Carousal from './Carousal'
// import { Typography, Input, Button, Card } from "@material-tailwind/react";
// import Select from 'react-select';

// const Profile = () => {
//     const genderOptions = [
//         { value: 'male', label: 'Male' },
//         { value: 'female', label: 'Female' },
//         { value: 'other', label: 'Other' },
//     ];
//     return (
//         <>
//             <Carousal />

//             <div className="py-12 bg-gray-100">
//                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                     <Card className="p-6 lg:p-8 shadow-lg rounded-lg bg-white">
//                         <Typography variant="h2" className="text-2xl font-bold text-gray-800 mb-6">User Profile</Typography>
//                         <form className="space-y-6">
//                             {/* Image Upload */}
//                             <div className="mb-4">
//                                 <Typography variant="h6" className="text-gray-700 mb-2">Profile Picture</Typography>
//                                 <Input
//                                     type="file"
//                                     size="lg"
//                                     placeholder="Upload your profile picture"
//                                     className="!border-gray-300 focus:!border-gray-900"
//                                     labelProps={{ className: "before:content-none after:content-none" }}
//                                 />
//                             </div>

//                             {/* Name */}
//                             <div className="mb-4">
//                                 <Typography variant="h6" className="text-gray-700 mb-2">Name</Typography>
//                                 <Input
//                                     type="text"
//                                     size="lg"
//                                     placeholder="Enter your name"
//                                     className="!border-gray-300 focus:!border-gray-900"
//                                     labelProps={{ className: "before:content-none after:content-none" }}
//                                 />
//                             </div>

//                             {/* Gender */}
//                             <div className="mb-4">
//                                 <Typography variant="h6" className="text-gray-700 mb-2">Gender</Typography>
//                                 <Select
//                                     options={genderOptions}
//                                     className="basic-single w-full"
//                                     classNamePrefix="select"
//                                     placeholder="Select gender"
//                                 />
//                             </div>

//                             {/* Date of Birth */}
//                             <div className="mb-4">
//                                 <Typography variant="h6" className="text-gray-700 mb-2">Date of Birth</Typography>
//                                 <Input
//                                     type="date"
//                                     size="lg"
//                                     placeholder="Select your date of birth"
//                                     className="!border-gray-300 focus:!border-gray-900"
//                                     labelProps={{ className: "before:content-none after:content-none" }}
//                                 />
//                             </div>

//                             {/* About User */}
//                             <div className="mb-4">
//                                 <Typography variant="h6" className="text-gray-700 mb-2">About You</Typography>
//                                 <Input
//                                     as="textarea"
//                                     size="lg"
//                                     placeholder="Tell us about yourself"
//                                     className="!border-gray-300 focus:!border-gray-900"
//                                     labelProps={{ className: "before:content-none after:content-none" }}
//                                 />
//                             </div>

//                             {/* Email */}
//                             <div className="mb-4">
//                                 <Typography variant="h6" className="text-gray-700 mb-2">Email</Typography>
//                                 <Input
//                                     type="email"
//                                     size="lg"
//                                     placeholder="Enter your email"
//                                     className="!border-gray-300 focus:!border-gray-900"
//                                     labelProps={{ className: "before:content-none after:content-none" }}
//                                 />
//                             </div>

//                             {/* Phone */}
//                             <div className="mb-4">
//                                 <Typography variant="h6" className="text-gray-700 mb-2">Phone Number</Typography>
//                                 <Input
//                                     type="tel"
//                                     size="lg"
//                                     placeholder="Enter your phone number"
//                                     className="!border-gray-300 focus:!border-gray-900"
//                                     labelProps={{ className: "before:content-none after:content-none" }}
//                                 />
//                             </div>

//                             {/* Social Media Links */}
//                             <div className="mb-4">
//                                 <Typography variant="h6" className="text-gray-700 mb-2">Social Media Links</Typography>
//                                 <Input
//                                     type="text"
//                                     size="lg"
//                                     placeholder="Facebook URL"
//                                     className="!border-gray-300 focus:!border-gray-900 mb-4"
//                                     labelProps={{ className: "before:content-none after:content-none" }}
//                                 />
//                                 <Input
//                                     type="text"
//                                     size="lg"
//                                     placeholder="Twitter URL"
//                                     className="!border-gray-300 focus:!border-gray-900 mb-4"
//                                     labelProps={{ className: "before:content-none after:content-none" }}
//                                 />
//                                 <Input
//                                     type="text"
//                                     size="lg"
//                                     placeholder="Instagram URL"
//                                     className="!border-gray-300 focus:!border-gray-900"
//                                     labelProps={{ className: "before:content-none after:content-none" }}
//                                 />
//                             </div>

//                             <div className="flex gap-4">
//                                 <Button
//                                     // color="blue"
//                                     className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 transition duration-200"
//                                     type="submit"
//                                 >
//                                     Save Changes
//                                 </Button>
//                                 <Button
//                                     className="w-full md:w-auto"
//                                     type="button"
//                                 >
//                                     Cancel
//                                 </Button>
//                             </div>
//                         </form>
//                     </Card>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Profile

import React, { useState } from 'react';
import Carousal from './Carousal';
import { Typography, Input, Button, Card } from "@material-tailwind/react";
import Select from 'react-select';
import { FaUserCircle } from "react-icons/fa";
const Profile = () => {
    const [profileImage, setProfileImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const genderOptions = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'other', label: 'Other' },
    ];

    return (
        <>
            <Carousal />

            <div className="py-12 bg-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Card className="p-6 lg:p-8 shadow-lg rounded-lg bg-white">
                        <Typography variant="h2" className="text-2xl font-bold text-gray-800 mb-6">User Profile</Typography>

                        {/* Profile Image Preview */}
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                {profileImage ? (
                                    <img src={profileImage} alt="Profile Preview" className="w-32 h-32 rounded-full object-cover" />
                                ) : (
                                    <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
                                        <span className="text-gray-500"><FaUserCircle className='text-[130px] text-center' /></span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <form className="space-y-6">
                            {/* Image Upload */}
                            <div className="mb-4">
                                <Typography variant="h6" className="text-gray-700 mb-2">Profile Picture</Typography>
                                <Input
                                    type="file"
                                    size="lg"
                                    onChange={handleImageChange}
                                    className="!border-gray-300 focus:!border-gray-900 shadow"
                                    labelProps={{ className: "before:content-none after:content-none" }}
                                />
                            </div>

                            {/* Name */}
                            <div className="mb-4">
                                <Typography variant="h6" className="text-gray-700 mb-2">Name</Typography>
                                <Input
                                    type="text"
                                    size="lg"
                                    placeholder="Enter your name"
                                    className="!border-gray-300 focus:!border-gray-900 shadow"
                                    labelProps={{ className: "before:content-none after:content-none" }}
                                />
                            </div>

                            {/* Gender */}
                            <div className="mb-4">
                                <Typography variant="h6" className="text-gray-700 mb-2">Gender</Typography>
                                <Select
                                    options={genderOptions}
                                    className="basic-single w-full shadow"
                                    classNamePrefix="select"
                                    placeholder="Select gender"
                                />
                            </div>

                            {/* Date of Birth */}
                            <div className="mb-4">
                                <Typography variant="h6" className="text-gray-700 mb-2">Date of Birth</Typography>
                                <Input
                                    type="date"
                                    size="lg"
                                    placeholder="Select your date of birth"
                                    className="!border-gray-300 focus:!border-gray-900 shadow"
                                    labelProps={{ className: "before:content-none after:content-none" }}
                                />
                            </div>

                            {/* About User */}
                            <div className="mb-4">
                                <Typography variant="h6" className="text-gray-700 mb-2">About You</Typography>
                                <textarea
                                    as="textarea"
                                    size="lg"
                                    placeholder="Tell us about yourself"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                                    labelProps={{ className: "before:content-none after:content-none" }}
                                >
                                </textarea>
                            </div>

                            {/* Email */}
                            <div className="mb-4">
                                <Typography variant="h6" className="text-gray-700 mb-2">Email</Typography>
                                <Input
                                    type="email"
                                    size="lg"
                                    placeholder="Enter your email"
                                    className="!border-gray-300 focus:!border-gray-900 shadow"
                                    labelProps={{ className: "before:content-none after:content-none" }}
                                />
                            </div>

                            {/* Phone */}
                            <div className="mb-4">
                                <Typography variant="h6" className="text-gray-700 mb-2">Phone Number</Typography>
                                <Input
                                    type="tel"
                                    size="lg"
                                    placeholder="Enter your phone number"
                                    className="!border-gray-300 focus:!border-gray-900 shadow"
                                    labelProps={{ className: "before:content-none after:content-none" }}
                                />
                            </div>

                            {/* Social Media Links */}
                            <div className="mb-4">
                                <Typography variant="h6" className="text-gray-700 mb-2">Social Media Links</Typography>
                                <Input
                                    type="text"
                                    size="lg"
                                    placeholder="Facebook URL"
                                    className="!border-gray-300 focus:!border-gray-900 mb-4 shadow"
                                    labelProps={{ className: "before:content-none after:content-none" }}
                                />
                                <Input
                                    type="text"
                                    size="lg"
                                    placeholder="Twitter URL"
                                    className="!border-gray-300 focus:!border-gray-900 mb-4"
                                    labelProps={{ className: "before:content-none after:content-none" }}
                                />
                                <Input
                                    type="text"
                                    size="lg"
                                    placeholder="Instagram URL"
                                    className="!border-gray-300 focus:!border-gray-900"
                                    labelProps={{ className: "before:content-none after:content-none" }}
                                />
                            </div>

                            <div className="flex gap-4">
                                <Button
                                    className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 transition duration-200 ease-in-out"
                                    type="submit"
                                >
                                    Save Changes
                                </Button>
                                <Button
                                    className="w-full md:w-auto"
                                    type="button"
                                >
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default Profile;
