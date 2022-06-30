import "./About.scss";
import trees from "./../../static/images/trees.png";


export function About(props) {
    return (
        <div className='skillsPage table'>
            <h1 className="title title2">About Me</h1>
            <img className='frontPage secTrees' src={trees} alt="background"></img>

        </div>        
    )
}