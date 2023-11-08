import { useQuery } from "@tanstack/react-query";


const useBlogs = (url) => {

    const {data, isLoading ,refetch} = useQuery({
        queryKey :[`${url}`],
        queryFn: async () =>{
            const data = await fetch(`https://hot-blogs-server-jlk8dgjgo-al-amin-rahims-projects.vercel.app/${url}`)
            return await data.json()
        }
    })
    // console.log(data,isLoading);
    return {data, isLoading, refetch}
};

export default useBlogs;