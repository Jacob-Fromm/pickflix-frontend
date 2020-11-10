import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import "./LogIn.css"

const Welcome = () => {

    return (
    <div className="welcome">
        <Link to="/login">
            <Button variant="contained" class="welcomebutton" >Log In</Button>
        </Link>
        <Link to="/signup">
            <Button variant="contained" class="welcomebutton" >New User?</Button>
        </Link>
    </div>
    )

};

export default Welcome;