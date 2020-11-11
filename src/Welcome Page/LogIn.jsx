import React from 'react';
import "./LogIn.css"

class LogIn extends React.Component {
    state = {
        name: "",
        password: ""
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render(){
        console.log("props", this.props)
        return (
            <div>
                <div className="back">
                    <form className="loginform">
                        <div className="box-input">
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

export default LogIn