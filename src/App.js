
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Initial from './components/Initial/Initial';
import ParallaxWrap from './components/ParallaxWrap/ParallaxWrap';

function App() {
  return (
    <div className="App">
      <Initial/>
      <ParallaxWrap/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
