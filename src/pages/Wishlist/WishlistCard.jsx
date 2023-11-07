/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const WishlistCard = ({ blog }) => {
    const { title, img, short_description ,category } = blog
    return (
        <div>
            <div className="relative flex w-full max-w-[48rem] h-[40vh] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative w-2/5  m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
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
                            {short_description}
                        </p>
                    </div>
                    <div>
                        <Link>
                            <button className="btn bg-pink-500 text-white hover:text-black">Show Details</button>
                        </Link>
                        <Link>
                            <button className="btn ml-3 bg-pink-500 text-white hover:text-black">Remove Wishlist</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistCard;