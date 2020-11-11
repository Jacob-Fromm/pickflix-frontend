import React from 'react';

class ProfileInfo extends React.Component {
    state = {

    }
    
    render () {
    console.log(this.props.currentUser)
    return (
    <div>
        <h1>Hello, {this.props.currentUser.user.name}!</h1>
        <img src={this.props.currentUser.user.image} />
    </div>
    )}

};

export default ProfileInfo;