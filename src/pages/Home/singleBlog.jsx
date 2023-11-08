/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';
import { motion } from "framer-motion";


const SingleBlog = ({ blog }) => {
    const { title, img, short_description, _id } = blog
    const { user } = useContext(AuthContext)

    const handleWishlist = (blog) => {

        const email = user?.email;
        const myWishlist = { ...blog, email }

        console.log(myWishlist);
        fetch('http://localhost:5000/wishlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myWishlist)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.acknowledged) {
                    Swal.fire({
                        title: 'Successfully Added to Wishlist!',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
            })
    }
    return (
        <div>
            <motion.div whileHover={{scale:1.1}} className=" flex flex-col lg:w-96 w-80 lg:h-[60vh] md:h-[75vh] bg-base-300 rounded-lg">
                <figure className="w-full flex-1 ">
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img src={img} className="w-full h-[32vh] rounded-t-lg" alt="loading" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="flex-1 flex flex-col p-5">
                    <div className="flex-1 space-y-3">
                        <h2 className="text-xl font-bold">
                            {title}
                        </h2>
                        <p>{short_description?.slice(0, 100)}</p>
                    </div>
                    <div className="mt-5 lg:mt-0 card-actions justify-end">
                        <Link to={`/blogs/${_id}`}>
                            <div className="badge badge-outline font-bold p-5 text-[#FF3811] hover:text-white hover:bg-black">Details</div>
                        </Link>
                        <div onClick={() => handleWishlist(blog)} className="badge badge-outline font-bold p-5 text-[#FF3811] hover:text-white hover:bg-black">Wishlist</div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SingleBlog;