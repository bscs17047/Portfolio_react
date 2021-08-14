
import './App.css';
import NavbarComp from './Components/Navbar.js'
import CarouselComp from './Components/CarouselComp'
import Tabs from './Components/Portfolio'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Resume from './Components/Resume'


function App() {
  return (
    <div class='d-flex flex-column'>
        <NavbarComp className='NavbarCompClass' />
        <CarouselComp className='carousel-image-size'/>
      <Tabs />
      <Resume />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
