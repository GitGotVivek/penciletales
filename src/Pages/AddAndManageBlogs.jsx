
// import React, { useState } from 'react';
// import { FaTimes } from 'react-icons/fa';
// import { HiOutlinePlusCircle } from "react-icons/hi";
// import Select from 'react-select';
// import { Card, Input, Typography } from "@material-tailwind/react";

// const AddAndManageBlogs = ({ setModal }) => {
//     const initial = {
//         title: "",
//         category: "",
//         content: ""
//     };
//     const [addBlog, setAddBlog] = useState(initial);
//     const [blogImages, setBlogImages] = useState([{file:""}]);
//     const categoryOptions = [
//         { value: 'tech', label: 'Technology' },
//         { value: 'health', label: 'Health' },
//         { value: 'finance', label: 'Finance' },
//         { value: 'education', label: 'Education' },
//     ];

//     // >>>>Handle Change Blog Input<<<<
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setAddBlog({ ...addBlog, [name]: value });
//     };

//     // >>>>Handle Category Change<<<<
//     const handleCategoryChange = (selectedOption) => {
//         setAddBlog({ ...addBlog, category: selectedOption ? selectedOption.value : "" });
//     };

//     // >>>>Handle Change Blog Images<<<<
//     const handleChangeImages = (e, ind) => {
//         const { files } = e.target;
//         // const fileName = files[0].name;
//         const updatedBlogImages = addBlog.blogImages.map((item, i) => {
//             if (i === ind) {
//                 return { file: files };
//             } else {
//                 return item;
//             }
//         });
//         setAddBlog({ ...addBlog, blogImages: updatedBlogImages });
//     };

//     // >>>>Handle Add New Image Input<<<<
//     const addImageInput = () => {
//         setBlogImages([...blogImages, { file: "" }]);
//     };

//     // >>>>Handle Remove Image Input<<<<
//     const removeImageInput = (index) => {
//         const updatedImages = blogImages.filter((_, i) => i !== index);
//         setBlogImages(updatedImages);
//     };

//     // >>>>Handle Submit<<<<
//     const handleSubmit = () => {
//         const { title, category, content } = addBlog;
//         const data = {
//             title,
//             category,
//             content,
//             blogImages
//         };
//         console.log("dfgf4455", data);
//     };

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
//             <div className="bg-white p-4 md:p-8 rounded shadow-lg w-full md:w-1/2 max-w-3xl relative z-50">
//                 <Typography variant="h2" className="text-xl md:text-2xl font-bold mb-4">Add New Blog</Typography>
//                 <button
//                     onClick={() => setModal(false)}
//                     className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none"
//                 >
//                     <FaTimes className="text-xl" />
//                 </button>
//                 <Card className="max-h-[75vh] overflow-y-auto">
//                     <form>
//                         <div className="mb-4">
//                             <Typography variant="h6" color="blue-gray" className="mb-2">
//                                 Title
//                             </Typography>
//                             <Input
//                                 type="text"
//                                 size="lg"
//                                 name='title'
//                                 value={addBlog?.title}
//                                 onChange={handleChange}
//                                 placeholder="Enter blog title..."
//                                 className="!border-t-blue-gray-200 focus:!border-t-gray-900"
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <Typography variant="h6" color="blue-gray" className="mb-2">
//                                 Category
//                             </Typography>
//                             <Select
//                                 options={categoryOptions}
//                                 className="basic-single w-full"
//                                 classNamePrefix="select"
//                                 placeholder="Select category"
//                                 onChange={handleCategoryChange}
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <div className='flex items-center gap-2'>
//                                 <Typography variant="h6" color="blue-gray" className="mb-2">
//                                     Image
//                                 </Typography>
//                                 <HiOutlinePlusCircle
//                                     className="text-xl cursor-pointer text-red-500"
//                                     onClick={addImageInput}
//                                 />
//                             </div>
//                             {blogImages.map((ele, ind) => (
//                                 <div key={ind} className="flex items-center gap-2 mb-3">
//                                     <Input
//                                         type="file"
//                                         name='blogImages'
//                                         onChange={(e) => handleChangeImages(e, ind)}
//                                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                     />
//                                     {ind !== 0 && (
//                                         <FaTimes
//                                             className="text-xl cursor-pointer text-gray-500"
//                                             onClick={() => removeImageInput(ind)}
//                                         />
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                         <div className="mb-4">
//                             <Typography variant="h6" color="blue-gray" className="mb-2">
//                                 Content
//                             </Typography>
//                             <textarea
//                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                 name="content"
//                                 value={addBlog?.content}
//                                 onChange={handleChange}
//                                 placeholder="Enter content"
//                             ></textarea>
//                         </div>
//                     </form>
//                 </Card>
//                 <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-3">
//                     <button
//                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-auto"
//                         type="button"
//                         onClick={() => setModal(false)}
//                     >
//                         Cancel
//                     </button>
//                     <button
//                         className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-auto"
//                         type="button"
//                         onClick={handleSubmit}
//                     >
//                         Add Blog
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddAndManageBlogs;

import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { HiOutlinePlusCircle } from "react-icons/hi";
import Select from 'react-select';
import { Card, Input, Typography } from "@material-tailwind/react";

const AddAndManageBlogs = ({ setModal }) => {
    const initial = {
        title: "",
        category: "",
        content: "",
    };
    const [addBlog, setAddBlog] = useState(initial);
    const [blogImages, setBlogImages] = useState([{file:""}])
    const categoryOptions = [
        { value: 'tech', label: 'Technology' },
        { value: 'health', label: 'Health' },
        { value: 'finance', label: 'Finance' },
        { value: 'education', label: 'Education' },
    ];

    // >>>>Handle Change Blog Input<<<<
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddBlog({ ...addBlog, [name]: value });
    };

    // >>>>Handle Category Change<<<<
    const handleCategoryChange = (selectedOption) => {
        setAddBlog({ ...addBlog, category: selectedOption ? selectedOption.value : "" });
    };

    // >>>>Handle Change Blog Images<<<<
    const handleChangeImages = (e, ind) => {
        const { files } = e.target;
        const updatedBlogImages = blogImages.map((item, i) => {
            if (i === ind) {
                return { file: files[0] };
            } else {
                return item;
            }
        });
        setBlogImages(updatedBlogImages);
    };

    // >>>>Handle Add New Image Input<<<<
    const addImageInput = () => {
        setBlogImages([...blogImages, { file: "" }]);
    };

    // >>>>Handle Remove Image Input<<<<
    const removeImageInput = (index) => {
        const updatedImages = blogImages.filter((_, i) => i !== index);
        setBlogImages(updatedImages);
    };

    // >>>>Handle Submit<<<<
    const handleSubmit = () => {
        const { title, category, content } = addBlog;
        const data = {
            title,
            category,
            content,
            blogImages
        };
        console.log("SubmittedData", data);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-4 md:p-8 rounded shadow-lg w-full md:w-1/2 max-w-3xl relative z-50">
                <Typography variant="h2" className="text-xl md:text-2xl font-bold mb-4">Add New Blog</Typography>
                <button
                    onClick={() => setModal(false)}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none"
                >
                    <FaTimes className="text-xl" />
                </button>
                <Card className="max-h-[75vh] overflow-y-auto">
                    <form>
                        <div className="mb-4">
                            <Typography variant="h6" color="blue-gray" className="mb-2">
                                Title
                            </Typography>
                            <Input
                                type="text"
                                size="lg"
                                name='title'
                                value={addBlog?.title}
                                onChange={handleChange}
                                placeholder="Enter blog title..."
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                            />
                        </div>
                        <div className="mb-4">
                            <Typography variant="h6" color="blue-gray" className="mb-2">
                                Category
                            </Typography>
                            <Select
                                options={categoryOptions}
                                className="basic-single w-full"
                                classNamePrefix="select"
                                placeholder="Select category"
                                onChange={handleCategoryChange}
                            />
                        </div>
                        <div className="mb-4">
                            <div className='flex items-center gap-2'>
                                <Typography variant="h6" color="blue-gray" className="mb-2">
                                    Image
                                </Typography>
                                <HiOutlinePlusCircle
                                    className="text-xl cursor-pointer text-red-500"
                                    onClick={addImageInput}
                                />
                            </div>
                            {blogImages.map((ele, ind) => (
                                <div key={ind} className="flex items-center gap-2 mb-3">
                                    <Input
                                        type="file"
                                        name='blogImages'
                                        onChange={(e) => handleChangeImages(e, ind)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    {ind !== 0 && (
                                        <FaTimes
                                            className="text-xl cursor-pointer text-gray-500"
                                            onClick={() => removeImageInput(ind)}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="mb-4">
                            <Typography variant="h6" color="blue-gray" className="mb-2">
                                Content
                            </Typography>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="content"
                                value={addBlog?.content}
                                onChange={handleChange}
                                placeholder="Enter content"
                            ></textarea>
                        </div>
                    </form>
                </Card>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-3">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-auto"
                        type="button"
                        onClick={() => setModal(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-auto"
                        type="button"
                        onClick={handleSubmit}
                    >
                        Add Blog
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddAndManageBlogs;
