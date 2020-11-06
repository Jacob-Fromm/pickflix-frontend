import './App.css';
import React, { Component } from 'react';
import PickPage from './Pick Page/PickPage';
import Profile from './Profile Page/Profile';
import Welcome from './Welcome Page/Welcome';
import TinderCards from './TinderCards'

class App extends Component {

  render() {
  return (
    <div className="App" >
      {/* <PickPage/>
      <Profile/>
      <Welcome/> */}
      <TinderCards />

    </div>
  );
  }
}

export default App;
