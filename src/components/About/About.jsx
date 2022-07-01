import "./../App.scss";
import trees from "./../../static/images/trees.png";

import { Scroller } from './../Scroller/Scroller.jsx'

export function About(props) {
    return (
        <div className='page'>
            <h1 className="smallerTitle">About Me</h1>
            {/* <img className='frontPage secTrees' src={trees} alt="background"></img> */}
            <Scroller img={trees} spd={1} classs="flip"/>
        </div>        
    )
}