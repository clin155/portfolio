import "./Contact.scss";
import trees from "./../../static/images/trees.png";
import background from "./../../static/images/background-min.png";

export function Contact(props) {
    return (
        <div className='page'>
            <img className="frontScroll" src={background} alt="backgorund"/>
            <h1 className="title title2">Contact <br></br>&amp; Me</h1>
            <img className='frontScroll thirdTrees' src={trees} alt="background"></img>

        </div>        
    )
}