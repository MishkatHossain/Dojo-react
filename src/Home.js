import { useState } from 'react';



const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'The world will burn', author: 'mario', id:1},
        {title: 'Welcome', body: 'The world shall know pain', author: 'Nagato', id:2},
        {title: 'YouTube', body: 'Like share subscribe', author: 'mario', id:3}
    ]);


    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="Blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written By {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;