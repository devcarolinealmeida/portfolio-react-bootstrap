
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Initial from './components/Initial/Initial';
import ParallaxWrap from './components/ParallaxWrap/ParallaxWrap';
import NavMenu from './components/NavMenu/NavMenu';
import Works from './components/Works/Works';

function App() {
  return (
    <div className="App">
      <Initial/>
      <NavMenu/>
      <Works/>
      {/* <ParallaxWrap/> */}
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
