import { useState } from "react";
import useBlogs from "../../hooks/useBlogs";


const AllBlogs = () => {


    const [category , setCategory] = useState('blogs')

    const categoryLinks = <>
    <li onClick={() => setCategory('blogs')} className={` ${category == 'blogs' ? 'bg-red-500 text-white p-3 rounded-md' : 'p-3 rounded-md'}`}>All Blogs</li>
    <li onClick={() => setCategory('travel')} className={` ${category == 'travel' ? 'bg-red-500 text-white p-3 rounded-md' : 'p-3 rounded-md'}`}>Travel Blogs</li>
    <li onClick={() => setCategory('food')} className={` ${category == 'food' ? 'bg-red-500 text-white p-3 rounded-md' : 'p-3 rounded-md'}`}>Food Blogs</li>
    <li onClick={() => setCategory('lifestyle')} className={` ${category == 'lifestyle' ? 'bg-red-500 text-white p-3 rounded-md' : 'p-3 rounded-md'}`}>Lifestyle Blogs</li>
    <li onClick={() => setCategory('technology')} className={` ${category == 'technology' ? 'bg-red-500 text-white p-3 rounded-md' : 'p-3 rounded-md'}`}>Technology Blogs</li>
    <li onClick={() => setCategory('finance')} className={` ${category == 'finance' ? 'bg-red-500 text-white p-3 rounded-md' : 'p-3 rounded-md'}`}>Finance Blogs</li>
    </>

    const {data, isLoading} = useBlogs(category);
    console.log(data, isLoading);

    if(isLoading){
        return <div className="text-3xl text-center font-bold mt-10">Loading ....</div>
    }

    return (
        <div className="max-w-7xl mx-auto my-10">
            <ul className="flex text-lg font-bold justify-center gap-5 ">
                {categoryLinks}
            </ul>
        </div>
    );
};

export default AllBlogs;