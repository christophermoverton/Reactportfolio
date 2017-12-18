import React, { Component } from 'react';
import './FirstWork.css';
import gicon from './Githubicon.png';
import licon from './Linkedinicon.png';
import Workscomponent from './Workscomponent';


class FirstWork extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    
  }
  render() {
    //        <iframe id="frame2" src="https://my-app-13d40.firebaseapp.com/">
        
    //</iframe>
    if (!this.props.show){
      console.log('hit1');
      return null;
    }
    else{
    return (
        <div><Workscomponent id="frame2"/></div>
      );
    }
  }
}

export default FirstWork;