

const AddBlog = () => {

    const handleAddBlog = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const img = form.img.value;
        const category = form.category.value;
        const short_description = form.short_description.value;
        const long_description = form.long_description.value;
        const posted_time = new Date().valueOf()

        console.log(posted_time, title, img, category, short_description, long_description);
    }
    return (
        <div className=" bg-[#FF3811] p-5">
            <div className="max-w-7xl mx-auto p-4  rounded-lg bg-orange-500">
                <h2 className="text-3xl font-bold text-center my-8 text-white">Add Your Blog</h2>
                <form onSubmit={handleAddBlog} className="p-5">
                    <div className="md:flex gap-12">
                        <div className="md:w-1/2">
                            <p className="text-xl font-semibold my-3">Blog Title</p>
                            <input type="text" name="title" placeholder="Title" required className="input w-4/5 input-bordered input-primary " />
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-xl font-semibold my-3">Image Link</p>
                            <input type="text" name="img" required placeholder="Url" className="input input-bordered input-accent w-4/5" />
                        </div>
                    </div>
                    {/*  */}
                    <div className="md:flex gap-12">
                        <div className="md:w-1/2">
                            <p className="text-xl font-semibold my-3">Category</p>
                            <select name="category" className=" w-4/5 border border-purple-500 rounded-md p-3 font-bold " id="">
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
                            <textarea name="short_description" className="textarea textarea-secondary w-4/5 h-20" required placeholder="Short description"></textarea>
                        </div>
                    </div>
                    {/*  */}


                    <div className="md:w-1/2">
                        <p className="text-xl font-semibold my-3">Long Description</p>
                        <textarea name="long_description" className="textarea textarea-primary w-4/5 h-40" required placeholder="Long description"></textarea>
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