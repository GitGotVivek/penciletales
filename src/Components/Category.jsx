// import React from 'react'

// const Category = ({ onSelectCategory, selecteCategory, activeCategory }) => {
//     const categories = ["Startups", "Health", "AI", "Apps", "Fintech"]

//     return (
//         <div className='px-4 mb-8 lg:space-x-16 flex-wrap items-center border-b-2 py-5 text-gray-900 font-semibold'>
//             <button className={`lg:ml-12 ${activeCategory ? "" : "active-button"}`} onClick={() => onSelectCategory(null)}>All</button>
//             {
//                 categories?.map((category) => (
//                     <button key={category}
//                         onClick={() => onSelectCategory(category)}
//                         className={`mr-2 space-x-16 ${activeCategory === category ? "active-button" : ""}`}>{category}</button>
//                 ))
//             }
//         </div>
//     )
// }

// export default Category

import React from 'react';

const Category = ({ onSelectCategory, selecteCategory, activeCategory }) => {
    const categories = ["Startups", "Health", "AI", "Apps", "Fintech"];

    return (
        <div className='flex flex-wrap gap-4 items-center justify-center border-b-2 py-5 px-4 mb-8 text-gray-900 font-semibold'>
            <button className={`px-4 py-2 ${!activeCategory ? "active-button" : ""}`} onClick={() => onSelectCategory(null)}>All</button>
            {
                categories.map((category) => (
                    <button key={category}
                        onClick={() => onSelectCategory(category)}
                        className={`px-4 py-2 ${activeCategory === category ? "active-button" : ""}`}>{category}</button>
                ))
            }
        </div>
    );
}

export default Category;
