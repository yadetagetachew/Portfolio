import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Cards from './Cards';
import Title from './Title';
import About from './About';

function App() {
  return (
    <div className='app'>
    <Navbar />
    <Header />
    <Title 
      title="About Me"
    />
    <About />
    <Title 
      title="My Projects"
    />
    <Cards />
    <Title 
      title="Contact Me"
    />
    </div>
  );
}

export default App;
