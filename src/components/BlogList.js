
import { useHistory } from "react-router-dom";
import { StyledAuthor } from "./styles/BlogList.styled"

const BlogList = ({ blogs, title}) => {
   const history = useHistory()
  

    return ( 
        <div>
            <h3>{ title }</h3>
            <div>
                {
                    blogs
                    .map((blog) => (
                            <div 
                                key={ blog.id }
                                className="blog-preview" 
                                onClick={ () => history.push(`/blogs/${blog.id}`) }
                            >
                                <h2> { blog.title } </h2>
                                <StyledAuthor>Written by { blog.author }</StyledAuthor>
                            </div>
                            
                    ))
                }   
            </div>
        </div>
    )
}

export default BlogList;