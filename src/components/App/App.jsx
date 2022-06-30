import './../static/App.scss';
import moon from "./../static/images/moon.png";
import trees from "./../static/images/trees.png";
import background from "./../static/images/background.png";
import { Home } from "../Home/Home.jsx"

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  console.log(moon, trees, background);
  return (
    <div className="App">
  <Parallax pages={2} >

    <ParallaxLayer offset={0} speed={0.6}>
      <img className='background' src={background}  alt="background"></img>
    </ParallaxLayer>
    <ParallaxLayer offset={0} speed={-1.3}>
      <img className='frontPage' src={moon} alt="background"></img>
    </ParallaxLayer>
    <ParallaxLayer offset={0}>
      <img className='frontPage' src={trees} alt="background"></img>
      {/* <img className='secTrees' src={trees} alt="background"></img> */}

    </ParallaxLayer>

    <ParallaxLayer offset={1} >
      <img className='frontPage' src={background} alt="background"></img>
    </ParallaxLayer>
    <ParallaxLayer offset={1}>
      <img className='secTrees' src={trees} alt="background"></img>
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