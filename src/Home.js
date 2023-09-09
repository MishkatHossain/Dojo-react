const Home = () => {

    const handleClick = () => {
        console.log("hello world");
    }





    return ( 
        <div className="home">
            <h2>Homepage of this Hyper</h2>
            <button onClick={handleClick}>Click here</button>
        </div>
     );
}
 
export default Home;