
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './components/NavMenu/NavMenu';
import Typed from './components/Typed/Typed';
import Projects from './components/Projects/Projects';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <NavMenu/>
      <Typed/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
