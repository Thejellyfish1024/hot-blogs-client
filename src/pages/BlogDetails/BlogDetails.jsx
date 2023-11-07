/* eslint-disable react/no-unescaped-entities */
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import useBlogs from "../../hooks/useBlogs";
import Comments from "./Comments";


const BlogDetails = () => {
    const [value, setValue] = useState("")

    const { user } = useContext(AuthContext)
    const { id } = useParams()

    // console.log(id);
    const { data, isLoading } = useQuery({
        queryKey: [`${id}`],
        queryFn: async () => {
            const data = await fetch(`http://localhost:5000/blogs/${id}`)
            return await data.json()
        }
    })

    const allComments = useBlogs(`comments/${id}`)
    console.log(allComments);


    // console.log(data, isLoading);

    const onInput = (e) => setValue(e.target.value);

    const handleCommentSend = () => {
        const email = user?.email;
        const userName = user?.displayName;
        const userImg = user?.photoURL;

        const blog_id = id;
        const comment = value;

        const newCommentInfo = { email, userName, userImg, blog_id, comment }
        console.log(newCommentInfo);

        fetch('http://localhost:5000/comments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCommentInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.acknowledged) {
                    Swal.fire({
                        title: 'Thanks for your valuable comment!',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                    setValue("")
                    allComments?.refetch()
                }
            })
    }


    return (
        <div className="max-w-7xl mx-auto">
            <div className="hero  bg-base-300 my-10 rounded-lg">
                {
                    isLoading ?
                        <div>
                            <h2 className="text-3xl font-bold text-center my-10">Loading...</h2>
                        </div>
                        :
                        <div className="flex items-center p-5 gap-8 flex-col lg:flex-row w-full min-h-[70vh]">
                            <div className="w-full h-full">
                                <img src={data?.img} className="w-full h-[60vh] rounded-lg shadow-2xl" />
                            </div>
                            <div className="w-full flex flex-col min-h-[60vh]">
                                <div className="flex-grow">
                                    <h4 className="text-xl font-bold mb-3 uppercase text-orange-500">Category : {data?.category}</h4>
                                    <h1 className="text-5xl font-bold">{data?.title}</h1>
                                    <p className="py-6">{data?.long_description}</p>
                                </div>
                                <div>
                                    {
                                        user?.email === data?.email ?
                                            <div className="w-full text-end mt-3">
                                                <Link to={`/updateDetails/${id}`}>
                                                <button className="btn btn-primary">Update Blog</button>
                                                </Link>
                                            </div>
                                            :
                                            <div></div>
                                    }
                                </div>
                            </div>
                        </div>
                }
            </div>
            {/* comments section */}
            {/* write comment */}
            <div className="w-full border border-gray-500 rounded-md mt-5 mb-10 p-5">
                <h2 className="font-bold text-2xl">Comments</h2>
                {
                    user?.email === data?.email ?
                        <div className="text-xl font-bold my-5 text-blue-500 pl-10">Can't comment on own blog!</div>
                        :
                        <div className="flex items-center gap-4 my-5">
                            <img src={user?.photoURL} className="w-16 h-16 rounded-full" alt="" />
                            <div className="w-1/2 flex border border-blue-500 rounded-2xl ">
                                <input required name="search" value={value} onInput={onInput} type="text" placeholder="Write your comment..." className=" rounded-l-2xl pl-5 text-lg w-full " />
                                <button onClick={handleCommentSend} className="bg-blue-500 rounded-r-2xl py-3 px-8 font-bold text-white">Send</button>
                            </div>
                        </div>
                }
                {/* others comments */}
                {
                    allComments?.isLoading ?
                        <div>
                            <h2 className="text-2xl font-bold">Loading...</h2>
                        </div>
                        :
                        <div>
                            {
                                allComments?.data?.length > 0 ?
                                    <div className="pl-10 mt-10">
                                        {
                                            allComments?.data?.map(singleComment => <Comments key={singleComment._id} singleComment={singleComment}></Comments>)
                                        }
                                    </div>
                                    : 
                                    <div>
                                        <h2 className="text-xl font-bold pl-10 mt-10">No comments yet</h2>
                                    </div>
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default BlogDetails;