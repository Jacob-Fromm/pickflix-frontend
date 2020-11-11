import React from 'react';
import FlixYouvePicked from './FlixYouvePicked'
import "./Profile.css"
import ProfileInfo from './ProfileInfo';


class Profile extends React.Component {
    state = {
        users: []
    }

    componentDidMount = () => {
        fetch("http://localhost:3000/users")
        .then(resp => resp.json())
        .then(userdata => {
            this.setState({
                users: userdata
            })
        })
    }
    
    
    render() {
        console.log("Profile.jsx props:", this.props.currentUser)
    return (
    <div>
        <ProfileInfo currentUser={this.props.currentUser} />
        <FlixYouvePicked currentUser={this.props.currentUser}/>
    </div>
    )}

};

export default Profile;