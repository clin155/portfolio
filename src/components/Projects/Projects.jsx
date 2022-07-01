import "./Projects.scss";
import trees from "./../../static/images/trees.png";

//projects img
import chess from "./../../static/images/chess.png";
import firebase from "./../../static/images/firebase.png";
import instagram from "./../../static/images/instagram.png";
import moon from "./../../static/images/moon2.png";
import player from "./../../static/images/player.png";
import spotify from "./../../static/images/spotify.png";


export function Projects(props) {
    const images = [moon, spotify, instagram,firebase,player,chess];
    const elem = []
    images.forEach((data) => {
        elem.push(
        <a href="http://www.google.com"><img class="gork" src={data} alt="proj"/></a>)
    })
    return (
        <div className='page'>
            <h1 className="middleTitle">Projects</h1>
            <img className='frontScroll' src={trees} alt="background"></img>

            <div className="projects">{elem}</div>
        </div>        
    )
}