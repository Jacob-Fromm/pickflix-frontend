import React from 'react';
import "./LogIn.css"

export default function Signup() {


return (
    <div>
        <div class="back">
                <form>
                    <div class="box-input">
                        <input type="name" name="name" placeholder="Name" required/>
                        <input type="photo" name="photo" placeholder="Photo" required/>
                        <input type="username" name="username" placeholder="Username" required/>
                        <input type="password" name="password" placeholder="Password" required/>
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
        </div>
    </div>
    );
    }