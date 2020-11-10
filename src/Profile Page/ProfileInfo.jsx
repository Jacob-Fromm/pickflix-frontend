import React from 'react';

class ProfileInfo extends React.Component {
    state = {
        user: this.props.userInfo
    }
    
    render () {
    console.log("Jake", this.state.user)
    return (
    <div>
        {/* <h1>Hello, {name}!</h1>
        <img src={image} /> */}
    </div>
    )}

};

export default ProfileInfo;