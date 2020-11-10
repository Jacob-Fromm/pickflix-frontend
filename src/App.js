import './App.css';
import React, { Component } from 'react';
import NavBar from './NavBar'
import PickPage from './Pick Page/PickPage';
import Welcome from './Welcome Page/Welcome';
import Profile from './Profile Page/Profile';
import {Route} from 'react-router-dom'
import LogIn from './Welcome Page/LogIn';
import Signup from './Welcome Page/Signup';


class App extends Component {

  render() {
  return (
    <div className="root" >
      <div >

        <NavBar/>  
        <Route path="/pickpage" component={PickPage}/>
        <Route path="/welcome" component={Welcome} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={Signup} />
        
      </div>
    </div>
  );
  }
}

export default App;
