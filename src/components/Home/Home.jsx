import './Home.scss';

import background from "./../../static/images/background.png";

export function Home(props) {
    return (
      <div>
        <img className='background' src={background}  alt="background"></img>
      </div>
    )
}