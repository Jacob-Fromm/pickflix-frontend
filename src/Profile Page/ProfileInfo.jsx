import React from 'react';
import "./ProfileInfo.css"

const ProfileInfo = (props) => {
    console.log(props)
    return (
        <div>
            <div className="container">
                <div className="pic">
                    <img className="userImage" src={props.currentUser.image} />
                </div>
                <div className="name-box">
                    <h2>{props.currentUser.name}, <span className="age"> AGE</span></h2>
                    <p>DISTANCE</p>
                </div>
                <div className="info">
                    <p>...</p>
                    <p>.</p>
                </div>
            </div>
        </div>
    )

};

export default ProfileInfo;