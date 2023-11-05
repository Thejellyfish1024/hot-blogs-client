import useBlogs from "../../hooks/useBlogs";


// 4. You will have to show six blogs in the recent blogs section. Each blog should have a
// title, image, short description, category, details button and wishlist button. Clicking the
// wishlist button will add the blog on wishlist page
// a. 💡 Clue: While inserting new blog into the database include the current time,
// so you can sort blogs by date or time

const RecentBlogs = () => {
    const {data,isLoading} = useBlogs('recentBlogs')
    console.log(data,isLoading);

    // if(isLoading){
    //     return <div className="text-3xl text-center font-bold mt-10">Loading ....</div>
    // }
    // if(data) {

        
    // }
    return (
        <div>
            <h2>Recent Blogs</h2>
            {
                isLoading ? 
                <div className="text-3xl text-center font-bold mt-10">Loading ....</div> 
                : 
                <div>
                    {
                        // data?.map(blog =>)
                    }
                </div>
            }
        </div>
    );
};

export default RecentBlogs;