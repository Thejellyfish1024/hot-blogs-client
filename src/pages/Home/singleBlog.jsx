/* eslint-disable react/prop-types */

// https://i.ibb.co/Z6m1KgZ/travel1.webp

const SingleBlog = ({ blog }) => {
    const { title, img, short_description } = blog
    return (
        <div>
            <div className=" flex flex-col lg:w-96 w-80 lg:h-[60vh] md:h-[75vh] bg-base-300 rounded-lg">
                <figure className="w-full flex-1 ">
                    <img src="https://media.istockphoto.com/id/1157104804/photo/lifestyle-of-student-are-reading-textbook-at-coffee-shop.webp?b=1&s=170667a&w=0&k=20&c=BXjV-MaIXD6c9NPn2iPW8psNpLTcSqlLihrM-in7OBQ=" className="w-full h-full rounded-t-lg" alt="Shoes" />
                </figure>
                <div className="flex-1 flex flex-col p-5">
                    <div className="flex-1 space-y-3">
                        <h2 className="text-xl font-bold">
                            {title}
                        </h2>
                        <p>{short_description}</p>
                    </div>
                    <div className="mt-5 lg:mt-0 card-actions justify-end">
                        <div className="badge badge-outline font-bold p-5 text-[#FF3811] hover:text-white hover:bg-black">Details</div>
                        <div className="badge badge-outline font-bold p-5 text-[#FF3811] hover:text-white hover:bg-black">Wishlist</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;