

import React from 'react';
import { FaXmark } from "react-icons/fa6";

const Modal = ({ isOpen, onClose, children, from }) => {
    if (!isOpen) return null;
    return (
        <div className={`${from && "mt-[285px]"} shadow-lg fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50`}>
            <div className="bg-white h-[500px] rounded-lg overflow-hidden w-full  max-w-lg p-2 relative">
                <button 
                    className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
                    onClick={onClose}
                >
                    <FaXmark className='w-6 h-6' />
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;

