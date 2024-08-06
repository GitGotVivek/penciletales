
// import React from 'react';
// import Carousal from './Carousal';

// const About = () => {
//     return (
//         <>
//             <Carousal />
//         </>
//     );
// };

// export default About;

import React from 'react';
import { Typography, Card } from "@material-tailwind/react";
import Carousal from './Carousal';

const About = () => {
    return (
        <>
            <Carousal />
            <div className="py-12 bg-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* About Section */}
                    <section className="mb-12">
                        <Typography variant="h2" className="text-3xl font-bold text-gray-800 mb-4 text-center">
                            About Our Blog
                        </Typography>
                        <Typography variant="body1" className="text-gray-700 mb-8 text-center">
                            Welcome to our blog! Here, we share insightful articles, latest trends, and tips on various topics including technology, health, finance, and more. Our goal is to provide valuable content that helps you stay informed and inspired.
                        </Typography>
                        <div className="flex justify-center gap-4">
                            <img
                                src="https://via.placeholder.com/300x200"
                                alt="Demo 1"
                                className="w-full sm:w-1/2 lg:w-1/3 rounded-lg shadow-lg"
                            />
                            <img
                                src="https://via.placeholder.com/300x200"
                                alt="Demo 2"
                                className="w-full sm:w-1/2 lg:w-1/3 rounded-lg shadow-lg"
                            />
                            <img
                                src="https://via.placeholder.com/300x200"
                                alt="Demo 3"
                                className="w-full sm:w-1/2 lg:w-1/3 rounded-lg shadow-lg"
                            />
                        </div>
                    </section>

                    {/* Cards Section */}
                    <section>
                        <Typography variant="h2" className="text-2xl font-bold text-gray-800 mb-6 text-center">
                            What We Offer
                        </Typography>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            <Card className="p-6 shadow-lg rounded-lg bg-white">
                                <Typography variant="h4" className="text-xl font-semibold mb-4">Latest Articles</Typography>
                                <Typography variant="body1" className="text-gray-700">
                                    Stay updated with our latest articles covering a wide range of topics. Our team of experts provides insightful content to keep you informed.
                                </Typography>
                            </Card>
                            <Card className="p-6 shadow-lg rounded-lg bg-white">
                                <Typography variant="h4" className="text-xl font-semibold mb-4">Expert Reviews</Typography>
                                <Typography variant="body1" className="text-gray-700">
                                    Our blog features detailed reviews and opinions from industry experts. Get an in-depth understanding of the latest trends and products.
                                </Typography>
                            </Card>
                            <Card className="p-6 shadow-lg rounded-lg bg-white">
                                <Typography variant="h4" className="text-xl font-semibold mb-4">Community Discussions</Typography>
                                <Typography variant="body1" className="text-gray-700">
                                    Join our community discussions to share your thoughts and engage with other readers. We value your input and encourage open conversations.
                                </Typography>
                            </Card>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default About;
