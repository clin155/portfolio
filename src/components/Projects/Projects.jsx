import "./Projects.scss";

//projects img
import chess from "./../../static/images/chess.png";
import firebase from "./../../static/images/firebase.png";
import instagram from "./../../static/images/instagram.png";
import moon from "./../../static/images/moon2.png";
import player from "./../../static/images/player.png";
import spotify from "./../../static/images/spotify.png";

//data
import metadata from "./projects.json";


export function Projects(props) {
    const images = [moon, spotify, instagram,firebase,player,chess];
    const elem = []
    images.forEach((data, index) => {
        elem.push(
        <a href={metadata[index]["href"]}><img className="gork" src={data} alt="proj"/></a>)
    })
    return (
        <div className='fourthPage'>
            <h1 className="middleTitle">Projects</h1>
            {/* <img className='frontScroll' src={trees} alt="background"></img> */}

            <div className="projects">{elem}</div>
        </div>        
    )
}