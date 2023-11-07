import { useEffect, useRef, useState } from "react";
import useBlogs from "../../hooks/useBlogs";
import SingleBlog from "../Home/singleBlog";
// import { useQuery } from "@tanstack/react-query";


const AllBlogs = () => {


    const [blogs, setBlogs] = useState(null)
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
    // console.log(data, isLoading);

    useEffect(() => {
        setBlogs(data)
    }, [data])

    const inputRef = useRef(null);

    const handleSearch = () => {
        const title = inputRef.current.value;
        // console.log(title);
        const searchedBlog = blogs?.find(blog => blog.title.toLowerCase() == title.toLowerCase())
        if (searchedBlog) {
            const singleArrBlog = [searchedBlog]
            // console.log(singleArrBlog);
            setBlogs(singleArrBlog)
        }
        else {
            setBlogs(null)
        }
    }


    return (
        <div className="max-w-7xl mx-auto my-10 min-h-screen">
            <ul className="grid p-4 lg:grid-cols-6 grid-cols-3 text-center lg:text-lg lg:font-bold font-medium justify-center gap-5 ">
                {categoryLinks}
            </ul>
            <div className="flex mt-3 justify-center">
                <div className="w-1/2 flex border border-gray-300 rounded-lg">
                    <input name="search" ref={inputRef} type="text" placeholder="Search here..." className=" border-gray-500 rounded-md  pl-5 text-lg w-full " />
                    <button onClick={() => handleSearch()} className="bg-red-500 p-3 rounded-r-lg btn text-white hover:text-black">Search</button>
                </div>
            </div>
            {
                isLoading ?
                    <div className="text-3xl text-center font-bold mt-10">Loading ....</div>
                    :
                    <div className="flex justify-center">
                        {
                            blogs ?

                                <div className="mt-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {
                                        blogs?.map(blog => <SingleBlog key={blog?._id} blog={blog}></SingleBlog>)
                                    }
                                </div>
                                :
                                <div>
                                    <h2 className="text-4xl font-bold text-center my-16">No Blogs Found</h2>
                                </div>
                        }
                    </div>

            }

        </div>
    );
};

export default AllBlogs;