
import BlogList from "./BlogList"
import useFetchState from "./useFetchState"

const Home = () => {
    const { data, isPending, error }= useFetchState("http://localhost:8000/blogs")

    return ( 
        <div className='home'>
            <div>{ isPending && 'Loading...' }</div>
            <div>{ error }</div>
            <div>
                { !error && data && <BlogList blogs={ data } title="All Blogs" /> }
            </div>
        </div>
    );
}
 
export default Home;