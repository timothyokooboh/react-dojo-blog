import useFetchState from "../useFetchState";
import { useParams, useHistory } from  "react-router-dom";
import { useState } from "react";

const BlogDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const { data: blog, error, isPending } = useFetchState(`http://localhost:8000/blogs/${id}`);
    const [isDeleting, setIsDeleting] = useState(false)
    const deleteBlog = () => {
        setIsDeleting(true)
        setTimeout(() => {
            fetch(`http://localhost:8000/blogs/${id}`, { method: "Delete"})
            .then(() => {
                history.push("/");
            })
        }, 2000)
    }

    return ( 
       <div>
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { !error && blog && 
            <article className="blog-details">
                <h2> { blog.title } </h2>
                <p>Written by { blog.author }</p>
                <div> { blog.body } </div>
                { isDeleting ? 'Deleting...' : <button onClick={deleteBlog}>Delete</button> }
            </article> }
        </div> 
     );
}
 
export default BlogDetails;