import './App.css';
import React, { Component } from 'react';
import NavBar from './NavBar'
import PickPage from './Pick Page/PickPage';
import Welcome from './Welcome Page/Welcome';
import Profile from './Profile Page/Profile';
import {Route} from 'react-router-dom'


class App extends Component {

  render() {
  return (
    <div className="root" >
      <div >
        <NavBar/>  
        <Route path="/pickpage" component={PickPage}/>
        <Route path="/welcome" component={Welcome} />
        <Route path="/profile" component={Profile} />
      </div>
    </div>
  );
  }
}

export default App;
