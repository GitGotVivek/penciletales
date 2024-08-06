import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Pagination = ({ currentPage, blogs, pageSize, onPageChange }) => {
    const totalPages = Math.ceil(blogs?.length / pageSize);
    const renderPagination = () => {
        return Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <li key={pageNumber} className={`px-2 ${pageNumber === currentPage ? "bg-orange-500 text-white rounded-full" : ""}`}>
                <button onClick={() => onPageChange(pageNumber)}>{pageNumber}</button>
            </li>
        ));
    };

    return (
        <ul className='flex items-center justify-center gap-4 my-8'>
            <li>
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className='p-2 bg-gray-200 rounded-full disabled:opacity-50'
                >
                    <FaArrowLeft />
                </button>
            </li>
            <div className='flex gap-2'>
                {renderPagination()}
            </div>
            <li>
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className='p-2 bg-gray-200 rounded-full disabled:opacity-50'
                >
                    <FaArrowRight />
                </button>
            </li>
        </ul>
    );
}

export default Pagination;
