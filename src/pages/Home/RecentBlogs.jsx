
import useBlogs from "../../hooks/useBlogs";
import SingleBlog from "./singleBlog";
import 'react-loading-skeleton/dist/skeleton.css'
import LoadingSkeleton from "../../shared/LoadingSkeleton";




const RecentBlogs = () => {
    const { data, isLoading } = useBlogs('recentBlogs')
    console.log(data, isLoading);
    return (
        <div className="max-w-7xl mx-auto flex justify-center my-16">
            <div>
                <h2 className="text-4xl text-center font-bold my-10">Recent Blogs</h2>
                {
                    isLoading ?
                        <div className="text-3xl font-bold mt-10">
                            <LoadingSkeleton></LoadingSkeleton>
                        </div>
                       
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