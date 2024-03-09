
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Initial from './components/Initial/Initial';
import ParallaxWrap from './components/ParallaxWrap/ParallaxWrap';

function App() {
  return (
    <div className="App">
      <Initial/>
      {/* <NavMenu/>
      <Works/> */}
      <ParallaxWrap/>
  {/*     <OtherProjects/>
      <About/>
      <Footer/> */}
    </div>
  );
}

export default App;
