/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const WishlistCard = ({ blog, refetch }) => {
    const { title, img, short_description, category ,_id } = blog

    const handleRemoveWishlist = () =>{
        fetch(`http://localhost:5000/wishlist/${_id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount > 0){
                refetch()
                Swal.fire({
                    title: 'Successfully Removed!',
                    icon: 'success',
                    confirmButtonText: 'Close'
                  })
            }
        })
    }

    return (
        <div className="p-8 lg:p-0 ">
            <div className="relative flex w-full max-w-[48rem] lg:min-h-[40vh] flex-col md:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative md:w-2/5  m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                    <img
                        src={img}
                        alt="image"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="p-6 flex flex-col">
                    <div className="flex-grow">
                        <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
                            {title}
                        </h6>
                        <h6 className="text-lg font-bold text-orange-500 mb-2 uppercase">Category : {category}</h6>
                        <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                            {short_description.slice(0, 100)}
                        </p>
                    </div>
                    <div>
                        <Link>
                            <button className="btn bg-pink-500 text-white hover:text-black">Show Details</button>
                        </Link>
                        <button onClick={handleRemoveWishlist} className="btn ml-3 bg-pink-500 text-white hover:text-black">Remove Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistCard;