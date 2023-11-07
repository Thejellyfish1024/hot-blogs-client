import useBlogs from "../../hooks/useBlogs";
import SingleBlog from "./singleBlog";


// 4. You will have to show six blogs in the recent blogs section. Each blog should have a
// title, image, short description, category, details button and wishlist button. Clicking the
// wishlist button will add the blog on wishlist page
// a. 💡 Clue: While inserting new blog into the database include the current time,
// so you can sort blogs by date or time

const RecentBlogs = () => {
    const { data, isLoading } = useBlogs('recentBlogs')
    console.log(data, isLoading);

    // if(isLoading){
    //     return <div className="text-3xl text-center font-bold mt-10">Loading ....</div>
    // }
    // if(data) {


    // }
    return (
        <div className="max-w-7xl mx-auto flex justify-center my-16">
            <div>
                <h2 className="text-4xl text-center font-bold my-10">Recent Blogs</h2>
                {
                    isLoading ?
                        <div className="text-3xl text-center font-bold mt-10">Loading ....</div>
                        :
                        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {
                                data?.map(blog => <SingleBlog key={blog._id} blog={blog}></SingleBlog>)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default RecentBlogs;