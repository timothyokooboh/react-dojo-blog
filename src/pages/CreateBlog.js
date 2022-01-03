import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("mario");
    const [loading, setLoading] = useState(false)

    const addBlog = (e) => {
        e.preventDefault();
        setLoading(true)

        const formBody = { title, body, author }

        setTimeout(() => {
            fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formBody)
            })
            .then(() => {
                setLoading(false)
                history.push("/")

            })
        }, 2000)
    }

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={addBlog}>
                <label>
                    <h2> Blog title: </h2>
                </label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onInput={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onInput={(e) => setBody(e.target.value)}
                />
                <label htmlFor="">Blog author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { loading ? "Loading..." : <button> Add blog </button>} 
            </form>
        </div>
     );
}
 
export default CreateBlog;