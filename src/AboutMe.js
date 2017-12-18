import React, { Component } from 'react';
import './AboutMe.css';
import Col3Blur from './Col3ablur.png';


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
             
        </div>
      );
    }
  }
}

export default AboutMe;