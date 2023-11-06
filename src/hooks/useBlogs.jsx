import { useQuery } from "@tanstack/react-query";


const useBlogs = (url) => {

    const {data, isLoading} = useQuery({
        queryKey :[`${url}`],
        queryFn: async () =>{
            const data = await fetch(`http://localhost:5000/${url}`)
            return await data.json()
        }
    })
    // console.log(data,isLoading);
    return {data, isLoading}
};

export default useBlogs;