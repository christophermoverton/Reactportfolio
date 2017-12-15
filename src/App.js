import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import logo2 from './Col3a.png'
//import Port1comp from './port1component';

class App extends Component {
  render() {
    return (
      <div>
     
        <img id="BgImage" src={logo2} alt="None"/>
      
      <div id="TitleText" x="167.5" y="149.5"  width={250} height={200}>Christopher Overton</div>
        
      
    
      <div id="TitleText2" x="187.5" y="249.5"  width={250} height={200}>Full Stack Developer and Designer</div>
      </div>
    );
  }
}

export default App;
