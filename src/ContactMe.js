import React, { Component } from 'react';
import './ContactMe.css';
import gicon from './Githubicon.png';
import licon from './Linkedinicon.png';


class ContactMe extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    
  }
  render() {
    if (!this.props.show){
      console.log('hit1');
      return null;
    }
    else{
    return (
        <div id="frame1">
          <div id="eText"> email:&nbsp;
          <a id="eText" href="mailto:christophermoverton@gmail.com">christophermoverton@gmail.com </a>
          </div>
          <a href="https://github.com/christophermoverton" target="_blank">
          <img id="gicon" src={gicon} alt="None"/></a>
          <a href="https://www.linkedin.com/in/christopher-overton-485a4658/" target="_blank">
          <img id="gicon2" src={licon} alt="None"/></a>
          <div id="eText"> cell:  913 481 0582</div>
        </div>
      );
    }
  }
}

export default ContactMe;