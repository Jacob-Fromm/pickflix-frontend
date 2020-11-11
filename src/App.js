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
import ls from "local-storage"


class App extends React.Component {
  state = {
    currentUser: ""
  }
  // const [user, setUser] = React.useState(
  //   localStorage.getItem(currentUser)
  // )

  // React.useEffect(() => {
  //   localStorage.setItem("currentUser", JSON.stringify({currentUser}))
  // })

  componentDidMount = () => {
    this.setState({ currentUser: ls.get("currentUser") || "" })
  }
  
  signupSubmitHandler = (newUser) => {
    console.log("new user in app.js", newUser)
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(newUser)
    })
      .then(r => r.json())
      .then(user => {
        console.log(user)
        this.setState({ currentUser: user})
        ls.set("currentUser", user)
      })

  }
  render() {
    console.log("current user", ls.get("currentUser"))
  return (
    <div className="root" >
      <div >

        <NavBar/>  
        <Route 
          path="/pickpage" 
          render={(props) => (
            <PickPage {...props} currentUser={ls.get("currentUser")}/>
          )}
          />
        <Route path="/welcome" component={Welcome}  />
        <Route path="/profile" 
          render={(props) => (
            <Profile {...props} currentUser={ls.get("currentUser")} />
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
