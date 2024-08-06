import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Sidebar from './Sidebar';
import BlogCard from './BlogCard';
import Category from './Category';
import Pagination from './Pagination';
import blog from '../blogsData.json'
const Blogpage = () => {
  const [blogs, setBlogs] = useState(blog);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12
  const [selecteCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null)
  console.log("d5fhg6f1", blog)
  const location = useLocation();
  const [isShow, setIsShow] = useState(false)
  const { pathname } = location;

  useEffect(() => {
    if (pathname === "/") {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  }, [pathname]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    setCurrentPage(1)
    setActiveCategory(category)
  }

  return (
    <div>
      {/* Category */}
      {!isShow && (
        <div>
          <Category onSelectCategory={handleCategoryChange} selectedCategory={selecteCategory} activeCategory={activeCategory} />
        </div>
      )}

      {/* All Blogs */}
      <div className={`${isShow && "mt-10 mb-10"} flex flex-col lg:flex-row gap-12`}>
        <BlogCard blogs={blogs} currentPage={currentPage} selecteCategory={selecteCategory} pageSize={pageSize} />
        {!isShow && (
          <div>
            <Sidebar />
          </div>
        )}

      </div>

      {/* Pagination */}
      {!isShow &&
        (<div >
          <Pagination currentPage={currentPage} blogs={blogs} pageSize={pageSize} onPageChange={handlePageChange} />
        </div>
        )}
    </div >
  );
};

export default Blogpage;
