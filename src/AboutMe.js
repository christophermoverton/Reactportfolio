import React, { Component } from 'react';
import './AboutMe.css';
import Col3Blur from './Col3ablur.png';
import portrait from './portrait.jpg';


class AboutMe extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    
  }
  render() {
    var variant;
    if(this.props.on){
     variant = 'BgImage2';
    } else {
     variant = 'BgImage3';
    }
    if (!this.props.show){
      console.log('hit1');
      return null;
    }
    else{
    return (
        <div>
            <img id={variant} src={Col3Blur} alt="None"/>
            <img id="pimage" src={portrait} alt="None"/>
            <div id="t1">    My desire to fill space or finding some completion of it has been <br/>an old obsession of mine.Could <br/>not say that I am a master, 
             yet I <br/>find myself intrinsically drawn to <br/>the aesthetic 
             of a design space.  </div>
             
        </div>
      );
    }
  }
}

export default AboutMe;