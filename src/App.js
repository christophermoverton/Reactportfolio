import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import logo2 from './Col3a.png'
//import Port1comp from './port1component';
import ContactMe from './ContactMe';
import AboutMe from './AboutMe';
import message from './message.png';
import FirstWork from './FirstWork';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {show: false, show2: false, on: false}
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleToggleClick2 = this.handleToggleClick2.bind(this);
    this.sleep = this.sleep.bind(this);
  }
  sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  handleToggleClick() {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }
  handleToggleClick2() {  
    this.setState(prevState => ({
      on: !prevState.on
    }));
    if (this.state.on){
    this.sleep(500).then(() => {
      this.setState(prevState => ({
        show2: !prevState.show2
      }));
    })
  }
  else{
    this.setState(prevState => ({
      show2: !prevState.show2
    }));
  }
}

  render() {
   //<button id="cbutton" onClick={this.handleToggleClick}>
   //          <input type="image" id="cbutton" src={message} onClick={this.handleToggleClick}>
   //</input>
   var variant;
   if(!this.state.on){
    variant = 'cme2';
   } else {
    variant = 'cme3';
   }
    return (
      <div>
     
        <img id="BgImage" src={logo2} alt="None"/>
      
      <div id="TitleText" x="167.5" y="149.5"  width={250} height={200}>Christopher Overton</div>
        
      
    
      <div id="TitleText2" x="187.5" y="249.5"  width={250} height={200}>Full Stack Developer and Designer</div>
          <ContactMe id="cme" show={this.state.show} />
          <AboutMe id="cme" show={this.state.show2} on={this.state.on}/>
          <div id="cbutton" onClick={this.handleToggleClick}>Contact Me</div>
          <div id="cbutton2" onClick={this.handleToggleClick2}>About Me</div>
      <FirstWork id="cme" show={true} />
      </div>
      
    );
  }
}

export default App;
