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
        elem.push(<img src={data} alt="proj"/>)
    })
    return (
        <div className='skillsPage table'>
            <h1 className="title3">Projects</h1>
            <img className='fourthTrees' src={trees} alt="background"></img>

            <div className="projects">{elem}</div>
        </div>        
    )
}