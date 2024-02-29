
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './components/NavMenu/NavMenu';
import Typed from './components/Typed/Typed';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <NavMenu/>
      <Typed/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
