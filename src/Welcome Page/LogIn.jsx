import React from 'react';
import "./LogIn.css"
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


class LogIn extends React.Component {
    state = {
        username: "",
        password: ""
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    localSubmitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }

    render(){
        return (
            <div>
                <div className="back">
                    <form className="loginform" onSubmit={this.localSubmitHandler}>
                        <div className="box-input">
                            <input type="username" name="username" placeholder="Username" required value={this.state.username} onChange={this.changeHandler} />
                            <input type="password" name="password" placeholder="Password" required value={this.state.password} onChange={this.changeHandler} />
                            <button className="loginbutton" type="submit">Log In</button>
                            <Link to="/signup">
                                <Button variant="contained" className="welcomebutton" >New User?</Button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}

export default LogIn