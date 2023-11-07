import { useQuery } from "@tanstack/react-query";
import WishlistCard from "./WishlistCard";
import LoadingSkeleton from "../../shared/LoadingSkeleton";


const Wishlist = () => {

    const { data, isLoading, refetch } = useQuery({
        queryKey: ['wishlist'],
        queryFn: async () => {
            const data = await fetch(`http://localhost:5000/wishlist`)
            return await data.json()
        }
    })
    console.log(data, isLoading);

    return (
        <div className="max-w-7xl mx-auto min-h-[60vh] mb-16">
            <h2 className="text-4xl font-bold my-16 text-center">
                My Wishlists
            </h2>
            {
                isLoading ?
                    <div className="text-2xl mt-10 ">
                        <LoadingSkeleton></LoadingSkeleton>
                    </div>
                    :
                    <div>
                        {
                            data.length > 0 ?
                                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-2">
                                    {
                                        data?.map(blog => <WishlistCard key={blog._id} blog={blog} refetch={refetch}></WishlistCard>)
                                    }
                                </div>
                                :
                                <div>
                                    <h2 className="text-3xl text-red-500 font-bold my-16 text-center">No blogs added yet</h2>
                                </div>
                        }
                    </div>
            }
        </div>
    );
};

export default Wishlist;