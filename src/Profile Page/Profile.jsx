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
    return (
    <div>
        <ProfileInfo userInfo={this.state.users[0]} />
        <FlixYouvePicked/>
    </div>
    )}

};

export default Profile;