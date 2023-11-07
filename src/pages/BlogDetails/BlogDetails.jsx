import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";


const BlogDetails = () => {
    const { id } = useParams()
    // console.log(id);
    const { data, isLoading } = useQuery({
        queryKey: [`${id}`],
        queryFn: async () => {
            const data = await fetch(`http://localhost:5000/blogs/${id}`)
            return await data.json()
        }
    })
    console.log(data, isLoading);


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                {
                    isLoading ?
                        <div>
                            <h2 className="text-3xl font-bold text-center my-10">Loading...</h2>
                        </div>
                        :
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={data?.img} className="w-1/2 rounded-lg shadow-2xl" />
                            <div className="w-1/2">
                                <h1 className="text-5xl font-bold">{data?.title}</h1>
                                <p className="py-6">{data?.long_description}</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default BlogDetails;