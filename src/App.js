import './App.css';
import React, { Component } from 'react';
import PickPage from './Pick Page/PickPage';
import Profile from './Profile Page/Profile';
import Welcome from './Welcome Page/Welcome';


class App extends Component {

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Jake Fromm!</h1>
        <img src={"https://ca.slack-edge.com/T02MD9XTF-U018FH2KWR5-138d4e181585-512"} className="App-logo" alt="logo" />
        <img src={"https://ca.slack-edge.com/T02MD9XTF-U018FH2KWR5-138d4e181585-512"} className="App-logo" alt="logo" />
        <img src={"https://ca.slack-edge.com/T02MD9XTF-U018FH2KWR5-138d4e181585-512"} className="App-logo" alt="logo" />
        <img src={"https://ca.slack-edge.com/T02MD9XTF-U018FH2KWR5-138d4e181585-512"} className="App-logo" alt="logo" />
        <img src={"https://ca.slack-edge.com/T02MD9XTF-U018FH2KWR5-138d4e181585-512"} className="App-logo" alt="logo" />
        <img src={"https://ca.slack-edge.com/T02MD9XTF-U018FH2KWR5-138d4e181585-512"} className="App-logo" alt="logo" />
      </header>
      <PickPage/>
      <Profile/>
      <Welcome/>
    </div>
  );
  }
}

export default App;
