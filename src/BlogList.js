
const BlogList = ({ blogs, title}) => {
   // const [test, setBlog] = useState(blogs)
    // const deleteBlog = (id) => {
    //     const newBlogs = [...test];
    //     const index = newBlogs.findIndex(el => el.id === id);
    //     newBlogs.splice(index, 1)
    //     setBlog(newBlogs)
    // }

    return ( 
        <div>
            <h3>{ title }</h3>
            <div>
                {
                    blogs
                    .map((blog) => (
                        <div className="blog-preview" key={ blog.id }>
                            <h2> { blog.title } </h2>
                            <p>Written by { blog.author }</p>
                        </div>
                    ))
                }   
            </div>
        </div>
    )
}

export default BlogList;