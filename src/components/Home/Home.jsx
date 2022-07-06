import './../App.scss';
import { Background, Layer1, Layer2, Layer3, Layer4, Moon } from "./../Scroller";
import React from 'react';

import trees from "./../../static/images/trees-min.png";


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
    <Background classs="frontScroll"/>
    <Moon classs="frontScroll"/>
    <Layer4 classs="frontScroll"/>
    <Layer3 classs="frontScroll"/>
    <Layer2 classs="frontScroll"/>
    <Layer1 classs="frontScroll"/>
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