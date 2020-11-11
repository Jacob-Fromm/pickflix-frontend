import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import "./LogIn.css"

const Welcome = () => {

    return (
        <div>

            <div>
                <div id="vertical-flip" class="welcomecard">
                    <div class="flip">
                        <div class="front">
                            <div class="logo">
                                <img src="https://fontmeme.com/temporary/d5947c25c8c66e59884ec5b36ad1d770.png" alt="PickFlix" />
                            </div>
                        </div>
                        <div className="back">
                            <Link to="/login">
                                <Button variant="contained" class="welcomebutton" >Log In</Button>
                            </Link>
                            <Link to="/signup">
                                <Button variant="contained" class="welcomebutton" >New User?</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Welcome;