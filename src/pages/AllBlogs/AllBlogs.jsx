import { useState } from "react";
import useBlogs from "../../hooks/useBlogs";
import SingleBlog from "../Home/singleBlog";


const AllBlogs = () => {


    const [category, setCategory] = useState('blogs')

    const categoryLinks = <>
        <li onClick={() => setCategory('blogs')} className={` ${category == 'blogs' ? 'bg-red-500 text-white p-3 rounded-md' : 'p-3 rounded-md'}`}>All Blogs</li>
        <li onClick={() => setCategory('travel')} className={` ${category == 'travel' ? 'bg-red-500 text-white p-3 rounded-md' : 'p-3 rounded-md'}`}>Travel Blogs</li>
        <li onClick={() => setCategory('food')} className={` ${category == 'food' ? 'bg-red-500 text-white p-3 rounded-md' : 'p-3 rounded-md'}`}>Food Blogs</li>
        <li onClick={() => setCategory('lifestyle')} className={` ${category == 'lifestyle' ? 'bg-red-500 text-white p-3 rounded-md' : 'p-3 rounded-md'}`}>Lifestyle Blogs</li>
        <li onClick={() => setCategory('technology')} className={` ${category == 'technology' ? 'bg-red-500 text-white p-3 rounded-md' : 'p-3 rounded-md'}`}>Technology Blogs</li>
        <li onClick={() => setCategory('finance')} className={` ${category == 'finance' ? 'bg-red-500 text-white p-3 rounded-md' : 'p-3 rounded-md'}`}>Finance Blogs</li>
    </>

    const { data, isLoading } = useBlogs(category);
    console.log(data, isLoading);


    return (
        <div className="max-w-7xl mx-auto my-10">
            <ul className="grid p-4 lg:grid-cols-6 grid-cols-3 text-center lg:text-lg lg:font-bold font-medium justify-center gap-5 ">
                {categoryLinks}
            </ul>
            {
                isLoading ?
                    <div className="text-3xl text-center font-bold mt-10">Loading ....</div>
                    :
                    <div className="flex justify-center">
                        <div className="mt-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {
                                data?.map(blog => <SingleBlog key={blog._id} blog={blog}></SingleBlog>)
                            }
                        </div>
                    </div>

            }

        </div>
    );
};

export default AllBlogs;