const NavigationBar = () => {

    
    const w = 'www.facebook.com';


    return ( 

        <nav className="navbar">
            <h1> This is the dojo of mine</h1>
            <div className="Links">
                <a href={w}>Home is home</a>
                
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Blog</a>
            </div>
        </nav>
     );
}
 
export default NavigationBar;