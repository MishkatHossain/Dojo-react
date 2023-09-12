import Bloglist from './blog-list';
import useFetch from './usefetch';



const Home = () => {
    
    const {data, isPending, error} = useFetch('  http://localhost:8000/blogs')
    


    return ( 
        <div className="home">
            {error && <div> {error} </div>}
            {isPending && <div>Loading...</div>}
            {data && <Bloglist blogs={data} title="All blogs" />}
        </div>
     );
}
 
export default Home;


// npx json-server --watch data/db.json --port 8000