import "./../App.scss";
import trees from "./../../static/images/trees-min.png";

// import { Scroller } from './../Scroller/Scroller.jsx'
import pic from "./../../static/images/pic.jpg";

export function About(props) {
    return (
        <div className='page'>
            <div className="gorker">
                <div className="skillFlex">
                    <h1 className="smallerTitle">About Me</h1>
                    <p className="pText3">I am a junior at the University of Michigan majoring in Computer Science. I love everything to do with tech and
                software, but I am particularly interested in full-stack development and machine learning. When I'm not coding, I can be found running, playing the piano, or listening to music.</p>
                </div>
                <img src={pic} className="pic" alt="gork"></img>
            </div>

            <img className='secTrees' src={trees} alt="background"></img>

            {/* <Scroller img={trees} spd={1} classs="flip"/> */}
        </div>        
    )
}