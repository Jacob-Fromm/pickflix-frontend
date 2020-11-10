import React from 'react';
import "./LogIn.css"

export default function LogIn() {

return (
    <div>
        <div class="back">
                <form className="loginform">
                    <div class="box-input">
                    <input type="username" name="username" placeholder="Username" required/>
                    <input type="password" name="password" placeholder="Password" required/>
                    <button className="loginbutton" type="submit">Log In</button>
                    </div>
                </form>
            </div>
    </div>
    );
    }