
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './components/NavMenu/NavMenu';
import Typed from './components/Typed/Typed';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

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
