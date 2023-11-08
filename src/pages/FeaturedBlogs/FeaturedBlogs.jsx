import DataTable from "react-data-table-component";
import useBlogs from "../../hooks/useBlogs";


const FeaturedBlogs = () => {

    const {data,isLoading} = useBlogs('featuredBlogs')
    console.log(data,isLoading);


    if(isLoading){
        return <div>Loading....</div>
    }

    let blogLengths = data.map(blog => blog.longDesLength)
    
    blogLengths.sort(function(a,b) {
        return a - b
    });
    const sortedBlogs = blogLengths.reverse()
    console.log(sortedBlogs);

    let topTenBlogs = [];
    
    for (let i of sortedBlogs){
        const topBlog = data.find(blog => blog.longDesLength === i)
        topTenBlogs.push(topBlog)
    }
    console.log(topTenBlogs);


    const columns = [
        {
            name: 'Serial',
            selector: row => (topTenBlogs.indexOf(row)) + 1,
        },
        {
            name: 'Blog Title',
            selector: row => <p className="font-semibold">{row.title}</p>
        },
        {
            name: 'Owner Profile',
            selector: row => <img src={row.userImg} className="w-10 h-10 my-2 ml-4 rounded-full" alt="" />
        },
        {
            name: 'Owner Name',
            selector: row =><p className="font-semibold">{ row.userName }</p>
        },
       
    ];
    return (
        <div className="min-h-screen">
            <DataTable
            columns={columns}
            data={topTenBlogs}
        />
        </div>
    );
};

export default FeaturedBlogs;