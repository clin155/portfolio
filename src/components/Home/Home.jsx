import './../App.scss';
import { Background, Layer } from "./../Scroller";
import React from 'react';

import trees from "./../../static/images/trees-min.png";
import layer1 from "./../../static/images/layer 1-min.png";
import layer2 from "./../../static/images/layer 2-min.png";
// import layer3 from "./../../static/images/layer 3-min.png";
import moon from "./../../static/images/moon-min.png";

export class Home extends React.Component {
  constructor(props) {
       super(props);
       this.state = {height: 0};
       this.handleResize = this.handleResize.bind(this);
   }
  

  handleResize(height) {
    this.setState({height: height});
  }
  

  render(){
    const { height} = this.state;
    return (      
    <div className="frontPage" style={{"height": height.toString()+"px"}}>
    <Background classs="frontScroll" />
    <Layer classs="frontScroll" percent={140} end="+=4000" layer={moon}/>
    {/* <Layer classs="frontScroll" percent={150} end="+=3700" layer={layer4}/> */}
    {/* <Layer classs="frontScroll" percent={180} end="+=3700" layer={layer3}/> */}
    <Layer classs="frontScroll"  percent={160} end="+=4000" layer={layer2}/>
    <Layer classs="frontScroll" percent={250} end="+=8000" layer={layer1}/>
    <Trees classs="frontScrollTrees" handleResize={this.handleResize}/>
    <h1 className='title'>Hi,<br></br>I'm Chris.</h1>
    </div>
    );
  }
}

class Trees extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.resize = this.resize.bind(this);
  }

  resize() {
    const h = this.ref.current;
    if (h !== null) {
      const height = window.innerWidth * 0.05 + h.offsetHeight;
      this.props.handleResize(height);
    }

  }
  componentDidMount() {
    this.resize();
    window.addEventListener('resize', this.resize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }
  render() {
    return(
      <img ref={this.ref} className="frontScrollTrees" src={trees} alt="gork" 
    onLoad={() => {this.resize()}} />
    )
  }
}