import "./Projects.scss";
import trees from "./../../static/images/trees.png";


export function Projects(props) {
    return (
        <div className='skillsPage table'>
            <h1 className="title title2">Project <br></br>&amp; Experience</h1>
            <img className='fourthTrees' src={trees} alt="background"></img>
        </div>        
    )
}