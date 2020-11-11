import React from 'react';
import "./LogIn.css"

export default class LogIn extends React.Component {

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render(){
        return (
            <div>
                <div class="back">
                    <form className="loginform">
                        <div class="box-input">
                            <input type="username" name="username" placeholder="Username" required value={this.state.username} onChange={this.changeHandler} />
                            <input type="password" name="password" placeholder="Password" required value={this.state.password} onChange={this.changeHandler} />
                            <button className="loginbutton" type="submit">Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}