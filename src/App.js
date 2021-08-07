
import './App.css';
import NavbarComp from './Components/Navbar.js'
import CarouselComp from './Components/CarouselComp'
import Tabs from './Components/Portfolio'

function App() {
  return (
    <div>
      <div className='carousel-image-size'>
        <CarouselComp />
      </div>
      <NavbarComp className='NavbarCompClass' style={{}}/>
      <Tabs/>
    </div>

  );
}

export default App;
