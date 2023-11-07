import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";


const AddBlog = () => {

    const {user} = useContext(AuthContext)

    const handleAddBlog = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const img = form.img.value;
        const category = form.category.value.toLowerCase();
        const short_description = form.short_description.value;
        const long_description = form.long_description.value;
        const posted_time = new Date().valueOf();
        const email = user?.email;

        
        const newBlog = {
            title, img, category, short_description, long_description, posted_time, email
        }
        console.log(newBlog);
        fetch('http://localhost:5000/blogs',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(newBlog)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data?.acknowledged)
            {
                Swal.fire({
                    title: 'Successfully Added!',
                    icon: 'success',
                    confirmButtonText: 'Close'
                  })
                  form.reset();
            }
        })
    }
    return (
        <div className=" bg-[#FF3811] px-5 py-16">
            <div className="max-w-7xl mx-auto p-4  rounded-lg bg-orange-600">
                <h2 className="text-3xl font-bold text-center my-8 text-white">Add Your Blog</h2>
                <form onSubmit={handleAddBlog} className="p-5">
                    <div className="md:flex gap-12">
                        <div className="md:w-1/2">
                            <p className="text-xl font-semibold my-3">Blog Title</p>
                            <input type="text" name="title" placeholder="Title" required className="input bg-black text-white w-full lg:w-4/5 input-bordered input-primary " />
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-xl font-semibold my-3">Image Link</p>
                            <input type="text" name="img" required placeholder="Url" className="input text-white bg-black input-bordered input-primary w-full lg:w-4/5" />
                        </div>
                    </div>
                    {/*  */}
                    <div className="md:flex gap-12">
                        <div className="md:w-1/2">
                            <p className="text-xl font-semibold my-3">Category</p>
                            <select name="category" className=" w-full lg:w-4/5 border border-purple-500 rounded-md p-3 bg-black text-white lg:font-bold font-medium " id="">
                                <option value="Travel">Travel</option>
                                <option value="Travel">Food and Cooking</option>
                                <option value="Travel">Lifestyle and Personal Development</option>
                                <option value="Travel">Technology and Gadgets</option>
                                <option value="Travel">Finance and Money Management</option>
                            </select>
                            {/* <input type="text" name="brand" required placeholder="Brand Name" className="" /> */}
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-xl font-semibold my-3">Short Description</p>
                            <textarea name="short_description" className="textarea textarea-secondary w-full 
                            lg:w-4/5 h-20 bg-black text-white" required placeholder="Short description">
                            </textarea>
                        </div>
                    </div>
                    {/*  */}


                    <div className="md:w-1/2">
                        <p className="text-xl font-semibold my-3">Long Description</p>
                        <textarea name="long_description" className="textarea textarea-primary w-full lg:w-4/5 h-40 bg-black text-white" required placeholder="Long description"></textarea>
                    </div>
                    <button className="btn btn-success text-xl font-bold mt-5">
                        <input type="submit" value="Add Blog" />
                    </button>

                </form>
            </div>
        </div>
    );
};

export default AddBlog;