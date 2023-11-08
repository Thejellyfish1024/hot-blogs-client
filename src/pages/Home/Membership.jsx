

const Membership = () => {
    return (
        <div className="max-w-7xl mx-auto lg:mb-64 p-8 lg:p-0  mt-16 relative">
            <h2 className="text-4xl font-bold text-center my-10">Membership Levels</h2>
            <div className="hero rounded-md min-h-screen lg:min-h-[70vh]" style={{ backgroundImage: 'url(https://blinkbits.com/wp-content/uploads/2018/10/Blogs-1.jpg)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className=" text-center text-neutral-content">
                    <div>
                        <h1 className="mb-4 text-5xl font-bold">Membership Options</h1>
                        <p className="mb-4 max-w-lg">Unlock Exclusive Benefits: Join our membership community to access premium content, connect with like-minded individuals, and enjoy special perks like early access, member-only events, and more. Elevate your experience on our blog today!</p>
                    </div>
                </div>
            </div>
            <div className="mt-5 lg:mt-0">
                <div className="  lg:absolute lg:-bottom-48 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:gap-0">
                    {/* silver */}
                    <div className="flex justify-center">
                        <div className="bg-base-300 md:w-4/5 w-4/6 rounded-md  flex flex-col justify-center items-center">
                            <h4 className="text-xl font-bold rounded-md bg-gray-400 w-full text-center py-2 ">Silver</h4>
                            <h5 className="text-lg mt-4 mb-6 font-bold">$5.00/Month</h5>
                            <div className="w-full px-3 ">
                                <button className="bg-[#FF3811] hover:bg-orange-500 rounded-lg font-bold text-white w-full py-2">Select</button>
                            </div>
                            <p className="px-3 text-center font-semibold my-3">Discover More with Silver: Upgrade to our Silver membership for enhanced access to exclusive content, ad-free browsing, and early updates. Perfect for those seeking a step up from the standard experience.</p>
                            <p className="py-2 rounded-md bg-gray-300 mt-4 w-full text-center font-bold">
                                Membership expires after 1 year.
                            </p>
                        </div>
                    </div>
                    {/* gold */}
                    <div className="flex justify-center">
                        <div className="bg-base-300 md:w-4/5 w-4/6 rounded-md  flex flex-col justify-center items-center">
                            <h4 className="text-xl font-bold rounded-md bg-gray-400 w-full text-center py-2 ">Gold</h4>
                            <h5 className="text-lg mt-4 mb-6 font-bold">$15.00/Month</h5>
                            <div className="w-full px-3 ">
                                <button className="bg-[#FF3811] hover:bg-orange-500 rounded-lg font-bold text-white w-full py-2">Select</button>
                            </div>
                            <p className="px-3 text-center font-semibold my-3">Go for the Gold: Elevate your blog journey with Gold membership, offering premium features like in-depth expert interviews, monthly webinars, and priority support. Enjoy the ultimate blog experience</p>
                            <p className="py-2 rounded-md bg-gray-300 mt-4 w-full text-center font-bold">
                                Membership expires after 1 year.
                            </p>
                        </div>
                    </div>
                    {/* platinum */}
                    <div className="flex justify-center">
                        <div className="bg-base-300 md:w-4/5 w-4/6 rounded-md  flex flex-col justify-center items-center">
                            <h4 className="text-xl font-bold rounded-md bg-gray-400 w-full text-center py-2 ">Platinum</h4>
                            <h5 className="text-lg mt-4 mb-6 font-bold">$40.00/Month</h5>
                            <div className="w-full px-3 ">
                                <button className="bg-[#FF3811] hover:bg-orange-500 rounded-lg font-bold text-white w-full py-2">Select</button>
                            </div>
                            <p className="px-3 text-center font-semibold my-3">Unleash Your Potential with Platinum: Our top-tier Platinum membership grants you all-access to our blog, exclusive one-on-one sessions invitations to special events. Experience the utmost in blog excellence.</p>
                            <p className="py-2 rounded-md bg-gray-300 mt-4 w-full text-center font-bold">
                                Membership expires after 1 year.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Membership;