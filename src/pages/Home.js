
import BlogList from "../components/BlogList";
import useFetchState from "../useFetchState"

const Home = () => {
    const { data: blogs, isPending, error }= useFetchState("http://localhost:8000/blogs")

    return ( 
        <div className='home'>
            <div>{ isPending && 'Loading...' }</div>
            <div>{ error }</div>
            <div>
                { !error && blogs && <BlogList blogs={ blogs } title="A blog" /> }
            </div>
        </div>
    );
}
 
export default Home;