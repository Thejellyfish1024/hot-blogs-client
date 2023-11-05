import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="">
            <div className="hero min-h-[90vh]" style={{ backgroundImage: 'url(https://i.ibb.co/KL5Tkw9/corinne-kutz-t-MI2-r5-Nfo-unsplash.jpg)' }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className=" text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 md:text-5xl text-3xl font-bold">Publish your passions, your way</h1>
                        <p className="mb-5 font-bold text-lime-500">Create a unique and beautiful blog easily.</p>
                        <Link to='/addBlog'>
                            <button className="btn bg-orange-500 hover:text-black border-none text-white">Create Your Blog</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;