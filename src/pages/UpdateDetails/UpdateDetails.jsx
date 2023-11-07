import { useParams } from "react-router-dom";
import useBlogs from "../../hooks/useBlogs";


const UpdateDetails = () => {
    const { id } = useParams()
    console.log(id);

    const {data, isLoading} = useBlogs(`blogs/${id}`) 
     
    console.log(data);
    if(isLoading){
        return <div>
            <h2 className="text-3xl font-bold text-center my-10">Loading...</h2>
        </div>
    }
    const {title, img , email, short_description, long_description} = data;

    return (
        <div className="p-3 my-10">
            <div className="max-w-7xl mx-auto bg-base-300 p-4 rounded-xl">
                <h2 className="text-3xl font-bold text-center my-8 text-purple-500">Update Product</h2>
                <form className="p-5">
                    <div className="md:flex gap-12">
                        <div className="md:w-1/2">
                            <p className="text-xl font-semibold my-3">Blog Title</p>
                            <input type="text" name="title" defaultValue={title} placeholder="Name" required className="input w-4/5 input-bordered input-primary " />
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-xl font-semibold my-3">Image url</p>
                            <input type="text" name="img" defaultValue={img} required placeholder="Url" className="input input-bordered input-accent w-4/5" />
                        </div>
                    </div>
                    {/*  */}
                    <div className="md:flex gap-12">
                        <div className="md:w-1/2">
                            <p className="text-xl font-semibold my-3">Category</p>
                            <select name="category" className=" w-full lg:w-4/5 border border-purple-500 rounded-md p-3  lg:font-bold font-medium " id="">
                                <option value="Travel">Travel</option>
                                <option value="Travel">Food and Cooking</option>
                                <option value="Travel">Lifestyle and Personal Development</option>
                                <option value="Travel">Technology and Gadgets</option>
                                <option value="Travel">Finance and Money Management</option>
                            </select>
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-xl font-semibold my-3">Email</p>
                            <input type="text" name="email" defaultValue={email} readOnly required placeholder="Type" className="input font-bold input-bordered input-accent w-4/5" />
                        </div>
                    </div>
                    {/*  */}
                    <div className="">
                        <div className="md:w-1/2">
                            <p className="text-xl font-semibold my-3">Short Description</p>
                            <textarea name="short_description" defaultValue={short_description} className="textarea textarea-primary w-full 
                            lg:w-4/5 h-20" required placeholder="Short description">
                            </textarea>
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-xl font-semibold my-3">Long Description</p>
                            <textarea name="long_description" defaultValue={long_description} className="textarea textarea-primary w-full 
                            lg:w-4/5 h-32" required placeholder="Long description">
                            </textarea>
                        </div>
                    </div>
                    {/*  */}


                    <button className="btn btn-success text-xl font-bold mt-5">
                        <input type="submit" value="Submit" />
                    </button>

                </form>
            </div>
        </div>
    );
};

export default UpdateDetails;