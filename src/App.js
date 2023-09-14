import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Cards from './Cards';
import Title from './Title';
import About from './About';
import Contact from './Contact';
import myStory from './media/myStory.png'

function App() {
  return (
    <div className='app'>
    <Navbar />
    <Header />
    <Title 
      image = {myStory} 
    />
    <About />

    <Cards />
    {/* <Title 
      title="Contact Me"
    /> */}
    <Contact />
    </div>
  );
}

export default App;
