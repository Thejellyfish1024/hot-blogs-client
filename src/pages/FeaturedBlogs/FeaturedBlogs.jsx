import DataTable from "react-data-table-component";
import useBlogs from "../../hooks/useBlogs";
import LoadingSkeleton from "../../shared/LoadingSkeleton";


const FeaturedBlogs = () => {

    const { data, isLoading } = useBlogs('featuredBlogs')
    console.log(data, isLoading);


    if (isLoading) {
        return <div className="my-10 max-w-7xl mx-auto">
            <LoadingSkeleton></LoadingSkeleton>
        </div>
    }

    let blogLengths = data.map(blog => blog.longDesLength)

    blogLengths.sort(function (a, b) {
        return a - b
    });
    const sortedBlogs = blogLengths.reverse()
    console.log(sortedBlogs);

    let topTenBlogs = [];

    for (let i of sortedBlogs) {
        const topBlog = data.find(blog => blog.longDesLength === i)
        topTenBlogs.push(topBlog)
    }
    console.log(topTenBlogs);


    const columns = [
        {
            name: <p className="font-bold text-lg">{ 'Serial'}</p>,
            selector: row => <p className="font-bold">{(topTenBlogs.indexOf(row)) + 1}</p>
        },
        {
            name: <p className="font-bold text-lg">{'Blog Title'}</p>,
            selector: row => <p className="font-semibold">{row.title}</p>
        },
        {
            name:<p className="font-bold text-lg">{'Owner Profile'}</p>,
            selector: row => <img src={row.userImg} className="w-10 h-10 my-2 ml-4 rounded-full" alt="" />
        },
        {
            name: <p className="font-bold text-lg">{ 'Owner Name'}</p>,
            selector: row => <p className="font-semibold">{row.userName}</p>
        },

    ];
    return (
        <div className="min-h-screen max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center my-10">Top Ten Featured Blogs</h2>
            <DataTable
                columns={columns}
                data={topTenBlogs}
            />
        </div>
    );
};

export default FeaturedBlogs;