import './App.css';
import React, { Component } from 'react';
import NavBar from './NavBar'
import PickPage from './Pick Page/PickPage';
import Welcome from './Welcome Page/Welcome';
<<<<<<< HEAD
import TinderCards from './TinderCards'
import LogIn from "./Welcome Page/Welcome Containers/LogIn.jsx"
=======
import Profile from './Profile Page/Profile';
import {Route} from 'react-router-dom'

>>>>>>> 60054294fa8d5e64d20f0262cc27fee55b3f25aa

class App extends Component {

  render() {
  return (
<<<<<<< HEAD
    <div className="App" >
      {/* <PickPage/>
      <Profile/>
      <Welcome/> */}
      
      <TinderCards />

=======
    <div className="root" >
      <div >
        <NavBar/>  
        <Route path="/pickpage" component={PickPage}/>
        <Route path="/welcome" component={Welcome} />
        <Route path="/profile" component={Profile} />
      </div>
>>>>>>> 60054294fa8d5e64d20f0262cc27fee55b3f25aa
    </div>
  );
  }
}

export default App;
