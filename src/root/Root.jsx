import toast, { Toaster } from "react-hot-toast";
import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Root = () => {

    const { user, logOut } = useContext(AuthContext)
    const [showProfile, setShowProfile] = useState(false);


    const navLinks = <>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-red-500 text-lg md:text-xl font-bold " : "text-lg md:text-xl font-semibold"} >
            <li><p>Home</p></li>
        </NavLink>
        <NavLink to="/addBlog" className={({ isActive }) => isActive ? "text-red-500 text-lg md:text-xl font-bold" : "text-lg md:text-xl font-semibold"} >
            <li><p>Add Blog</p></li>
        </NavLink>
        <NavLink to="/allBlogs" className={({ isActive }) => isActive ? "text-red-500 text-lg md:text-xl font-bold" : "text-lg md:text-xl font-semibold"} >
            <li><p>All Blogs</p></li>
        </NavLink>
        <NavLink to="/featuredBlogs" className={({ isActive }) => isActive ? "text-red-500 text-lg md:text-xl font-bold" : "text-lg md:text-xl font-semibold"} >
            <li><p>Featured Blogs</p></li>
        </NavLink>
        <NavLink to="/wishlist" className={({ isActive }) => isActive ? "text-red-500 text-lg md:text-xl font-bold" : "text-lg md:text-xl font-semibold"} >
            <li><p>Wishlist</p></li>
        </NavLink>
    </>

    return (
        <div>
            <div className="drawer ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full bg-base-300 navbar md:p-5 p-3">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex max-w-7xl mx-auto justify-between w-full">
                            <div className="flex flex-col md:flex-row items-center">
                                <img src="https://w7.pngwing.com/pngs/204/418/png-transparent-social-media-blogger-computer-icons-logo-blog-text-rectangle-orange-thumbnail.png" className="w-10 h-10 lg:w-12 lg:h-12" alt="" />
                                <h4 className="text-lg md:text-xl italic font-bold ml-3 text-purple-500">Hot Blogs</h4>
                            </div>
                            <div className="flex-none hidden lg:block">
                                <ul className="menu menu-horizontal">
                                    {/* Navbar menu content here */}
                                    {navLinks}
                                </ul>
                            </div>
                            {
                                user ?
                                    <div className='relative flex items-center gap-3'>

                                        <button onClick={() => setShowProfile(!showProfile)}>
                                            {
                                                user?.photoURL ?
                                                    <img className='w-12 h-12 rounded-full' src={user.photoURL} alt="not found" /> :
                                                    <FaUserCircle className='text-4xl'></FaUserCircle>
                                            }
                                        </button>
                                        {/* top-9 right-0 */}
                                        <div className={`text-end bg-gray-300 z-30 p-5 top-12 right-1 rounded-lg absolute flex justify-center w-60 ${showProfile ? '' : 'hidden'}`}>
                                            <div className="">
                                                <div className="flex justify-center">
                                                    <img src={user?.photoURL} className="w-16 h-16 rounded-full" alt="" />
                                                </div>
                                                <div className="flex justify-center">
                                                    <h5 className='text-lg text-black font-semibold mb-2'>{user?.displayName}</h5>
                                                </div>
                                                <p className="text-center mb-2">{user?.email}</p>
                                                <div className="flex justify-center">
                                                    <button onClick={() => {
                                                        logOut();
                                                        setShowProfile(!showProfile)
                                                        toast.success('User logged out!!')
                                                    }} className=" btn btn-outline text-[#FF3811] btn-sm md:btn-md md:px-6">Log Out</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        <Link to='/login'>
                                            <button className=" btn btn-outline text-[#FF3811] btn-sm md:btn-md md:px-6 mr-3">Login</button>
                                        </Link>
                                        <Link to='/register'>
                                            <button className=" btn btn-outline text-[#FF3811] btn-sm md:btn-md md:px-6">Register</button>
                                        </Link>
                                    </div>
                            }
                        </div>
                    </div>

                    {/* Page content here */}
                    <div>
                        <Outlet></Outlet>
                        <Footer></Footer>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-36 md:w-48 min-h-full bg-base-200">
                        {/* Sidebar content here */}
                        {navLinks}
                    </ul>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Root;