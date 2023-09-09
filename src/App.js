import NavigationBar from './navbar';
import Home from './Home';

function App() {

  const x  = 10
  return (
    <div className="App">
      <NavigationBar/>

      <div className="content">
      <Home/>

      </div>
    </div>
  );
}

export default App;
