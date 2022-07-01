import './../App.scss';
import { Scroller } from "../Scroller/Scroller";


import background from "./../../static/images/background.png";
import moon from "./../../static/images/moon.png";
import trees from "./../../static/images/trees.png";



export function Home(props) {

    return (
      <div className="page">
          <Scroller img={background} spd={0.5} classs="frontScroll"/>
          <Scroller img={moon} spd={1} classs="frontScroll"/>
          <Scroller img={trees} spd={2} classs="frontScrollTrees"/>
          <h1 className='title'>Hi,<br></br>I'm Chris.</h1>
      </div>
    )
}