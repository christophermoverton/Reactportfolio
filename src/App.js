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
    this.state = {show: false, show2: false, show3: false, on: false, on2: false, on3: false}
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleToggleClick2 = this.handleToggleClick2.bind(this);
    this.handleToggleClick3 = this.handleToggleClick3.bind(this);
    this.sleep = this.sleep.bind(this);
  }
  sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  handleToggleClick() {
    if (this.state.show2){
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
    }

    if (this.state.show3){
      this.setState(prevState => ({
        on3: !prevState.on3
      }));
      if (this.state.on3){
      this.sleep(500).then(() => {
        this.setState(prevState => ({
          show3: !prevState.show3
        }));
      })
    }
    }

    this.setState(prevState => ({
      on2: !prevState.on2
    }));
    if (this.state.on2){
      this.sleep(500).then(() => {
        this.setState(prevState => ({
          show: !prevState.show
        }));
      })
    }
    else{
      this.setState(prevState => ({
        show: !prevState.show
      }));
    }
  }
  handleToggleClick2() {  
    if (this.state.show){
      this.setState(prevState => ({
        on2: !prevState.on2
      }));
      if (this.state.on2){
      this.sleep(500).then(() => {
        this.setState(prevState => ({
          show: !prevState.show
        }));
      })
    }
    }
    if (this.state.show3){
      this.setState(prevState => ({
        on3: !prevState.on3
      }));
      if (this.state.on3){
      this.sleep(500).then(() => {
        this.setState(prevState => ({
          show3: !prevState.show3
        }));
      })
    }
    }
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
  handleToggleClick3(){
    if (this.state.show){
      this.setState(prevState => ({
        on2: !prevState.on2
      }));
      if (this.state.on2){
      this.sleep(500).then(() => {
        this.setState(prevState => ({
          show: !prevState.show
        }));
      })
    }
    }

    if (this.state.show2){
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
    }
    this.setState(prevState => ({
      on3: !prevState.on3
    }));
    if (this.state.on3){
    this.sleep(500).then(() => {
      this.setState(prevState => ({
        show3: !prevState.show3
      }));
    })
  }
  else{
    this.setState(prevState => ({
      show3: !prevState.show3
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
          <FirstWork   show={this.state.show3} on={this.state.on3} />
          <ContactMe id="cme" show={this.state.show} on={this.state.on2}/>
          <AboutMe id="cme" show={this.state.show2} on={this.state.on}/>
          <div id="cbutton" onClick={this.handleToggleClick}>Contact Me</div>
          <div id="cbutton2" onClick={this.handleToggleClick2}>About</div>
          <div id="cbutton3" onClick={this.handleToggleClick3}>Work</div>
      </div>
      
    );
  }
}

export default App;
