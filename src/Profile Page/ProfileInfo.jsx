import React from 'react';
import "./ProfileInfo.css"

const ProfileInfo = (props) => {
    console.log(props)
    return (
        <div>
            <div class="container">
                <div class="pic">
                    <img class="userImage" src={props.currentUser.image} />
                </div>
                <div class="name-box">
                    <h2>{props.currentUser.name}, <span class="age"> AGE</span></h2>
                    <p>DISTANCE</p>
                </div>
                <div class="info">
                    <p>...</p>
                    <p>.</p>
                </div>
            </div>
        </div>
    )

};

export default ProfileInfo;