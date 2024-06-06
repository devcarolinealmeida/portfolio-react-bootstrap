import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Initial from "./components/Initial/Initial";
import ParallaxWrap from "./components/ParallaxWrap/ParallaxWrap";
import { HelmetProvider } from "react-helmet-async";
import MetaTags from "./data/MetaTags";
import Logo from '../src/assets/logo.jpg'


function App() {
  return (
    <HelmetProvider>
     <MetaTags
        title="Caroline Almeida"
        description="Fron-end developer | React | JavaScript"
        image={Logo}
        name="Caroline Almeida"
      />
      <div className="App">
        <Initial />
        <ParallaxWrap />
      </div>
    </HelmetProvider>
  );
}

export default App;
