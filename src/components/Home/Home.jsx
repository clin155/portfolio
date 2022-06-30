import './Home.scss';

import background from "./../../static/images/background.png";

export function Home(props) {
    return (
      <div className="table">
        <img className='background' src={background}  alt="background"></img>
        <h1 className='title'>Hi,<br></br>I'm Chris.</h1>
      </div>
    )
}