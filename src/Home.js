import { useState, useEffect } from 'react';
import Bloglist from './blog-list'


const Home = () => {
    const [blogs, setBlogs] = useState([

        {title: 'My new website', body: 'The world will burn', author: 'mario', id:1},
        {title: 'Welcome', body: 'The world shall know pain', author: 'Nagato', id:2},
        {title: 'YouTube', body: 'Like share subscribe', author: 'mario', id:3},
        {title: 'StarLight Saber', body: 'Darkest Night is faced by me', author: 'Duplicate', id:4},
        {title: 'Cricket', body: 'Off break is the new Leg break', author: 'Brett Lee', id:5},
        {title: 'Coding', body: 'The more you code the less you fail', author: 'Mishkat', id:6},
        {title: 'Life', body: 'Life lesson is hard and crucial. Let it teach you a lesson', author: 'Mishkat', id:7}
    
    ]); 

    const [name,setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs);
    }

    useEffect(()=>{
        console.log('use effect ran')
        console.log(name);
    }, [name]);



    return ( 
        <div className="home">
            <Bloglist blogs={blogs} title = "All blogs" handleDelete={handleDelete}/>
            <button onClick={()=> setName('Luigi')}>Change Name</button>            
            <p>{name}</p>
            

            <Bloglist blogs={blogs.filter((blog)=> blog.author==='mario')} title = "Mario's blogs" handleDelete={handleDelete}/>
            <Bloglist blogs={blogs.filter((blog)=> blog.author==='Mishkat')} title = "Mishkat's blogs" handleDelete={handleDelete}/>
            <Bloglist blogs={blogs.filter((blog)=> blog.id%2===1)} title = "Odd break" handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;