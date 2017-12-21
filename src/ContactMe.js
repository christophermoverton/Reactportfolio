import React, { Component } from 'react';
import './ContactMe.css';
import gicon from './Githubicon.png';
import licon from './Linkedinicon.png';
import Col3Blur from './Col3ablur.png';

class ContactMe extends Component {
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
    /*          <div className="eText"> email:&nbsp;
          <a href="mailto:christophermoverton@gmail.com"  >christophermoverton@gmail.com </a>
          </div>
          <a id="icolink" href="https://github.com/christophermoverton" target="_blank">
          <img id="gicon" src={gicon} alt="None"/></a>
          <a id="icolink" href="https://www.linkedin.com/in/christopher-overton-485a4658/" target="_blank">
          <img id="gicon2" src={licon} alt="None"/></a>
          <div id="eText"> cell:  913 481 0582</div> */
    if (!this.props.show){
      
      return null;
    }
    else{
    return (
      <div>
        <img id={variant} src={Col3Blur} alt="None"/>

        <div className="eText"> email:&nbsp;
          <a href="mailto:christophermoverton@gmail.com"  >christophermoverton@gmail.com </a>
          </div>
          <a id="icolink" href="https://github.com/christophermoverton" target="_blank">
          <img id="gicon" src={gicon} alt="None"/></a>
          <a id="icolink" href="https://www.linkedin.com/in/christopher-overton-485a4658/" target="_blank">
          <img id="gicon2" src={licon} alt="None"/></a>
          <div id="eText"> cell:  913 481 0582</div>
       
        </div>
      );
    }
  }
}

export default ContactMe;