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

    
// <ParallaxLayer offset={0} style={{
//   backgroundImage: `url(${background})`,
//   backgroundSize: 'cover',

// }}/> 
// <ParallaxLayer offset={0} style={{
//   backgroundImage: `url(${moon})`,
//   backgroundSize: 'cover',

// }}/>
// <ParallaxLayer offset={0} style={{
//   backgroundImage: `url(${trees})`,
//   backgroundSize: 'cover',

// }}/> 