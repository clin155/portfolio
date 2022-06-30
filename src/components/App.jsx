import './App.scss';
import moon from "./../static/images/moon.png";
import trees from "./../static/images/trees.png";

import {Home} from "./Home/Home.jsx"
import {Skills} from "./Skills/Skills.jsx";
import { Projects } from './Projects/Projects.jsx';
import { Contact } from './Contact/Contact.jsx';
import { About } from './About/About.jsx';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  return (
    <div className="App">
  <Parallax pages={5} >

    <ParallaxLayer offset={0} speed={0.6}>
      <Home />
    </ParallaxLayer>
    <ParallaxLayer offset={0} speed={-1.3}>
      <img className='background' src={moon} alt="background"></img>
    </ParallaxLayer>
    <ParallaxLayer offset={0}>
      <img className='frontPage' src={trees} alt="background"></img>
      {/* <img className='secTrees' src={trees} alt="background"></img> */}
    </ParallaxLayer>
    <ParallaxLayer offset={1} >
      <About />
    </ParallaxLayer>
    <ParallaxLayer offset={2} >
      <Skills />
    </ParallaxLayer>
    <ParallaxLayer offset={3}>
      <Projects />
    </ParallaxLayer>
    <ParallaxLayer offset={4}>
      <Contact />
    </ParallaxLayer>
    </Parallax>

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