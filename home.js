import BlogList from './blogList';
import useFetch from './useFetch';

const Home = ({authorized}) => {
    // const [name, setName] = useState("delhi")
    // const handleClick = () => {
    //     setName("Mumbai");
const { data:blogs, isPending, error } = useFetch("http://localhost:8000/blogs");
return ( 
    <div className="home">
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        {error && <div>{error}</div>}
    </div>);
    }
 
export default Home;