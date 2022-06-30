import "./Contact.scss";
import trees from "./../../static/images/trees.png";
import background from "./../../static/images/background.png";

export function Contact(props) {
    return (
        <div className='contactPage table'>
            <img className="finalBackground" src={background} alt="backgorund"/>
            <h1 className="title title2">Contact <br></br>&amp; Me</h1>
            <img className='frontPage thirdTrees' src={trees} alt="background"></img>

        </div>        
    )
}