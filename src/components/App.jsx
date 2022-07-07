import './App.scss';

import {Home} from "./Home"
import {Skills} from "./Skills";
import { Projects } from './Projects';
import { Contact } from './Contact';
import { About } from './About';


function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

