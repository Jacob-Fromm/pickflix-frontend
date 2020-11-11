import './App.css';
import React, { Component } from 'react';
import NavBar from './NavBar'
import PickPage from './Pick Page/PickPage';
import Welcome from './Welcome Page/Welcome';
import Profile from './Profile Page/Profile';
import {Route} from 'react-router-dom'
import LogIn from './Welcome Page/LogIn';
import Signup from './Welcome Page/Signup';
import axios from "axios";


class App extends Component {

  state = {
    currentUser: ""
  }
  
  signupSubmitHandler = (newUser) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(newUser)
    })
      .then(r => r.json())
      .then(user => this.setState({ currentUser: user }))

  }
  render() {
  return (
    <div className="root" >
      <div >

        <NavBar/>  
        <Route 
          path="/pickpage" 
          render={(props) => (
            <PickPage {...props} currentUser={this.state.currentUser}/>
          )}
          />
        <Route path="/welcome" component={Welcome}  />
        <Route path="/profile" 
          render={(props) => (
            <Profile {...props} currentUser={this.state.currentUser} />
          )} />
        <Route path="/login" component={LogIn} />
        <Route 
          path="/signup" 
          render={(props) => (
            <Signup {...props} submitHandler={this.signupSubmitHandler}/>
          )}
          />
        
      </div>
    </div>
  );
  }
}

export default App;
