
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './components/NavMenu/NavMenu';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Initial from './components/Initial/Initial';
import ParallaxWrap from './components/ParallaxWrap/ParallaxWrap';

function App() {
  return (
    <div className="App">
      <Initial/>
      <ParallaxWrap/>
      {/* <NavMenu/>
      <Projects/> */}
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
