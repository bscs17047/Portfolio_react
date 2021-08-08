
import './App.css';
import NavbarComp from './Components/Navbar.js'
import CarouselComp from './Components/CarouselComp'
import Tabs from './Components/Portfolio'
import Footer from './Components/Footer'
import Contact from './Components/Contact'


function App() {
  return (
    <div class='d-flex flex-column'>
      <div>
        <NavbarComp className='NavbarCompClass' style={{}}/>
      </div>
      <div className='carousel-image-size'>
        <CarouselComp />
      </div>
      <Tabs/>
      <Contact></Contact>
      <Footer/>
    </div>

  );
}

export default App;
