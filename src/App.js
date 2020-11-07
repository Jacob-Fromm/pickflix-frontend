import './App.css';
import React, { Component } from 'react';
import TinderCards from './Pick Page/Pick Components/TinderCards'
import NavBar from './NavBar'

class App extends Component {

  render() {
  return (
    <div className="root" >
      <div >
        <NavBar/>
        <TinderCards />
      </div>
    </div>
  );
  }
}

export default App;
