import React from 'react'
import { FaUser } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blogs, currentPage, selecteCategory, pageSize }) => {
    const navigate = useNavigate()
    const filterBlogData = blogs?.filter((blogs) => !selecteCategory || blogs?.category === selecteCategory)?.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4">
            {filterBlogData?.map((data) => (
                <div className="p-5 shadow-lg rounded cursor-pointer" key={data?.id}
                    onClick={() => navigate('/single-blogs', { state: data })}
                >
                    <div>
                        <img src={data?.image} alt="" className="w-full rounded-lg shadow-md" />
                    </div>
                    <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">{data?.title}</h3>
                    <p className="mb-2 text-gray-600">
                        <FaUser className="inline-flex items-center mr-2" />
                        {data?.author}
                    </p>
                    <p className="text-sm text-gray-500">Published: {data?.published_date}</p>
                </div>
            ))}
        </div>
    )
}

export default BlogCard