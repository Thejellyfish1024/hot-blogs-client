import { NavLink, Outlet } from "react-router-dom";

const Root = () => {

    const navLinks = <>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-red-500 text-lg md:text-xl font-bold " : "text-lg md:text-xl font-semibold"} >
            <li><a>Home</a></li>
        </NavLink>
        <NavLink to="/addBlog" className={({ isActive }) => isActive ? "text-red-500 text-lg md:text-xl font-bold" : "text-lg md:text-xl font-semibold"} >
            <li><a>Add Blog</a></li>
        </NavLink>
        <NavLink to="/allBlogs" className={({ isActive }) => isActive ? "text-red-500 text-lg md:text-xl font-bold" : "text-lg md:text-xl font-semibold"} >
            <li><a>All Blogs</a></li>
        </NavLink>
        <NavLink to="/featuredBlogs" className={({ isActive }) => isActive ? "text-red-500 text-lg md:text-xl font-bold" : "text-lg md:text-xl font-semibold"} >
            <li><a>Featured Blogs</a></li>
        </NavLink>
        <NavLink to="/allBlogs" className={({ isActive }) => isActive ? "text-red-500 text-lg md:text-xl font-bold" : "text-lg md:text-xl font-semibold"} >
            <li><a>Wishlist</a></li>
        </NavLink>
    </>

    return (
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
                            <div>
                                <button className=" btn btn-outline text-[#FF3811] btn-sm md:btn-md md:px-6 mr-3">Login</button>
                                <button className=" btn btn-outline text-[#FF3811] btn-sm md:btn-md md:px-6">Register</button>
                            </div>
                        </div>
                    </div>
                
                {/* Page content here */}
                <div>
                    <Outlet></Outlet>
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
    );
};

export default Root;